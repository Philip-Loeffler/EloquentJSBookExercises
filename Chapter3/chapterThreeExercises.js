const min = function (a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

function findMinimum(a, b) {
  return Math.min(a, b);
}

function min2(a, b) {
  return a < b ? a : b;
}

function findNumberMinimum(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(findMinimum(10, 100));
console.log(findNumberMinimum(10, 100));

function countBs(countedString) {
  let total = 0;
  for (let i = 0; i < countedString.length; i++) {
    if (countedString[i] == "B") {
      total++;
    }
  }
  return total;
}
//check against letter you pass in
function countBss(str, char) {
  let total = 0;
  for (let i = 0; str < countedString.length; i++) {
    if (str[i] == char) {
      total++;
    }
  }
  return total;
}
console.log(countBs("BBC"));
