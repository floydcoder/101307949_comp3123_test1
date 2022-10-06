const fs = require('fs');

function files(directory, name, extension, content) {
  console.log('ADDING');
  console.log(__dirname + directory + name);
  for (let i = 0; i < 10; i++) {
    fs.writeFile(
      __dirname + directory + name + i + extension,
      content,
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('log' + i + extension);
        }
      }
    );
  }
}

module.exports = { files };
