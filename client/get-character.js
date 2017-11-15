const urlBuilder = require('./url-builder');
const request = require('request');

module.exports = (accounts, config, key, account, callback) => {
  let url = urlBuilder(config, key, account, accounts[account]);
  console.log(`GET ${url.replace(key, '[REMOVED]')}`);
  request(url, (error, response, body) => {
    if(!error) {
      callback(null, JSON.parse(body));
    }
  });
}
