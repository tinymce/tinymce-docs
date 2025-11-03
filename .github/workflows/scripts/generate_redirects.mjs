import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

/**
 * 
 * @param {string[]} cmd 
 * @returns {Promise<{ cmd: string[], stdout: string, stderr: string, status: number | null, signal: NodeJS.Signals | null, error?: Error}>}
 */
const spawnAsync = (cmd) => new Promise((resolve) => {
  const p = spawn(cmd[0], cmd.slice(1), { stdio: ['inherit', 'pipe', 'pipe'] });
  p.stdout.setEncoding('utf-8');
  let out = '';
  let err = '';
  p.stdout.on('data', (chunk) => {
    out += chunk;
  });
  p.stderr.on('data', (chunk) => {
    err += chunk;
  });
  p.on('exit', (code, signal) => {
    const failed = code !== 0 || signal;
    const data = {
      cmd,
      stdout: out,
      stderr: err,
      status: code,
      signal: signal,
      ...(failed ? { error: new Error(err) } : {}),
    };
    resolve(data);
  });
});

/**
 * 
 * @param {string[]} cmd 
 * @returns {Promise<{ cmd: string[], stdout: string, stderr: string, status: number | null, signal: NodeJS.Signals | null, error?: Error}>}
 */
const dryRunSuccess = (cmd) => new Promise((resolve) => {
  console.log('Starting ' + cmd.join(' '));
  setTimeout(() => resolve({ cmd, stdout: '', stderr: '', status: 0, signal: null }), Math.floor(Math.random() * 100));
});


/**
 * Check if an S3 object exists
 */
function checkS3ObjectExists(_dryRun, _bucket, _prefix, subPath) {
  // it's too slow to talk to s3, so just check the local files we just uploaded...
  if (subPath.startsWith('docs/')) {
    return fs.existsSync(path.join(import.meta.dirname, '../../../build/site', subPath.slice('docs/'.length)));
  } else {
    return false;
  }
}

/**
 * 
 * @param {Record<string, string>} metadata 
 * @returns 
 */
const metadataArgs = (metadata) => {
  // Build metadata string in the format key1=value1,key2=value2
  const metadataString = Object.entries(metadata)
    .map(([key, value]) => `${key}=${value}`)
    .join(',');

  return metadataString ? ['--metadata', metadataString] : [];
}

/**
 * 
 * @param {boolean} dryRun 
 * @param {string} bucket 
 * @param {string} prefix 
 * @param {string} subPath 
 * @param {Record<string, string>} metadata 
 * @returns 
 */
const copyS3ObjectWithMetadataAsync = async (dryRun, bucket, prefix, subPath, metadata) => {
  const fullPath = `${prefix}/${subPath}`;
  const cmd = [
    'aws', 's3api', 'copy-object',
    '--bucket', bucket,
    '--copy-source', `${bucket}/${fullPath}`,
    '--key', subPath,
    '--metadata-directive', 'REPLACE',
    '--content-type', 'text/html',
    ...metadataArgs(metadata)
  ];
  const result = await (dryRun ? dryRunSuccess(cmd) : spawnAsync(cmd));
  return {
    ...result,
    copied: true,
    subPath,
  };
};

/**
 * 
 * @param {boolean} dryRun 
 * @param {string} bucket 
 * @param {string} prefix 
 * @param {string} subPath 
 * @param {Record<string, string>} metadata 
 * @param {string} newFileTemplate
 * @returns 
 */
const createNewS3ObjectAsync = async (dryRun, bucket, prefix, subPath, metadata, newFileTemplate) => {
  const fullPath = `${prefix}/${subPath}`;
  // AWS CLI command to put object with metadata
  const cmd = [
    'aws', 's3api', 'put-object',
    '--bucket', bucket,
    '--key', fullPath,
    '--body', newFileTemplate,
    '--content-type', 'text/html',
    ...metadataArgs(metadata)
  ];
  const result = await (dryRun ? dryRunSuccess(cmd) : spawnAsync(cmd));
  return {
    ...result,
    copied: false,
    subPath,
  }
}

/**
 * 
 * @param {boolean} dryRun 
 * @param {string} bucket 
 * @param {string} prefix 
 * @param {string} subPath 
 * @param {Record<string, string>} metadata 
 * @param {string} newFileTemplate
 * @returns 
 */
const createOrUpdateS3ObjectAsync = (dryRun, bucket, prefix, subPath, metadata, newFileTemplate) => {
  // Check if object already exists
  if (checkS3ObjectExists(dryRun, bucket, prefix, subPath)) {
    return copyS3ObjectWithMetadataAsync(dryRun, bucket, prefix, subPath, metadata);
  } else {
    return createNewS3ObjectAsync(dryRun, bucket, prefix, subPath, metadata, newFileTemplate);
  }
}

/**
 * 
 * @param {boolean} dryRun 
 * @param {string} bucket 
 * @param {string} prefix 
 * @param {Map<string, string>} redirectsByLocation 
 */
function* generateRedirectObjectsAsync(dryRun, bucket, prefix, redirectsByLocation) {
  // Create empty index.html content for the redirect
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>`;

  // Write temporary file
  const newFileTemplate = `/tmp/redirect-${Date.now()}.html`;
  fs.writeFileSync(newFileTemplate, htmlContent);

  let allSettled = Promise.resolve();

  try {
    for (const [location, locationRedirects] of redirectsByLocation) {
      // Create S3 object path by appending index.html to location
      const locationIndexHtml = location.endsWith('/')
        ? `${location}index.html`
        : `${location}/index.html`;

      // Remove leading slash from location
      const subPath = locationIndexHtml.startsWith('/') ? locationIndexHtml.slice(1) : locationIndexHtml;

      // Build metadata headers
      const metadata = {};

      locationRedirects.forEach((redirect, index) => {
        const i = index + 1; // 1-based indexing as requested

        // Add redirect location header
        metadata[`redirect-location-${i}`] = redirect.redirect;

        // Add pattern header if it exists
        if (redirect.pattern !== undefined) {
          metadata[`redirect-pattern-${i}`] = redirect.pattern;
        }
      });

      // Create or update the S3 object
      const task = createOrUpdateS3ObjectAsync(dryRun, bucket, prefix, subPath, metadata, newFileTemplate);
      yield task;
      // throw away task success/failure info, just keep task settled status
      const taskSettled = task.then(() => { }, () => { });
      allSettled = allSettled.then(() => taskSettled);
    }
  } finally {
    allSettled.then(() => {
      // Clean up temporary file
      if (fs.existsSync(newFileTemplate)) {
        fs.unlinkSync(newFileTemplate);
      }
    })
  }
}

/**
 * @template T
 * @param {number} max 
 * @param {Generator<Promise<T>, void, unknown>} source 
 * @returns {AsyncGenerator<T, void, unknown>}
 */
async function* parallelGenerator(max, source) {
  /**
   * @param {number} i
   * @param {IteratorResult<Promise<T>, void>} task 
   * @returns {Promise<[number, IteratorResult<T>]>}
   */
  const wrap = (i, task) => new Promise((resolve) => {
    if (task.done) {
      resolve([i, { done: true }]);
    } else {
      task.value.then((v) => resolve([i, { done: false, value: v }]))
    }
  })
  /** @type {(Promise<[number, IteratorResult<T, void>]>)[]} */
  let tasks = [];
  for (let i = 0; i < max; i++) {
    tasks.push(wrap(i, source.next()))
  }
  /** @type {(Promise<[number, IteratorResult<T, void>]> | null)[]} */
  let tasksAndNull;
  while (true) {
    const [i, v] = await Promise.race(tasks);
    if (v.done) {
      // move the tasks over to the nullable list
      tasksAndNull = tasks.splice(0, tasks.length);
      tasksAndNull[i] = null;
      break;
    } else {
      tasks[i] = wrap(i, source.next());
      yield v.value;
    }
  }
  let filteredTasks = tasksAndNull.filter((v) => v !== null);
  while (filteredTasks.length > 0) {
    const [i, v] = await Promise.race(filteredTasks);
    tasksAndNull[i] = null;
    if (!v.done) {
      yield v.value;
    }
    filteredTasks = tasksAndNull.filter((v) => v !== null);
  }
}

/**
 * 
 * @param {boolean} dryRun 
 * @param {string} bucket 
 * @param {string} prefix 
 * @param {number} parallel
 * @param {{location: string, pattern?: string, redirect: string}[]} redirects
 */
const makeRedirectObjects = async (dryRun, bucket, prefix, parallel, redirects) => {
  let successCount = 0;
  let errorCount = 0;
  // Group redirects by location to handle multiple redirects for the same location
  /** @type {Map<string, {location: string, pattern?: string, redirect: string}[]>} */
  const redirectsByLocation = new Map();

  redirects.forEach((redirect) => {
    const location = redirect.location;
    if (!redirectsByLocation.has(location)) {
      redirectsByLocation.set(location, []);
    }
    redirectsByLocation.get(location).push(redirect);
  });

  const tasks = parallelGenerator(parallel, generateRedirectObjectsAsync(dryRun, bucket, prefix, redirectsByLocation));
  let processedCount = 0;
  for await (const taskResult of tasks) {
    const { subPath, cmd, error } = taskResult;
    processedCount++;
    if (error) {
      errorCount++;
    } else {
      successCount++;
    }
    console.log(`\nProcessed ${processedCount} of ${redirectsByLocation.size}: ${taskResult.subPath}`);
    const fullPath = `${prefix}/${subPath}`;
    if (taskResult.copied) {
      console.log(`Updating S3 object: ${fullPath}`);
      console.log(`Command: ${cmd.join(' ')}`);
      if (taskResult.error) {
        console.error(`Error copying S3 object ${fullPath}:`, error);
      } else {
        console.log(`Successfully updated S3 object ${fullPath}`);
      }
    } else {
      console.log(`Created new S3 object: ${fullPath}`);
      console.log(`Command: ${cmd.join(' ')}`);
      if (taskResult.error) {
        console.error(`Error creating S3 object ${fullPath}:`, error);
      } else {
        console.log(`Successfully created S3 object ${fullPath}`);
      }
    }
  }

  console.log(`\nSummary:`);
  console.log(`Successfully processed: ${successCount} objects`);
  console.log(`Errors: ${errorCount} objects`);
  console.log('Redirect object generation completed.');
};

const usage = () => `
generate-redirects [--dry-run] <bucket> <prefix>
  Generate redirects in s3.

  Options:
    --parallel <n>   number of s3 command to run in parallel; default: 5
    --dry-run         only output the commands that will be run
`

const main = async () => {

  const args = process.argv.slice(2);
  const dryRun = (() => {
    const idx = args.findIndex((arg) => arg === '--dry-run');
    if (idx !== -1) {
      args.splice(idx, 1);
      return true;
    }
    return false;
  })();
  const parallelValue = (() => {
    const idx = args.findIndex((arg) => arg === '--parallel');
    if (idx !== -1) {
      const [_flag, num] = args.splice(idx, 2);
      return num;
    }
    return null;
  })();
  if (parallelValue != null && !/^\d+$/.test(parallelValue)) {
    return Promise.reject(`Invalid value for --parallel, got ${parallelValue}`);
  }
  const parallel = parallelValue != null ? parseInt(parallelValue, 10) : 5;
  if (args.length !== 2) {
    return Promise.reject(`Expected 2 values, got ${args.length}`);
  }
  const [bucket, prefix] = args;
  if (!/^[a-z0-9][a-z0-9\.-]{1,61}[a-z0-9]$/.test(bucket) ||
    /\.\./.test(bucket) || /^\d+\.\d+\.\d+\.\d+$/.test(bucket) ||
    /^xn--/.test(bucket) || /^sthree-/.test(bucket) || /^amzn-s3-demo-/.test(bucket) ||
    /-s3alias$/.test(bucket) || /--ol-s3$/.test(bucket) || /\.mrap$/.test(bucket) ||
    /--x-s3$/.test(bucket) || /--table-s3$/.test(bucket)) {
    return Promise.reject(`Invalid bucket name, got ${bucket}`);
  }

  if (!/^[a-z0-9\.-]+$/.test(prefix)) {
    return Promise.reject(`Invalid prefix, got ${prefix}`);
  }

  /**
   * @type {{location: string, pattern?: string, redirect: string}[]}
   */
  const redirects = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, '../../../redirects.json'), 'utf-8'));

  makeRedirectObjects(dryRun, bucket, prefix, parallel, redirects);
};


main().catch((err) => {
  console.error(err);
  console.error(usage());
  process.exit(1);
})