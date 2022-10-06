const resolvePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 500);
  });
};

const rejectPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('error: delayed exception!'));
    }, 500);
  });
};

resolvePromise().then(console.log('message: delayed success'));
rejectPromise().catch((e) => console.error(e));
