const raisinAlarm = function(cookies) {
  for (const item of cookies) {
    if (cookies[item] === "🍇") { 
      console.log(cookies[item])
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