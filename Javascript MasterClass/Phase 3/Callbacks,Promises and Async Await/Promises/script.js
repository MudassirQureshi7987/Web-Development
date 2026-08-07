/*=========================================================
                    ASYNC & AWAIT
=========================================================*/

/*
async

Definition:
The 'async' keyword makes a function
always return a Promise.

If a normal value is returned,
JavaScript automatically wraps it
inside Promise.resolve().
*/

/*
await

Definition:
The 'await' keyword pauses the execution
of an async function until a Promise
is settled (fulfilled or rejected).

It returns the resolved value.

It can only be used inside an
async function.
*/

/*
Syntax

async function demo(){

    const data = await promise;

}
*/

/*
Example

function getData(){

    return new Promise((resolve)=>{

        setTimeout(()=>{
            resolve("Data Received");
        },2000);

    });

}

async function fetchData(){

    const data = await getData();

    console.log(data);

}

fetchData();
*/

/*=========================================================
                IMPORTANT POINTS
=========================================================*/

/*
1. async always returns a Promise.

Example:

async function hello(){
    return "Hi";
}

hello();

Returns:
Promise { "Hi" }
*/

/*
2. await only works with Promises.

If a normal value is awaited,
JavaScript automatically converts it
to Promise.resolve(value).

Example:

let x = await 10;

Equivalent to:

let x = await Promise.resolve(10);
*/

/*
3. await pauses only the current async
function, NOT the entire JavaScript
program.
*/

/*
4. await makes asynchronous code look
like synchronous code, improving
readability.
*/

/*
5. Multiple await statements execute
one after another (Sequential Execution).

Example:

await task1();

await task2();

await task3();
*/

/*
6. If independent tasks should run
together, use Promise.all().

Example:

const [a,b] = await Promise.all([
    task1(),
    task2()
]);
*/

/*
7. Errors should be handled using
try...catch.

Example:

try{

    let data = await fetchData();

}

catch(err){

    console.log(err);

}
*/

/*
8. await waits until the Promise is
Fulfilled or Rejected.

After that execution continues.
*/

/*
9. async/await is syntactic sugar over
Promises.

Internally it still uses Promises.
*/

/*=========================================================
            Promise vs Async/Await
=========================================================*/

/*
Promise

login()

.then(getPosts)

.then(getComments)

.catch(handleError);
*/

/*
Async/Await

async function main(){

    try{

        const user = await login();

        const posts = await getPosts(user);

        const comments = await getComments(posts);

    }

    catch(err){

        console.log(err);

    }

}
*/

/*=========================================================
                    BENEFITS
=========================================================*/

/*
- Cleaner Syntax
- More Readable
- Easier to Debug
- Better Error Handling
- Avoids Callback Hell
- Easier Promise Chaining
*/

/*=========================================================
                    SUMMARY
=========================================================*/

/*
async
-----
Makes a function always return a Promise.

await
-----
Waits for a Promise to settle and
returns its resolved value.

try...catch
-----------
Handles rejected Promises.

Promise.all()
-------------
Runs multiple Promises concurrently.

Remember:
async/await does NOT replace Promises.
It is built on top of Promises.
*/