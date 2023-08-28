const { appendFile } = require("fs/promises");

// Append a file to root directory
async function appendToFile(fileName, data) {
  try {
    await appendFile(fileName, data, { flag: "a" });
    console.log(`Appended data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to append file: ${error.message}`);
  }
}

module.exports = appendToFile;