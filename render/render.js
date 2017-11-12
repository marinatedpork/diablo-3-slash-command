const sortBy = require('sort-by');
const deserialize = require('./deserialize');
const format = require('./format');

module.exports = (err, results) => {
  console.log(results
    .map(deserialize)
    .sort(sortBy('-level', '-paragonLevel', '-eliteKills'))
    .reduce(format, ''));
}
