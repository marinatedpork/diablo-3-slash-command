module.exports = ({ name, class: klass, level, paragonLevel, kills: { elites }, stats: { damage } }) => {
  return { name, klass, level, paragonLevel, elites, damage };
}
