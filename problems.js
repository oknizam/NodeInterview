// problem 1
console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

console.log('C');

// output
// A
// C
// B

// problem2 

console.log('start');

Promise.resolve().then(() => {
  console.log('promise');
});

setTimeout(() => {
  console.log('timeout');
}, 0);

console.log('end');

// output
// start
// end
// promise
// timeout

// problem 3

Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

Promise.resolve().then(() => console.log(3));

// output
// 1,3,2

// problem 4

async function test() {
  console.log('A');
  await Promise.resolve(); // async function return promise but until it get await it will wxecute syncronousely
  console.log('B');
}

console.log('C');
test();
console.log('D');

// output -> C, A, D, B

//problem 5

Promise.resolve().then(() => {
  console.log('promise');
  setTimeout(() => {
    console.log('timeout');
  }, 0);
});

console.log('sync');

// output : sync , promise , timeout

// problem 5

Promise.resolve()
  .then(() => {
    console.log('1');
  })
  .then(() => {
    console.log('2');
  });

console.log('3');

// output : 3, 1, 2

// problem 6

setTimeout(() => console.log('timeout'), 0);

Promise.resolve().then(() => {
  console.log('promise1');
  Promise.resolve().then(() => console.log('promise2'));
});

// output : promise1, promise2, timeout,

//  problem 7

async function foo() {
  console.log('foo start');
  setTimeout(() => console.log('timeout'), 0);
  await Promise.resolve();
  console.log('foo end');
}

foo();
console.log('global');

// output : foo start, global, foo end, timeout

// problem 8 

console.log('start');

setTimeout(() => {
  console.log('timeout');
}, 0);

for (let i = 0; i < 1e9; i++) { }

console.log('end');

// output :  start, end, timeout


// problem 9 

setTimeout(() => {
  console.log('timeout');
  Promise.resolve().then(() => console.log('promise'));
}, 0);

console.log('start');

// output : start , timeout, promise


// problem 10

console.log('A');

queueMicrotask(() => {
  console.log('B');
});

Promise.resolve().then(() => console.log('C'));

console.log('D');

// output : A, D , B, C

// problem 11

async function one() {
  console.log('1');
  await two();
  console.log('2');
}

async function two() {
  console.log('3');
}

one();
console.log('4');

// output : 1, 3, 4, 2 // two also have sync code not included any promise

// problem 12

new Promise((resolve) => {   // promise constrcutor runs immeditely
  console.log('A');
  resolve();
}).then(() => console.log('B'));

console.log('C');

// output : A, C, B 


// problem 13

Promise.resolve().then(function repeat() {
  console.log('microtask');
  Promise.resolve().then(repeat);
});

setTimeout(() => console.log('timeout'), 0);

// error block event loop, code freeze, recursively it will call repeat function


// problem 14

console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve()
  .then(() => {
    console.log('3');
    return Promise.resolve();
  })
  .then(() => console.log('4'));

console.log('5');


// output : 1, 5 , 3 , 4 ,2

// problem 15

setTimeout(() => console.log('timeout'), 0);

Promise.resolve().then(function recur() {
  console.log('promise');
  Promise.resolve().then(recur);
});

// output : error block event loop, code freeze
//  stack size exceeded will come for synchronous recurison not for async

function recur() {
  recur();
}
recur(); // ❌ Maximum call stack size exceeded


// problem 16

async function foo() {
  console.log('A');
  await 10;
  console.log('B');
}

console.log('C');
foo();
console.log('D');

// output : C, A, D , B  => await will wait for 10 , it will not log

// problem 17

const thenable = {
  then(resolve) {
    console.log('thenable');
    resolve();
  }
};

async function test() {
  console.log('start');
  await thenable;
  console.log('end');
}

test();
console.log('global');

//output: start , gloabal, thenable, end

// problem 18

Promise.resolve()
  .then(() => {
    console.log(1);
    return Promise.resolve(2);
  })
  .then(console.log);

Promise.resolve()
  .then(() => console.log(3));

// output : 1, 3, 2

// problem 19

new Promise((resolve) => {
  console.log('A');
  Promise.resolve().then(() => console.log('B'));
  resolve();
}).then(() => console.log('C'));

console.log('D');

// output : A, D, B , C 

//  probelm 20

function loop() {
  Promise.resolve().then(loop);
}

loop();
setTimeout(() => console.log('timeout'), 0);
// error time limit exceeded because loop it will nerevr come to timer queue

// problem 21

async function run() {
  console.log('1');
  setTimeout(() => console.log('2'), 0);
  await Promise.resolve();
  console.log('3');
}

run();

Promise.resolve().then(() => console.log('4'));
console.log('5');

//output:  1, 5, 3, 4, 2

// 1. new Promise willbe executed immeditely because it is synchronous
// 2. async function will execute syncronousely until it get await 
// 3. when it get await eventloop move to promise queue if promise , start execute next sync execution 








