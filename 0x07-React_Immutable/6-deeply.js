const { Map } = require("immutable");

module.exports = mergeDeeplyElements = (page1, page2) => {
  return Map(page1).mergeDeep(Map(page2));
};
