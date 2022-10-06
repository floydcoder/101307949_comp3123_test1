const resolvePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 500);
  });
};

const rejectPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error("message: 'delayed rejection'");
      } catch (e) {
        reject(e);
      }
    }, 500);
  });
};

resolvePromise().then(() => {
  let message = "message: 'delayed success'";
  console.log(message);
});
rejectPromise().catch((e) => console.log(e));
