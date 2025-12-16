1. REPL -> Read, Eval, Print and Loop
2. Menaing if i enter node in terminal in will take me to node terminal
3. 5+5 -> Read and eval phase
4. 10 -> Print
5. Loop
6. Like window object in browser which is global object
7. we have global command if i type "gloabl" commad in node terminal i will get object like window in browser
8. when we run any file by running node command like 
    node server.js "Hello Node"
    we can also pass argv which we can access in "process.argv"
    ![alt text](<Screenshot 2025-12-15 at 9.15.31 PM.png>)

    8.1 first argument is node install path
    8.2 File path runing
    8.3 rest arguments
9. Nodejs does not have document access, we don't need it also
10. History, location, navigation these are browser specific apis

11. Node has access dirname, filename, require -> es5 import -> es6

12. Nodejs runs only synchronous code , rest of code like file read, file open , file write, http request, crypto operations , path resolve all are like asyncronous IO operations are handled by libuv

13. These asynchronous operations are send to libuv with callback when response comes back handled by callstack

14. Libuv is written in C launguage, so when we trigger js function like any async operations send to libuv with nodejs bindings which is written in C++ laungauges which helps in connecting JS to C launguage function

15. In node js github repo which is open source "/src" folder contain binding functionality to libuv where "/lib" contains functions written in js for async operations 

![alt text](<Screenshot 2025-12-16 at 11.36.56 AM.png>)
-------------------------------------------------------

Thread pool
---------------------
1. lets take some time taking task like crypto hash password

console.log("start sync");
const start = new Date();
crypto.pbkdf2Sync("Nizam1234", "salt", 10000, 512, "sha512");
console.log("Time taken in miliseconds", new Date() - start)
console.log("end sync");

this will block other synchronosu task


2.  synchronous task are executed first console logs are synchronous here , crypto hashing is async task will go to thread pool, each task assigned to diffrent thread they excuted seperately


console.log("start async");
crypto.pbkdf2("Nizam1234", "salt", 10000, 512, "sha512", () => {
    console.log("Time taken in miliseconds", new Date() - startAsync)
  });

console.log("end async");
