function rangeOfNumbers(x, y) {
  let range = [];
  for (let i = x; i <= y; i++) {
    range.push(i);
  }
  return range;
}

function sumOfNumbers(range) {
  let total = 0;
  for (let value of range) {
    total += value;
  }
  return total;
}

console.log(rangeOfNumbers(5, 10));
console.log(sumOfNumbers(rangeOfNumbers(5, 10)));
