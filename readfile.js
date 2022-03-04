const fs = require("fs");

// this is Sync
//const text = fs.readFileSync("./assets/Readme.md", "UTF-8");

// this is async, reading a text file and give the encoding as a second arg
// fs.readFile("./assets/Readme.md", "UTF-8", (err, img) => {
//   console.log("text: ", img);
// });

// this is async, reading a binary file of an img, reading it into a nodejs type called buffer!
fs.readFile("./assets/alex.jpg", (err, img) => {
  if (err) {
    console.log(`An error has occurred: ${err.message}`);
    process.exit();
  }
  console.log(img);
});

// async => read the file, execute other block of code while reading it, then when the file is finished reading, callback the function in the second arg!
