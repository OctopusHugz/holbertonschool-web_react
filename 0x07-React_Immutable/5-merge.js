const { List, Map } = require('immutable');

const concatElements = (page1, page2) => { return List(page1).concat(List(page2)); }
const mergeElements = (page1, page2) => { return List(Map(page1).merge(Map(page2))); }

module.exports = { concatElements, mergeElements }