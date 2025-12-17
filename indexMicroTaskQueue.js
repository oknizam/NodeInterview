// experiment 1

console.log("log1");
process.nextTick(() => console.log("processNexttick log"));
console.log("log2");

// output 
// log1
// log2
// processNexttick log

// In node sync will take priority over async
// nextick will go to callstack executed CB moved to processNexttick queue, waiting for next iteration 
// after log2 complete, callstack take CB from  processNexttick queue


// experiment 2

Promise.resolve().then(() => console.log("This is promise"))
process.nextTick(() => console.log("processNexttick log"));

// output 
// processNexttick log
// This is promise
//  callstack move promise CB() to Promise queue in microtask, then processNexttick CB() will moved to ProcessNexttick queue, ProcessNexttick queue will take priority over Promise queue



//experiment 3

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

// this is process.nextTick 2
// this is process.nextTick 3
// this is the inner next tick inside next tick
// This is promise
// this is Promise.resolve 1
// this is Promise.resolve 2
// this is Promise.resolve 3
// this is the inner next tick inside Promise then block

// processNextick will be used to handle errors , cleanup uneeded resources
