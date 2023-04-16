function callBack() {
  console.log('callback is calling');
}

function mainFunction(callBack) {
  callBack();
}

mainFunction(callBack);
