const alligator = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

const x = alligator.map((item) => {
  let newContainer = {};
  newContainer = item.score;
  return newContainer;
});

function sumOfNumbers(range) {
  let total = 0;
  for (let value of range) {
    total += value;
  }
  return total;
}

console.log(sumOfNumbers(x));
