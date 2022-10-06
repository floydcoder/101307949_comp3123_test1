// tells which files it deleted
// delete the Log directory
// output the filename to console

// get the Log folder as folder to process
// create 10 files and write some text in them
const create = require('./create');
const remove = require('./remove');

let fs = require('fs');
let path = require('path');


const logDir = '\\Log';
const content = 'Marco Stevanella 101307949';
const fileExtension = '.txt';
const fileName = '\\log';

if (fs.existsSync(__dirname + logDir)) {
  console.log('Directory Exists!');
  // remove files in Log directory, if directory exists
  remove.files(logDir, fileName);
  fs.rmdirSync(__dirname + logDir, { recursive: true, force: true });
} else {
  console.log('Direcory Does Not Exist');
  // Create Log directory, if it does not exists
  fs.mkdirSync(__dirname + logDir);
  create.files(logDir, fileName, fileExtension, content);
}
