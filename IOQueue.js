const fs = require("fs");

// experiment 6

fs.readFile(__filename, () => {
  console.log("File read 1")
});


process.nextTick(() => console.log("This is processnexTick 1"));

Promise.resolve().then(() => console.log("This is promise 1"));

// This is processnexTick 1
// This is promise 1
// File read 1


// experiment 7

setTimeout(() => console.log("settimeout 1"), 0)

fs.readFile(__filename, () => {
  console.log("File read 2")
});

// settimeout 1
// File read 2

// Note : when runing settimeout with 0 delay and IO operation cannot gaurantee order


// experiment 8 

fs.readFile(__filename, () => {
  console.log("File read 3")
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




// experiment 9 with setImmediate and IO POllING

fs.readFile(__filename, () => {
  console.log("File read 3")
});

process.nextTick(() =>
  console.log("this is the processNexttick")
);

Promise.resolve().then(() =>
  console.log("this is Promise.resolve")
);

setTimeout(() => console.log("settimeout 1"), 0)
setImmediate(() => console.log("setImmediate 1"));


// this is the processNexttick
// this is Promise.resolve
// settimeout 1
// setImmediate 1
// NOTE : File read 3  -> in second itreation of eventloop it will check IO POLLING , is IO operation completed if is it completed then CB() of IO comes to IO queue
