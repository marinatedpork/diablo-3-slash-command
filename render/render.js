const sortBy = require('sort-by');
const deserialize = require('./deserialize');
const format = require('./format');

module.exports = (callback, err, results) => {
  console.log('Rendering results');
  let reponse = results
    .map(deserialize)
    .sort(sortBy('-level', '-paragonLevel', '-eliteKills'))
    .reduce(format, '');
  callback(reponse);
}
