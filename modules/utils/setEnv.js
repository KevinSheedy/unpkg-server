const argv = require('minimist')(process.argv.slice(2));
require('dotenv').config();

const { _, ...flags } = argv;

Object.keys(flags || {}).map(key => {
  const value = flags[key];
  process.env[key] = value;
});

process.env.ENABLE_CLOUDFLARE = !!process.env.ENABLE_CLOUDFLARE;

export default function() {
  return _;
}
