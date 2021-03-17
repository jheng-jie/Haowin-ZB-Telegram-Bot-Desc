const FileSystem = require("fs").promises
const ncp = require('ncp').ncp;
const Path = require("path")
const DistPath = Path.resolve(__dirname, "../dist")
const RemovePath = Path.resolve(__dirname, "../docs")

async function init() {
  await FileSystem.rmdir(RemovePath, { recursive: true }).then(() => console.log(`${RemovePath} clear success.`))
  ncp(DistPath, RemovePath, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('done!');
  });
}

init().catch(e => console.error(e))
