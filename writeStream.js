const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/Readme.md", "UTF-8");

// using process stream to the console
// process.stdout.write("hello");
// process.stdout.write(" world \n");

// using my stream to a file!
// writeStream.write("hello");
// writeStream.write(" world \n");

// read the data from the Readme.md file using the readStream, then write it to another file with the writeStream
// readStream.on("data", (data) => {
//   writeStream.write(data);
// });

// I can do the same read/write from/to files using process.stdin.pipe(writeStream!)
process.stdin.pipe(writeStream);

// then, I could use my own readStream instead of process like this:
readStream.pipe(writeStream);

// now you know how to read then write from a file to another file directly
// also, you know how to read from the terminal using process.stdin then write that data into a file using your writeStream
