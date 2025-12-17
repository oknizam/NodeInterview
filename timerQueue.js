//experiment 4

setTimeout(() => console.log("timeout 1"), 0)
setTimeout(() => {
  console.log("timeout 2")
  process.nextTick(() =>
    console.log("this is the inner next tick inside settimeout")
  )
}, 0)
setTimeout(() => console.log("timeout 3"), 0)


process.nextTick(() => {
  console.log("this is process.nextTick 2");
  process.nextTick(() =>
    console.log("this is the inner next tick inside next tick")
  );
});

process.nextTick(() =>
  console.log("this is process.nextTick 3")
);

Promise.resolve().then(() =>
  console.log("this is Promise.resolve 1")
);

Promise.resolve().then(() => {
  console.log("this is Promise.resolve 2");
  process.nextTick(() =>
    console.log("this is the inner next tick inside Promise then block")
  );
});

Promise.resolve().then(() =>
  console.log("this is Promise.resolve 3")
);


// microtask queue takes prority over timer queue


// this is process.nextTick 2
// this is process.nextTick 3
// this is the inner next tick inside next tick
// this is Promise.resolve 1
// this is Promise.resolve 2
// this is Promise.resolve 3
// this is the inner next tick inside Promise then block
// timeout 1
// timeout 2
//this is the inner next tick inside settimeout
// timeout 3


//  experiment 5

setTimeout(() => console.log("timeout 1"), 1000)
setTimeout(() => console.log("timeout 2"), 500)
setTimeout(() => console.log("timeout 3"), 0)

// timeout 3
// timeout 2
// timeout 1


// timer queue is not technically a queue it is min heap data structure

//  Note: after every timer queue , call stack checks microtask queue