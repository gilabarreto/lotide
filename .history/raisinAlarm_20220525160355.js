const raisinAlarm = function(cookies) {
  for (const item of cookies) {
    console.log(cookies[item])

    if (cookies[item] === "🍇") { 
      return "Raisin alert!"
     } else {
        null;
      }
    }

  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));