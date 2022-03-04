const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting... ${p}%`);
};

// first thing to execute
console.log(`setting a ${waitTime / 1000} seconds delay`);

const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("Done");
};

// third to execute => waits .5 sec then logs the currentTime, repeat
const interval = setInterval(incTime, waitInterval);

// second thing to execute => wait 3 seconds then clear the interval, then logs "Done"
setTimeout(timerFinished, waitTime);
