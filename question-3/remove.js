const fs = require('fs');
const path = require('path');

function files(directory, name) {
  console.log('REMOVING');
  fs.readdir(__dirname + directory + name, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      for (let file in files) {
        console.log(__dirname + directory + name + file + '.txt');
        // fs.unlink(__dirname + directory + name +  file + '.txt', (err) => {
        //   if (err) throw err;
        // });
      }
      // console.log('log' + i + extension);
    }
  });
}

module.exports = { files };
