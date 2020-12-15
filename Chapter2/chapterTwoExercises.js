for (let hashTag = "#"; hashTag.length <= 8; hashTag += "#")
  console.log(hashTag);

for (let p = 0; p <= 100; p++) {
  console.log(p);
}

for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

let tag = "####";
for (let i = 0; i <= 8; i++) {
  if (i % 2 == 0) {
    console.log(" " + tag);
  } else console.log(tag);
}
