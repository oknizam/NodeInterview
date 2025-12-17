libUV Queues CB (Call back) below is order as well
--------------------------
1. Timer queue -> setTimeout, setIntreval [CB,CB]
2. I/O queue or Poll Phase -> file I/O , crypto etc  [CB,CB]
3. Check Queue -> setImmediate [CB,CB]
4. Close Queue -> any call back -

Microtask Queues
---------------------------
1. process.nextick queue -> [CB,CB]
2. Promise Queue -> [CB,CB]

---------------------------------------------------------------

In simple way after every queue , micro task queue will come check process nextick queue and then promise loop same for other queues


1. Any callbacks in the micro task queues are executed. First, tasks in the nextTick queue and only then tasks in the promise queue

2. All callbacks within the timer queue are executed

3. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue

4. All callbacks in the I/O queue are executed

5. Callbacks in the micro task queues if present are executed. nextTick queue followed by Promise queue.

6. All callbacks in the check queue are executed

7. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue

8. All callbacks in the close queue are executed

9. For one final time in the same loop, the micro task queues are executed. nextTick queue followed by promise queue.


<!-- important -->

If timer callback and I/O call back ready at same time , timer get priority


console.log("start")
--------------------------------------------------
------------                  -----------
heap memory                    Call stack
------------                  ------------
memory will                    
allocate
                              console.log("start")
                               global()
------------                  --------------
--------------------------------------------------

after execution conosle.log("start") will be removed, then after everyting done global() also get removed from call stack


![alt text](<Screenshot 2025-12-16 at 8.22.02 PM.png>)


10. [NOTE] IO events are polled we call it as IO POLLING -> second iteration we will not get CB() -> we have to poll to get the io operation is completed if yes we will get CB() from libuv thread pool