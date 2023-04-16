function memory(n) {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    sum = sum + i;
  }

  console.log(sum);

  return sum;
}

memory(20);
