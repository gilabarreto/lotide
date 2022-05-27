const raisinAlarmArray = function (cookies) {
  let result = [];
  for (let x = 0; x < cookies.length; x++) {
    for (let y = 0; y < cookies[x].length; y++) {
      if (cookies[x][y] === "🍇") {
        console.log(cookies[x][y])
        result.push("Raisin alert!")
        break;
      } else {
        console.log(cookies[x][y])
        null
      }
      result.push("All good!")
      break;
    }
  }
  return result
}

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"]
  ]
));