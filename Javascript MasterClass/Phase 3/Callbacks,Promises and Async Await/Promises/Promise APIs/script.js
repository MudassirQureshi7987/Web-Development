/*=========================================================
                    PROMISE APIS
=========================================================*/

/*
Promise.all()

Waits for all Promises to fulfill.

Rejects immediately if any Promise rejects.

Returns:
Array of resolved values.
*/

/*
Promise.allSettled()

Waits for all Promises to settle
(fulfilled or rejected).

Never fails because of individual
Promise failures.

Returns:
Array of result objects.
*/

/*
Promise.race()

Returns the first Promise that settles.

Winner can be:
- Fulfilled
- Rejected
*/

/*
Promise.any()

Returns the first fulfilled Promise.

Ignores rejected Promises.

Rejects only if every Promise rejects.
*/

/*
Summary

Promise.all()
--------------
All Success

Promise.allSettled()
--------------------
Everything

Promise.race()
--------------
First Finished

Promise.any()
-------------
First Success
*/

Promise.all()
↓

Need EVERYTHING

-------------------------

Promise.allSettled()
↓

Need ALL RESULTS

-------------------------

Promise.race()
↓

Need FIRST RESPONSE

-------------------------

Promise.any()
↓

Need FIRST SUCCESS