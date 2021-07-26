const { List } = require("immutable");
const getListObject = (array) => { return List(array); }
const addElementToList = (list, element) => { return list.push(element); }

module.exports = { getListObject, addElementToList };
