const fs = require("fs");
const colorData = require("./assets/colorData.json");

colorData.colorList.forEach((c) => {
  // fs.appendFile will create the file if it doesn't exist, and append if it already there
  fs.appendFile(
    "./dir-will-be-removed/dummy-text.md",
    `${c.color}: ${c.hex} \n`,
    (err) => {
      if (err) {
        console.log("Mohamed, there is an error!!!!");
        throw err;
      }
    }
  );
});
