const tiles = [
  { tile: "N", score: 1, bonus: 3 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8, bonus: 3 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

const x = tiles.map((item) => {
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

// with a function, way easier than taking the items out of the array
function calcScore(hand) {
  let total = 0;
  for (let tile of hand) {
    total += tile.score;
    if (tile.bonus != undefined) {
      total += tile.bonus;
    }
    console.log(tile);
  }
  return total;
}

let total = calcScore(tiles);
console.log(total);
