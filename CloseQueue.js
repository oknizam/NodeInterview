const fs = require("fs");

const stream = fs.createReadStream(__filename);

stream.close();

stream.on("close", () => {
  console.log("close read stream event")
})


setImmediate(() => console.log("setImmediate 1"));
setTimeout(() => console.log("settimeout 1"), 0);
Promise.resolve().then(() =>
  console.log("this is Promise.resolve")
);
process.nextTick(() =>
  console.log("this is the processNexttick")
);


// this is the processNexttick
// this is Promise.resolve
// settimeout 1
// setImmediate 1
//close read stream event


//  close event handlers will execute after all queues opertions executed 
