const fs = require("fs");

if (fs.existsSync("dir-to-remove")) {
  console.log("Already exists!");
} else {
  fs.mkdir("dir-to-remove", (err) => {
    if (err) throw err;
    console.log("directory created");
  });
}
