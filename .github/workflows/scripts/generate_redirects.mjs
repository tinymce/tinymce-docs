import fs from 'node:fs';
import path from 'node:path';
import child_process from 'node:child_process';


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

const metadataArgs = (metadata) => {
  // Build metadata string in the format key1=value1,key2=value2
  const metadataString = Object.entries(metadata)
    .map(([key, value]) => `${key}=${value}`)
    .join(',');
  
  return metadataString ? ['--metadata', metadataString] : [];
}

/**
 * Copy existing S3 object to itself with new metadata
 */
function copyS3ObjectWithMetadata(dryRun, bucket, prefix, subPath, metadata) {
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

  console.log(`Updating existing S3 object with metadata: ${fullPath}`);
  console.log(`Command: ${cmd.join(' ')}`);
  
  const result = dryRun ? { status: 0 } : child_process.spawnSync('aws', cmd.slice(1), {
    stdio: 'inherit',
    encoding: 'utf8'
  });

  if (result.error) {
    console.error(`Error copying S3 object ${fullPath}:`, result.error);
    return false;
  } else if (result.status !== 0) {
    console.error(`AWS CLI copy command failed for ${fullPath} with exit code:`, result.status);
    return false;
  } else {
    console.log(`Successfully updated S3 object metadata: ${fullPath}`);
    return true;
  }
}

/**
 * Create new S3 object with generated content and metadata
 */
function createNewS3Object(dryRun, bucket, prefix, subPath, metadata, newFileTemplate) {
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

    console.log(`Creating new S3 object: ${fullPath}`);
    console.log(`Command: ${cmd.join(' ')}`);
    
    const result = dryRun ? { status: 0 } : child_process.spawnSync('aws', cmd.slice(1), {
      stdio: 'inherit',
      encoding: 'utf8'
    });

    if (result.error) {
      console.error(`Error creating S3 object ${fullPath}:`, result.error);
      return false;
    } else if (result.status !== 0) {
      console.error(`AWS CLI command failed for ${fullPath} with exit code:`, result.status);
      return false;
    } else {
      console.log(`Successfully created S3 object: ${fullPath}`);
      return true;
    }
}

/**
 * Create or update S3 object with metadata, reusing existing content if available
 */
function createOrUpdateS3Object(dryRun, bucket, prefix, subPath, metadata, newFileTemplate) {
  console.log(`\nProcessing: ${subPath}`);
  
  // Check if object already exists
  if (checkS3ObjectExists(dryRun, bucket, prefix, subPath)) {
    console.log(`Object exists, updating metadata...`);
    return copyS3ObjectWithMetadata(dryRun, bucket, prefix, subPath, metadata);
  } else {
    console.log(`Object doesn't exist, creating new one...`);
    return createNewS3Object(dryRun, bucket, prefix, subPath, metadata, newFileTemplate);
  }
}

/**
 * Generate S3 objects for all redirects
 */
function generateRedirectObjects(dryRun, bucket, prefix, redirectsByLocation) {
  console.log(`Processing ${redirectsByLocation.size} unique locations`);

  let successCount = 0;
  let errorCount = 0;

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
      if (createOrUpdateS3Object(dryRun, bucket, prefix, subPath, metadata, newFileTemplate)) {
        successCount++;
      } else {
        errorCount++;
      }
    }
  } finally {
    // Clean up temporary file
    if (fs.existsSync(newFileTemplate)) {
      fs.unlinkSync(newFileTemplate);
    }
  }

  console.log(`\nSummary:`);
  console.log(`Successfully processed: ${successCount} objects`);
  console.log(`Errors: ${errorCount} objects`);
}


const usage = () => `
generate-redirects [--dry-run] <bucket> <prefix>
  Generate redirects in s3.

  Options:
    --dry-run     only output the commands that will be run
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

  const redirects = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, '../../../redirects.json'), 'utf-8'));

  // Group redirects by location to handle multiple redirects for the same location
  const redirectsByLocation = new Map();

  redirects.forEach((redirect) => {
    const location = redirect.location;
    if (!redirectsByLocation.has(location)) {
      redirectsByLocation.set(location, []);
    }
    redirectsByLocation.get(location).push(redirect);
  });

  // Generate all redirect objects
  generateRedirectObjects(dryRun, bucket, prefix, redirectsByLocation);

  console.log('Redirect object generation completed.');
};


main().catch((err) => {
  console.error(err);
  console.error(usage());
  process.exit(1);
})