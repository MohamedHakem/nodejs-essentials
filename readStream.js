const fs = require("fs");

const readStream = fs.createReadStream("./assets/Readme.md", "UTF-8");

let fileText = 0;

console.log("type something...");

// reading files with streams causes node.js app uses less memory, because instead of reading all the file content and loading it into a buffer, it reading files bit by bit and chunk by chunk, they give me more control because they raise events!
readStream.on("data", (data) => {
  console.log(`I read ${data.length - 1} characters of text`);
  fileText += data.length - 1;
});

readStream.once("data", (data) => {
  console.log(data);
});

readStream.on("end", () => {
  console.log("finished reading data");
  console.log(`In total I read ${fileText} characters of text`);
});
