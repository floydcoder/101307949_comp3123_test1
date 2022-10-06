const fs = require('fs');
const path = require('path');
console.log(path.basename);

function files(directory, name) {
  console.log('REMOVING');
  fs.readdir(__dirname + directory, (err, files) => {
    if (err) {
      console.log(err);
    }

    for (let file in files) {
      console.log('Deleting: ' + name + file + '.txt');
      fs.unlink(__dirname + directory + name + file + '.txt', (err) => {
        if (err) throw err;
      });
    }
    // console.log('log' + i + extension);
  });
}

module.exports = { files };
