const cheerio = require('cheerio');
var fs = require('fs');
const $ = cheerio.load(fs.readFileSync('example.html'));

const ATTR = 'data-mgmtAutomationId';

const allIds = $(`[${ATTR}]`)
  .map((i, element) => $(element).attr(ATTR.toLowerCase()))
  .toArray();

console.log(allIds);
