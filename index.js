const sortBy = require('sort-by');
const async = require('async');
const request = require('request');

const url = (base, locale, key, id, heroId) => `${base}/profile/${id}/hero/${heroId}?locale=${locale}&apikey=${key}`;

const parse = ({ name, class: klass, level, paragonLevel, kills: { elites }, stats: { damage } }) => {
  return { name, klass, level, paragonLevel, elites, damage };
}

const capitalize = s => s[0].toUpperCase().concat(s.substring(1, s.length));

const format = (a, { name, klass, level, paragonLevel, elites, damage }) => {
  return a.concat(`*${name}* (${classEmojis[klass]}) - L *${level}*/P *${paragonLevel}*, *Elites*: ${elites}, *Damage*: ${damage}\n`);
}

const API_KEY = process.env.API_KEY;
const BASE = 'https://us.api.battle.net/d3';
const LOCALE = 'en_US';

const ids = {
  "FatherTime-1916": 95453835,
  "Juunt-1333": 87350790,
  // "Dune-1196",
  "ShivonQ-1977": 95456487,
  "ebrosef-1662": 95449415,
  "sriss-1654": 19877462,
  "mpork-11364": 95529790
};

classEmojis = {
  'demon-hunter': ':bow_and_arrow:',
  'monk': ':pray:',
  'crusader': ':hammer_and_pick:',
  'witch-doctor': ':japanese_ogre:',
  'wizard': ':party-wiz:',
  'barbarian': ':crossed_swords:',
  'necromancer': ':skull_and_crossbones:'
};

async.map(Object.keys(ids), (id, callback) => {
  request(url(BASE, LOCALE, API_KEY, id, ids[id]), (error, response, body) => {
    if(!error) {
      callback(null, JSON.parse(body));
    }
  });
}, (err, results) => {
  const parsed = results
    .map(parse)
    .sort(sortBy('-level', '-paragonLevel', '-eliteKills'))
    .reduce(format, '');
  console.log(parsed);
});


