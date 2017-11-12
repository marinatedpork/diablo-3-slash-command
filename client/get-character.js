const url = require('./url-builder');
const request = require('request');


module.exports = (accounts, config, key, account, callback) => {
  request(url(config, key, account, accounts[account]), (error, response, body) => {
    if(!error) {
      callback(null, JSON.parse(body));
    }
  });
}
