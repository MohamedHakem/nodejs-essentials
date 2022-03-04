const cp = require("child_process");

// spawn function can work with Async! not like the exec function!
const questionApp = cp.spawn("node", ["questionsInterface.js"]);

// these 3 lines to answer the questionApp automatically instead of me answering it in terminal
questionApp.stdin.write("Mohamed \n");
questionApp.stdin.write("Egypt \n");
questionApp.stdin.write("Nodejs \n");

questionApp.stdout.on("data", (data) => {
  console.log(`From the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log("question app process exited");
});
