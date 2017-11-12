const async = require('async');
const ACCOUNTS = require('./config/accounts');
const CONFIG = require('./config/api');
const getCharacter = require('./client/get-character');
const render = require('./render/render');

async.map(
  Object.keys(ACCOUNTS),
  getCharacter.bind(null, ACCOUNTS, CONFIG, process.env.API_KEY),
  render
);
