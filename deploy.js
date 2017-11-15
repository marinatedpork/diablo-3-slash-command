#! /usr/local/bin/node

const { execSync } = require('child_process');
const { Lambda } = require('aws-sdk');
const { readFileSync } = require('fs');

execSync('zip -r module.zip index.js render config client node_modules');

const config = { region: 'us-east-2' };

const params = {
  FunctionName: 'diablo-3-character-fetcher',
  Publish: true,
  ZipFile: readFileSync('module.zip')
};

function callback(err, data) {
  console.log(err ? ['Error', err, err.stack] : ['Success', data]);
}

new lambda(config).updateFunctionCode(params, callback);
