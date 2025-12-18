const fs = require("fs");
// experiment 10

fs.readFile(__filename, () => {
  console.log("File read 3");
  setImmediate(() => console.log("setImmediate 1"));
});

process.nextTick(() =>
  console.log("this is the processNexttick")
);

Promise.resolve().then(() =>
  console.log("this is Promise.resolve")
);

setTimeout(() => console.log("settimeout 1"), 0)

// this is the processNexttick
// this is Promise.resolve
// settimeout 1
// File read 3
// setImmediate 1 

// experiment 11

fs.readFile(__filename, () => { // I/o Queue -> I/O polling 
  console.log("File read 3");
  setImmediate(() => console.log("setImmediate 1"));
  process.nextTick(() => console.log("This is processnexTick 1"));
  Promise.resolve().then(() => console.log("This is promise 1"));
});

process.nextTick(() =>
  console.log("this is the processNexttick")
);

Promise.resolve().then(() =>
  console.log("this is Promise.resolve")
);

setTimeout(() => console.log("settimeout 1"), 0)

// this is the processNexttick
// this is Promise.resolve
// settimeout 1
// File read 3
// This is processnexTick 1
// This is promise 1
// setImmediate 1


// experiment 12

setImmediate(() => console.log("setImmediate 1"));
setImmediate(() => {
  console.log("setImmediate 2")
  process.nextTick(() => console.log("This is processnexTick 1"));
  Promise.resolve().then(() => console.log("This is promise 1"));
});
setImmediate(() => console.log("setImmediate 3"));

// setImmediate 1
// setImmediate 2
// This is processnexTick 1
// This is promise 1
// setImmediate 3


// experiment 13

setTimeout(() => console.log("settimeout "), 0); // order of execution cannot be gauranteed
setImmediate(() => console.log("setImmediate 1"));



