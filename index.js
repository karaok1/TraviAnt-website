const _ = require('lodash');

const numbers = [33, 34, 35, 13, 12];

_.each(numbers, function(number, i) {
    console.log(number);
});