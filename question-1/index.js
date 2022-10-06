const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

// Function Declaration
const lowerCaseWords = (array) => {
  return new Promise((resolve, reject) => {
    let words = array
      // filter array only by strings
      .filter((word) => typeof word === 'string')
      // make the strings all lower case
      .map((w) => w.toLowerCase());
    if (words.length < 10) {
      resolve(words);
    } else {
      let error = 'The array is too long';
      reject(error);
    }
  })
    .then((data) => console.log(`All went fine, this are the words: ${data}`))
    .catch((err) => console.error(err));
};

lowerCaseWords(mixedArray);

// Expected output --> ['pizza', 'wings']
