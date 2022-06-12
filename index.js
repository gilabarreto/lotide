// DESCRIPTION: index.js file that exports all the functions in Lotide as an object.

const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters')
const findKey = require('./findKey')
const map = require('./map')
const takeUntil = require('./takeUntil')
const without = require('./without')
const eqArrays = require('./eqArrays');
const head = require('./head');
const middle = require('./middle');
const tail = require('./tail');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const flatten = require('./flatten');

module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  findKey,
  map,
  takeUntil,
  without,
  eqArrays,
  head,
  middle,
  tail,
  countOnly,
  letterPositions,
  findKeyByValue,
  eqObjects,
  flatten
};