// Closures mean getting value of an block scope variable.

function parentFunction() {
  var b = "try this";
  var childFunction = () => {
    console.log(b);
  };

  return childFunction;
}

const parent = parentFunction();

parent();
