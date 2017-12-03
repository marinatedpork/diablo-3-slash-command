const emojis = require('./emoji-map');

module.exports = (a, { name, klass, level, paragonLevel, elites, damage }, i) => {
  console.log(`Rendering ${name}`);

  if (i === 0 && name === 'zym') {
    var url = Math.floor(Math.random() * 100) % 2 === 0 ? 'https://i.imgur.com/EMZxF8M.png' : 'https://i.imgur.com/d5FpSNO.png';
    a = `${url}\n*THE AGE OF JOSH IS UPON US!1!!one!*\n\n`;
  }


  return a.concat(`*${i + 1}.* ${name} (${emojis[klass]}) - L ${level} / P ${paragonLevel} / E ${elites} / DMG ${damage}\n`);
}
