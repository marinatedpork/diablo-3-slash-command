module.exports = ({base, locale}, key, id, heroId) => `${base}/profile/${id}/hero/${heroId}?locale=${locale}&apikey=${key}`;
