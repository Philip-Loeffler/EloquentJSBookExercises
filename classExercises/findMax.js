function findMaxAndIndex(values) {
  let maxFound = -Infinity;
  let maxIndex;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > maxFound) {
      maxFound = values[i];
      maxIndex = i;
    }
  }
  let retVal = {};
  retVal.max = maxFound;
  retVal.index = maxIndex;
  return retVal;

  // can do it this way too rather than the return above.
  // return {max: maxFound, inde: maxIndex}
}

let mAndI = findMaxAndIndex([4, 17, 3]);
console.log(mAndI);
