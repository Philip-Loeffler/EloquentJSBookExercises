let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.events.lenth);
console.log(day1.squirrel);

function rangeOfNumbers(x, y) {
  let range = [];
  for (let i = x; i <= y; i++) {
    range.push(i);
  }
  return range;
}

function sumOfNumbers(input) {
  let total = 0;
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

function reverseArray(input) {
  let range = [];
  for (var i = input.length - 1; i >= 0; i--) {
    range.push(i);
  }
  return range;
}

console.log(reverseArray(["a", "b", "c"]));

console.log(rangeOfNumbers(5, 10));
console.log(sumOfNumbers(rangeOfNumbers(5, 10)));

let array = ["a", "b", "c"];
let arraylength = array.length;
let arraylengthss = array.length - 1;
console.log(arraylength);
console.log(arraylengthss);

function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}
console.log(reverseArray(["A", "B", "C"]));
