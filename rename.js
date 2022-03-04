const fs = require("fs");

// Sync
fs.renameSync("./assets/colors.json", "./assets/colorData.json");

// or Async, also rename can rename or move files!
fs.rename("./assets/notes.md", "./storage-files/notes.md", (err) => {
  if (err) throw err;
});

setTimeout(() => {
  // unlink removes/deletes files!
  fs.unlinkSync("./assets/alex.jpg");
}, 4000);
