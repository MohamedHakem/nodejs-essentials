const path = require("path");

// const dirUploads = path.join(__dirname, "www", "files", "uploads");

// console.log(dirUploads);

const { log } = require("util");

// log(path.basename(__filename));

// log(" ^ The name of the current file");

const { getHeapStatistics } = require("v8");

log(getHeapStatistics());
