# Lotide 1.0.1

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gilabarreto/lotide`

**Require it:**

`const _ = require('@gilabarreto/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head: returns the first element from an array;
* middle: returns the middle element from an array;
* tail: returns the last element from an array;
* eqArrays: evaluates if the arrays are equal;
* assertEqual: evaluates if the returned value is equal to what's expected;
* assertArraysEqual: evaluates if the returned value value from the arrays are equal.
