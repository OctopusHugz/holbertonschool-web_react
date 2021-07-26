const { is } = require('immutable');

module.exports = areMapsEqual = (map1, map2) => { return is(map1, map2); }
