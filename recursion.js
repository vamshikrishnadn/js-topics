// recursion mean calling same function inside the function itself
// calling same function in finite type

// running the function n number of times until it satisfies the condition.

function test(n) {
  console.log(n);
  if (n > 0) {
    test(n - 1);
  }
}

test(10);
