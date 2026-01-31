const crypto = require("crypto");

// synchronous
const startTime = new Date();
console.log("start time", startTime);
crypto.pbkdf2Sync("Nizam", "salt", 1000, 512, "sha512");
console.log("end time", new Date() - startTime);


// async
const startTime1 = new Date();
console.log("start time1", startTime1);

crypto.pbkdf2("Nizam", "salt", 1000, 512, "sha512", (err) => {
  if (err) {
    throw err.message;
  }
  console.log("end time async", new Date() - startTime1)

});

console.log("end");
