function childFunction1() {
  console.log("calling callback 1");
}
// function childFunction2() {
//   console.log("calling callback 2");
// }

function parentFunction(callback) {
  callback();
}

parentFunction(childFunction1);
// parentFunction(childFunction2);
