/*=========================================================
                CALLBACK FUNCTION
=========================================================*/

/*
Definition:
A Callback is a function passed as an
argument to another function and is
executed later.

Callbacks are commonly used for
asynchronous operations.
*/

/*
Example:

function greet(name, callback){

    console.log("Hello " + name);

    callback();

}

function bye(){
    console.log("Goodbye");
}

greet("Mudassir", bye);
*/

/*
Output:

Hello Mudassir
Goodbye
*/

/*
Uses:
- Event Listeners
- setTimeout()
- setInterval()
- API Calls
- File Operations
*/

/*=========================================================
                    CALLBACK HELL
=========================================================*/

/*
Definition:
Callback Hell is a situation where
multiple nested callbacks make the
code difficult to read, maintain,
and debug.

It is also called the
"Pyramid of Doom."
*/

/*
Example:

login(function(){

    getUser(function(){

        getPosts(function(){

            getComments(function(){

                console.log("Done");

            });

        });

    });

});
*/

/*
Problems:
- Hard to Read
- Difficult to Debug
- Difficult to Maintain
- Deeply Nested Code
*/

/*
Solution:
- Promises
- Async/Await
*/

/*
Summary

Callback
--------
A function passed as an argument
to another function.

Callback Hell
-------------
Deeply nested callbacks that
make code difficult to manage.
*/

// Good and big example of Callback Hell

function profileLekarAao(username, cb) {
    console.log("Fetching profile data...");

    setTimeout(() => {
        cb({
            _id: 12122,
            username,
            age: 26,
            email: "huihui@hui.com"
        });
    }, 2000);
}

function saarePostLekarAao(id, cb) {
    console.log("Fetching all posts...");

    setTimeout(() => {
        cb({
            _id: id,
            posts: ["hey", "hello", "good morning"]
        });
    }, 3000);
}

function ekPostLekarAao(post, cb) {
    console.log("Fetching selected post...");

    setTimeout(() => {
        cb({
            title: post,
            likes: 256,
            comments: ["Nice!", "Awesome!", "Great post!"]
        });
    }, 2000);
}

profileLekarAao("harsh", function (data) {
    console.log("Profile:", data);

    saarePostLekarAao(data._id, function (posts) {
        console.log("Posts:", posts);

        ekPostLekarAao(posts.posts[0], function (post) {
            console.log("Post Details:", post);

            console.log("All data fetched successfully!");
        });
    });
});


// Output: 

// Fetching profile data...

// (after 2 sec)

// Profile: {
//   _id: 12122,
//   username: "harsh",
//   age: 26,
//   email: "huihui@hui.com"
// }

// Fetching all posts...

// (after 3 sec)

// Posts: {
//   _id: 12122,
//   posts: ["hey", "hello", "good morning"]
// }

// Fetching selected post...

// (after 2 sec)

// Post Details: {
//   title: "hey",
//   likes: 256,
//   comments: ["Nice!", "Awesome!", "Great post!"]
// }

// All data fetched successfully!



/*=========================================================
                    PROMISE
=========================================================*/

/*
Definition:
A Promise is an object that represents
the eventual completion (success) or
failure of an asynchronous operation.
*/

/*
Promise States

1. Pending   -> Initial state
2. Fulfilled -> Operation completed successfully
3. Rejected  -> Operation failed
*/

/*
Creating a Promise

const promise = new Promise((resolve, reject) => {

    if(success){
        resolve(data);
    }
    else{
        reject(error);
    }

});
*/

/*
then()

- Executes when the Promise is fulfilled.
- Receives the resolved value.

Syntax:

promise.then((data)=>{
    console.log(data);
});
*/

/*
catch()

- Executes when the Promise is rejected.
- Receives the error.

Syntax:

promise.catch((error)=>{
    console.log(error);
});
*/

/*
Summary

Promise
-------
Represents the future result of an
asynchronous operation.

then()
------
Handles Success.

catch()
-------
Handles Errors.
*/

let pr = new Promise(function (res, rej) {
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);

        if (rn > 5)
            res("resolved with " + rn);
        else
            rej("rejected with " + rn);

    }, 3000);
});

pr.then(function (val) {
    console.log(val);
}).catch(function (val) {
    console.log(val);
});