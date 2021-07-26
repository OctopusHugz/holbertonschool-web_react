const { Map } = require('immutable');

module.exports = getImmutableObject = (object) => { return Map(object) };
