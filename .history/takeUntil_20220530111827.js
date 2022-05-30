const takeUntil = function (array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      for (let x = 0; x < array.length; x++) {
        if (array[x] === item) {
/*           console.log(array[x])
          console.log(x) */
          console.log(array.slice(0, x))
          result.push(array.slice(0, x))
        }
      }
    }

  }
  return result;
}

const data1 = [1, 2, 5, 7, 2, 10, 32, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", "test", "hello", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/* [ 1, 2, 5, 7, 2 ] Expected Output
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]  */