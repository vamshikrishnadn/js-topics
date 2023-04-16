let memoryObject = {};

function memoryFunction(n) {
  if (n in memoryObject) {
    console.log('inObj');
    return memoryObject[n];
  } else {
    let sum = 0;
    for (i = 0; i <= n; i++) {
      sum = sum + i;
    }
    memoryObject.num = 10000;
    console.log('outside', sum);
    return sum;
  }
}
console.log('🚀 ~ file:memoization.js:2 ~ memoryObject:', memoryObject);

memoryFunction(200);
