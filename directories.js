const fs = require("fs");

// this is used to rename a dir
// fs.renameSync("./dir-to-remove", "./dir-will-be-removed");

// delete all files inside the directory first! Sync!
fs.readdirSync("./dir-will-be-removed").forEach((fileName) => {
  fs.unlinkSync(`./dir-will-be-removed/${fileName}`);
});

// to remove a dir
fs.rmdir("./dir-will-be-removed", (err) => {
  if (err) throw err;
  console.log("./storage directory removed!");
});
