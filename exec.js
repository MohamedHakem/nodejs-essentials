// working with the exec function and the child_process module!
// NOTE: exec handles Sync process, not Async!
const cp = require("child_process");

// exec used to executes commands!
// start url for win 10 and open url for mac/linux!
// cp.exec("start http://www.linkedin.com/learning");

// if the command returns data, we can grab that data!
// dir command to list the dirs of current dir, err is the nodejs error, stderr is the err returned from the command line!

// cp.exec("sdir", (err, data, stderr) => {
//   // this for the nodejs err
//   if (err) throw err;
//   // this for the returned err from the command!
//   if (err) console.log("command err: ", stderr);
//   console.log("data: ", data);
// });

// also, I can run another node process like this:
cp.exec("node readStream", (err, data, stderr) => {
  console.log("data: ", data);
});
