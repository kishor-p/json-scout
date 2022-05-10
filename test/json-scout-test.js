const { JsonScout } = require("../lib/json-scout");

// const jStr = '{"fname": "kishor", "lname": "prakash", "address": {"line1": "Grona Gatan 43", "line2": "Lgh 211", "post": 51454}, "office": {"office-line1": "Grona Gatan 43", "office-line2": "Lgh 211"}}';

let jStr = require('./test-data-1.json');

const jScout = new JsonScout(jStr);

// console.log(jScout.scoutOneByKey('address'))
// console.log('------------------------------');

// console.log(jScout.scoutAllByKey('address'))
// console.log('------------------------------');

console.log(jScout.scoutOneByValue(51454))
console.log('------------------------------');