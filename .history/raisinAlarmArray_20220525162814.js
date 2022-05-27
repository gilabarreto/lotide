const raisinAlarmArray = function (cookies) {
  let result = [];
  for (let x = 0; x < cookies.length; x++) {
    for (let y = 0; y < cookies[x].length; y++)
      if (cookies[x][y] === "🍇") {
        console.log("raisin")
        result.push("Raisin alert!")
        break;
      } else {
        null
        continue;
      }
  }
  result.push("All good!")
  return result
}

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));