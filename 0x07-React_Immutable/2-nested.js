const { getIn } = require("immutable");
module.exports = function accessImmutableObject (object, array) {
  return getIn(object, array);
};
