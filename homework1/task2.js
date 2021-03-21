const csv = require("csvtojson");
const { createReadStream, createWriteStream } = require("fs");
const path = require("path");
const rootDir = require("../rootDir");
const fs = require("fs/promises");

(async () => {
    
  const homework1Path = path.join(rootDir, "homework1");
  const csvPath = path.join(homework1Path, "csv/input.csv");
  const txtPath = path.join(homework1Path, "text/output.txt");

  await fs.mkdir(path.join(homework1Path, "text"), { recursive: true });

  const readStream = createReadStream(csvPath);
  const writeStream = createWriteStream(txtPath);
  readStream.on('error', errorHandler);
  writeStream.on('error',errorHandler);

  csv()
    .fromStream(readStream)
    .subscribe(
      (json) => {
        const jsonString = `${JSON.stringify(json)} \n`;
        writeStream.write(jsonString, errorHandler);
      },
      errorHandler,
      completeHandler
    );

  function errorHandler(error) {
    if (error) console.log(error);
  }

  function completeHandler() {
    writeStream.end();
    console.log("Complete!");
  }
})();
