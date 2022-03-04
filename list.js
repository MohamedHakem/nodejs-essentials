const fs = require("fs");

// fs.readdirSync will block because it's Sync! fs.readdir is async!

// reading the files first, the callback function third!
fs.readdir("./assets", (err, files) => {
  if (err) throw err;
  console.log("complete");

  console.log("files: ", files);
});

// this executes second
console.log("started reading files");
