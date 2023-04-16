let conditions = true;

const proms = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (conditions) {
      resolve("Hello");
    } else {
      reject("This condition failed");
    }
  }, 2000);
});

proms
  .then((result) => {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
