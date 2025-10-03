
const branch = process.argv[2] ?? process.env.GITHUB_REF_NAME;
const subdomain = (
  branch
    .toLowerCase()                  // convert to lowercase
    .replace(/[/\s]/g, '-')         // convert spaces and slashes to dash
    .replace(/[^0-9a-z-]/g, '')     // remove non alphanumeric+dash
    .replace(/-$/g, '')             // remove trailing dash
    .slice(0, 63)                   // limit to 63 characters
);
console.log(`subdomain=${subdomain}`);