const assertEqual = require('./assertEqual');

const tail = function(index) {
  return index.slice(1);
};

module.exports = tail;