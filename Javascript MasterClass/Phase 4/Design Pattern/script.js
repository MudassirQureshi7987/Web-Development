/*=========================================================
                    MODULE PATTERN
=========================================================*/

/*
Definition:
The Module Pattern is a design pattern
used to encapsulate private variables
and expose only selected methods.

It is commonly implemented using an IIFE
and Closures.
*/

/*
Benefits:
- Data Hiding
- Encapsulation
- Private Variables
- Prevents Global Pollution
- Better Code Organization
*/

/*=========================================================
                        IIFE
=========================================================*/

/*
Definition:
An IIFE (Immediately Invoked Function Expression)
is a function that executes immediately
after it is created.

Syntax:

(function(){

})();

Purpose:
- Creates a private scope.
- Prevents global variable pollution.
- Used in Module Pattern.
*/

// Module Pattern
// IIFE

let Bank = (function () {

    let bankbalance = 12000;

    function checkBalance() {
        console.log(bankbalance);
    }

    function setBalance(val) {
        bankbalance = val;
    }

    function withdraw(val) {
        if (val <= bankbalance) {
            bankbalance -= val;
            console.log(bankbalance);
        } else {
            console.log("Insufficient Balance");
        }
    }

    return {
        checkBalance,
        setBalance,
        withdraw
    };

})();

// Example Usage

Bank.checkBalance();   // 12000

Bank.withdraw(2000);   // 10000

Bank.setBalance(50000);

Bank.checkBalance();   // 50000

/*=========================================================
        CLOSURE IN MODULE PATTERN (IMPORTANT)
=========================================================*/

/*
Closure

Definition:
A Closure is a function that remembers
and can access variables from its outer
scope even after the outer function has
finished execution.
*/

/*
Example:

function outer(){

    let x = 10;

    return function(){
        console.log(x);
    };

}

const fn = outer();

fn(); // 10
*/

/*
Module Pattern + Closure

In the Module Pattern, the IIFE executes
only once.

Private variables created inside the IIFE
remain alive because the returned methods
form closures over them.

Example:

let Bank = (function(){

    let balance = 1000;

    function check(){
        console.log(balance);
    }

    return { check };

})();

Bank.check(); // 1000
*/

/*
Why does it work?

Even after the IIFE finishes execution,
the returned functions still remember
the private variables through Closures.
*/

/*
Encapsulation

Definition:
Encapsulation is the process of hiding
internal data and exposing only the
required methods.

Example:

balance      ❌ Private
check()      ✅ Public
withdraw()   ✅ Public
*/

/*
Data Hiding

Private variables cannot be accessed
directly from outside.

Example:

Bank.balance; // undefined

Bank.check(); // Accessible
*/

/*
Flow

IIFE Executes
      │
      ▼
Creates Private Variables
      │
      ▼
Returns Public Methods
      │
      ▼
Methods remember variables
using Closures
      │
      ▼
Private data remains accessible
only through those methods.
*/

/*
Summary

IIFE
----
Creates a private scope.

Closure
-------
Remembers variables after the outer
function has finished.

Module Pattern
--------------
Uses IIFE + Closures to create
private variables and public methods.

Encapsulation
-------------
Hides internal data and exposes
only the required functionality.
*/

/*=========================================================
            REVEALING MODULE PATTERN
=========================================================*/

/*
Definition:
The Revealing Module Pattern is a variation
of the Module Pattern in which private
functions and variables are defined first,
and only selected methods are exposed
(revealed) through the returned object.

It uses:
- IIFE
- Closures
- Encapsulation
*/

/*
Syntax

const Module = (function(){

    // Private Variables

    // Private Functions

    return{

        publicName : privateFunction

    };

})();
*/

/*
Example

const Bank = (function(){

    let balance = 1000;

    function checkBalance(){
        console.log(balance);
    }

    function withdraw(amount){
        balance -= amount;
    }

    return{
        check : checkBalance,
        withdr : withdraw
    };

})();
*/

/*
Usage

Bank.check();

Bank.withdr(200);
*/

/*
Why "Revealing"?

Private Function
----------------
checkBalance()

Public Name
-----------
check

The returned object reveals
the private function with a
public name.
*/

/*
Benefits

- Encapsulation
- Data Hiding
- Private Variables
- Cleaner Public API
- Can rename public methods
*/

/*
Summary

Revealing Module Pattern
------------------------
Uses an IIFE and Closures to keep
variables private while exposing
selected methods (optionally with
different public names) through
the returned object.
*/

/*=========================================================
            FACTORY FUNCTION PATTERN
=========================================================*/

/*
Definition:
A Factory Function is a function that
creates and returns an object without
using the 'new' keyword or classes.
*/

/*
Syntax

function createObject(){

    return {
        // properties
        // methods
    };

}
*/

/*
Example

function createUser(name){

    return{

        name,

        greet(){
            console.log("Hello");
        }

    };

}

const u1 = createUser("Mudassir");
*/

/*
Features

- No 'new' keyword.
- Returns an object.
- Can create multiple objects.
- Supports private variables using Closures.
*/

/*
Benefits

- Simple Syntax
- Encapsulation
- Private Data
- Reusable
- Easy to Understand
*/

/*
Summary

Factory Function
----------------
A function that creates and returns
objects with properties and methods.
*/

function createProduct(name, price) {
    let stock = 10;

    return {
        name,
        price,

        checkStock() {
            console.log(stock);
        },

        buy(qty) {
            if (qty <= stock) {
                stock -= qty;
                console.log(`${qty} pieces booked - ${stock} pieces left.`);
            } else {
                console.error(`We only have ${stock} pieces left.`);
            }
        },

        refill(qty) {
            stock += qty;
            console.log(`Refilled the stock - ${stock} pieces now.`);
        }
    };
}

let iphone = createProduct("iphone", 70000);
let kitkat = createProduct("kitkat", 100);

iphone.buy(6);
iphone.checkStock();
iphone.refill(5);
iphone.checkStock();



/*=========================================================
                OBSERVER PATTERN
=========================================================*/

/*
Definition:
The Observer Pattern is a behavioral
design pattern where one object
(Subject) maintains a list of observers
and automatically notifies them whenever
its state changes.
*/

/*
Components

Subject
-------
The object being observed.

Observer
--------
Objects that receive updates.

Notification
------------
The Subject informs all observers
about changes.
*/

/*
Flow

Subject
   │
   ▼
Stores Observers
   │
   ▼
State Changes
   │
   ▼
notify()
   │
   ▼
Observer.update()
*/

/*
Example

YoutubeChannel ---> Subject

Users -----------> Observers

notify() --------> Sends updates
*/

/*
Benefits

- Loose Coupling
- Easy to Add/Remove Observers
- Reusable
- Event Driven
*/

/*
Real World Examples

- YouTube Subscribers
- Instagram Followers
- Email Notifications
- Weather Apps
- Stock Market Updates
- Chat Applications
*/

/*
Summary

Observer Pattern
----------------
One Subject notifies multiple
Observers automatically whenever
an event or state change occurs.
*/

class YoutubeChannel {
    constructor() {
        this.subscribers = [];
    }

    subscribe(user) {
        this.subscribers.push(user);
        user.update(`${user.name}, You have subscribed the channel.`);
    }

    unsubscribe(user) {
        this.subscribers = this.subscribers.filter(
            (sub) => sub !== user
        );
        user.update("You have un-subscribed the channel.");
    }

    notify(message) {
        this.subscribers.forEach((sub) => sub.update(message));
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name}, ${data}`);
    }
}

let sheryians = new YoutubeChannel();

let user1 = new User("Harsh");
let user2 = new User("Amit");

sheryians.subscribe(user1);
sheryians.subscribe(user2);

sheryians.notify("New video is live on the channel.");

sheryians.unsubscribe(user1);

sheryians.notify("JavaScript Design Patterns video uploaded!");