function rangeOfNumbers(x, y) {
  let range = [];
  for (let i = x; i <= y; i++) {
    range.push(i);
  }
  return range;
}

function sumOfNumbers(input) {
  total = 0;
  for (var idx = 0; idx <= input.length - 1; idx++) {
    total += input[idx];
  }
  return total;
}
//also written like this with 'advanced for loop'
function sumOfNumbers(range) {
  let total = 0;
  for (let value of range) {
    total += value;
  }
  return total;
}

console.log(rangeOfNumbers(5, 10));
console.log(sumOfNumbers(rangeOfNumbers(5, 10)));
