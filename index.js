const async = require('async');
const ACCOUNTS = require('./config/accounts');
const CONFIG = require('./config/api');
const getCharacter = require('./client/get-character');
const render = require('./render/render');

const respond = (context, text) => {
  console.log("Sending");
  context.succeed({
    response_type: 'in_channel',
    text
  });
}

exports.handler = (event, context) => {
  async.map(
    Object.keys(ACCOUNTS),
    getCharacter.bind(
      null,
      ACCOUNTS,
      CONFIG,
      process.env.API_KEY
    ),
    render.bind(
      null,
      respond.bind(null, context)
    )
  );
}
