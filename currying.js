// passing params to deep nested child and calling them simultaneously is called currying

let num = (num1) => {
  return (num2) => {
    return (num3) => {
      console.log(num1, num2, num3);
    };
  };
};

num(10)(20)(30);
