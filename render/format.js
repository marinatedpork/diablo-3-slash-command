const emojis = require('./emoji-map');

module.exports = (a, { name, klass, level, paragonLevel, elites, damage }) => {
  return a.concat(`*${name}* (${emojis[klass]}) - L ${level}/P ${paragonLevel}\nElites: ${elites}\nDamage: ${damage}\n\n`);
}
