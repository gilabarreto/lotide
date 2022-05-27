const raisinAlarmArray = function(cookies) {
  for (const item of cookies) {
    if (cookies[item] === "🍇") { 
      return "Raisin alert!"
     } else {
        null;
      }
    }

  return "All good!";
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));