/*
====================================================================
                        REACT useState HOOK
====================================================================

► What is useState?

useState is a React Hook used to store and manage data (state)
inside a functional component.

Unlike normal variables, state values are remembered even after
the component re-renders.

--------------------------------------------------------------------
Why do we need useState?
--------------------------------------------------------------------

Normal Variable

let count = 0;

Problem:
Whenever React re-renders the component,
count becomes 0 again.

Also, changing a normal variable DOES NOT update the UI.

Example

let count = 0;

function increase(){
    count++;
}

UI still shows

0

because React doesn't know anything changed.

--------------------------------------------------------------------
What is State?
--------------------------------------------------------------------

State is simply data that can change over time
and whenever it changes,
React automatically updates (re-renders) the UI.

Examples

• Counter
• User Name
• Login Status
• Theme
• Shopping Cart
• Todo List
• API Data

--------------------------------------------------------------------
Syntax
--------------------------------------------------------------------

const [state, setState] = useState(initialValue);

Example

const [num, setNum] = useState(0);

num
----
Current State Value

setNum
-------
Function used to update the value

0
-
Initial Value

--------------------------------------------------------------------
How useState Works
--------------------------------------------------------------------

const [num, setNum] = useState(0);

Initially

num = 0

↓

User clicks button

↓

setNum(10)

↓

React stores

10

↓

React re-renders component

↓

num becomes

10

UI automatically updates.

--------------------------------------------------------------------
Updating State
--------------------------------------------------------------------

Increase

setNum(num + 1);

Decrease

setNum(num - 1);

Jump by 5

setNum(num + 5);

Replace value

setNum(100);

--------------------------------------------------------------------
Multiple States
--------------------------------------------------------------------

You can create multiple state variables.

const [num, setNum] = useState(0);

const [username, setUsername] = useState("Mudassir");

const [isLoggedIn, setIsLoggedIn] = useState(false);

const [users, setUsers] = useState([]);

Each state is completely independent.

--------------------------------------------------------------------
State Can Store Anything
--------------------------------------------------------------------

Number

const [age, setAge] = useState(21);

----------------------------------

String

const [name, setName] = useState("Mudassir");

----------------------------------

Boolean

const [darkMode, setDarkMode] = useState(false);

----------------------------------

Array

const [users, setUsers] = useState([10,20,30]);

----------------------------------

Object

const [user, setUser] = useState({

    name:"Mudassir",

    age:21

});

--------------------------------------------------------------------
Updating Array State
--------------------------------------------------------------------

Replace whole array

setUsers([30,40,50]);

Add new item

setUsers([...users,60]);

Remove last item

setUsers(users.slice(0,-1));

--------------------------------------------------------------------
Updating Object State
--------------------------------------------------------------------

const [user,setUser] = useState({

    name:"Mudassir",

    age:21

});

Update only age

setUser({

    ...user,

    age:22

});

Spread Operator (...) keeps old values
while changing only specified properties.

--------------------------------------------------------------------
Re-render
--------------------------------------------------------------------

Whenever state changes

↓

React calls the component again

↓

JSX runs again

↓

UI updates automatically

This process is called

Re-rendering

--------------------------------------------------------------------
Rules
--------------------------------------------------------------------

✔ Always call useState at the top level.

✔ Never call Hooks inside loops or if statements.

✔ Never modify state directly.

Wrong

num++;

users.push(50);

user.name = "Aman";

Correct

setNum(num+1);

setUsers([...users,50]);

setUser({

    ...user,

    name:"Aman"

});

--------------------------------------------------------------------
Remember
--------------------------------------------------------------------

✔ useState remembers data.

✔ setState updates data.

✔ Updating state causes a re-render.

✔ State can be Number, String, Boolean,
Array or Object.

✔ Never change state directly.

✔ Always use the setter function.

====================================================================
*/