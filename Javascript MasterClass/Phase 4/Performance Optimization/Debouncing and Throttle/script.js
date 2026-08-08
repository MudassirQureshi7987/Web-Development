/*=========================================================
                    DEBOUNCE
=========================================================*/

/*
Definition:
Debouncing is a technique that delays the
execution of a function until a specified
time has passed without the event
occurring again.
*/

/*
Syntax

function debounce(fn, delay){

    let timer;

    return function(...args){

        clearTimeout(timer);

        timer = setTimeout(()=>{
            fn(...args);
        }, delay);

    };

}
*/

/*
How It Works

1. Event Occurs
2. Start Timer
3. If another event occurs,
   cancel previous timer.
4. Start a new timer.
5. Execute function only after
   the user stops triggering
   the event for the delay period.
*/

/*
Why Closure?

The returned function remembers the
'timer' variable, allowing every event
to cancel the previous timeout.

Without Closure, Debouncing would
not work.
*/

/*
Uses

- Search Bars
- API Calls
- Auto Save
- Window Resize
- Input Validation
- Scroll Events
*/

/*
Benefits

- Prevents unnecessary function calls.
- Improves performance.
- Reduces API requests.
- Better User Experience.
*/

/*
Summary

Debounce
--------
Delays function execution until the
event stops occurring for a specified
time.

Key Concepts
------------
- Closure
- clearTimeout()
- setTimeout()
- Event Listeners
*/

let input = document.querySelector("input");

function debounce(fnc, delay) {

    let timer;

    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {

            fnc(...args);

        }, delay);

    };

}

input.addEventListener(
    "input",
    debounce(function () {
        console.log("Ran");
    }, 1000)
);

/*=========================================================
                    THROTTLE
=========================================================*/

/*
Definition:
Throttling is a technique that limits
how frequently a function can execute.

It ensures the function runs at most
once within a specified time interval.
*/

/*
Syntax

function throttle(fn, delay){

    let lastTime = 0;

    return function(...args){

        const now = Date.now();

        if(now - lastTime >= delay){

            lastTime = now;

            fn(...args);

        }

    };

}
*/

/*
How It Works

1. Event Occurs.
2. Execute immediately.
3. Store execution time.
4. Ignore further events until
   the delay has passed.
5. Execute again after the delay.
*/

/*
Why Closure?

The returned function remembers
'lastTime', allowing every event
to compare the current time with
the previous execution time.
*/

/*
Uses

- Scroll Events
- Resize Events
- Mouse Movement
- Button Click Protection
- Game Controls
*/

/*
Benefits

- Improves Performance
- Prevents Frequent Function Calls
- Reduces CPU Usage
- Smooth User Experience
*/

/*
Summary

Throttle
--------
Limits the execution of a function
to once every specified time interval.

Key Concepts
------------
- Closure
- Date.now()
- Event Listeners
- Time Comparison
*/

let input = document.querySelector("input");

function throttle(fnc, delay) {

    let timer = 0;

    return function (...args) {

        let now = Date.now();

        if (now - timer >= delay) {

            timer = now;

            fnc(...args);

        }

    };

}

input.addEventListener(
    "input",
    throttle(function () {
        console.log("ran");
    }, 1000)
);