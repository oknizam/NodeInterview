// thread pool
// lets take some time taking task like crypto hash password
// checking time taking to execute sync hash method
const crypto = require("crypto");
process.env.UV_THREADPOOL_SIZE = 6

console.log("start sync");
const start = new Date();
crypto.pbkdf2Sync("Nizam1234", "salt", 10000, 512, "sha512");
crypto.pbkdf2Sync("Nizam1234", "salt", 10000, 512, "sha512");
crypto.pbkdf2Sync("Nizam1234", "salt", 10000, 512, "sha512");
console.log("Time taken in miliseconds", new Date() - start)
console.log("end sync");



// synchronous task are executed first console logs are synchronous here , crypto hashing is async task will go to thread pool, each task assigned to diffrent thread they excuted seperately here parellel executions

console.log("start async");
const startAsync = new Date();

for (let i = 0; i < 5; i++) {
  crypto.pbkdf2("Nizam1234", "salt", 10000, 512, "sha512", () => {
    console.log("Time taken in miliseconds", new Date() - startAsync)
  });
}
console.log("end async");

// thread pool size by default thread pool has 4 threads as we can see 5th task takes twice of average each task, so means after one of 4 thread get free then 5 th task is get inti thread




