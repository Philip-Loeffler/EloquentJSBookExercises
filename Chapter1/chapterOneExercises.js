for (let hashTag = "#"; hashTag.length <= 8; hashTag += "#")
  console.log(hashTag);

for (let i = 0; i < 100; i++) {
  if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else i % 3 == 0 && i % 5 == 0;
  console.log("fizzbuzz");
}

let tag = "####";
for (let i = 0; i <= 8; i++) {
  if (i % 2 == 0) {
    console.log(" " + tag);
  } else console.log(tag);
}
