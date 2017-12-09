const emojis = require('./emoji-map');

module.exports = (a, { name, klass, level, paragonLevel, elites, damage }, i, characters) => {
  console.log(`Rendering ${name}`);

  var emoji = emojis[klass];

  if (i === 0 && name === 'zym') {
    var url = Math.floor(Math.random() * 100) % 2 === 0 ? 'https://i.imgur.com/EMZxF8M.png' : 'https://i.imgur.com/d5FpSNO.png';
    a = `${url}\n*thE AgE Of jOsh Is UpOn Us!1!!one!*\n\n`;
  }

  if (i === 0 && name === 'ReaminHunter') {
    var url = Math.floor(Math.random() * 100) % 2 === 0 ? 'https://i.imgur.com/L0asBvy.gif' : 'https://i.imgur.com/oCHPwSg.png';
    a = `${url}\n*RRRRRRRRRRRREAMIN HUNTER STYLE. AGE OF MRCC*\n\n`;
  }


  if (characters[0].name === 'ReaminHunter') {
    emoji = name === 'ReaminHunter' ? ':eggplant:' : ':peach:';
  }


  return a.concat(`*${i + 1}.* ${name} (${emoji}) - L ${level} / P ${paragonLevel} / E ${elites} / DMG ${damage}\n`);
}
