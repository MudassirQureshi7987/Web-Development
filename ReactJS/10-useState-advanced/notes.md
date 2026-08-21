/*
====================================================================
                    ADVANCED useState NOTES
====================================================================

This section covers:

1. State updates and re-rendering
2. Why state does not update immediately
3. Multiple state updates
4. Functional updates using prev
5. State as an object
6. Updating object state using spread operator
7. Why we should not directly mutate state


--------------------------------------------------------------------
1. STATE DOES NOT CHANGE IMMEDIATELY
--------------------------------------------------------------------

Suppose:

const [num, setNum] = useState(10)

function btnClicked() {
    setNum(num + 5)

    console.log(num)
}

You might expect:

setNum(num + 5)
console.log(num)

to print:

15

But it can print:

10

Why?

Because setNum() does not immediately change the value of `num`
inside the currently running function.

The current render has:

num = 10

When we write:

setNum(15)

React schedules the state update.

The current function still has access to:

num = 10

After the function finishes:

React updates the state
        ↓
React re-renders the component
        ↓
New render gets:

num = 15


Flow:

num = 10
    ↓
setNum(15)
    ↓
Current function still sees 10
    ↓
Function finishes
    ↓
React re-renders
    ↓
num = 15


--------------------------------------------------------------------
2. MULTIPLE STATE UPDATES
--------------------------------------------------------------------

Suppose:

const [num, setNum] = useState(10)

function btnClicked() {
    setNum(num + 1)
    setNum(num + 1)
    setNum(num + 1)
}

We might expect:

10 → 11 → 12 → 13

But all three updates are using the `num` value from the
same render.

At that time:

num = 10

So conceptually:

setNum(10 + 1)
setNum(10 + 1)
setNum(10 + 1)

All three updates are trying to set the value to:

11

To solve this problem when multiple updates depend on the
previous state, we use FUNCTIONAL UPDATES.


--------------------------------------------------------------------
3. FUNCTIONAL STATE UPDATE
--------------------------------------------------------------------

Syntax:

setNum(prev => prev + 1)

`prev` represents the previous/latest state value that React
provides to the updater function.

Example:

const [num, setNum] = useState(10)

function btnClicked() {
    setNum(prev => prev + 1)
}

Initially:

num = 10

React gives:

prev = 10

We return:

prev + 1

New state:

11


--------------------------------------------------------------------
4. MULTIPLE FUNCTIONAL UPDATES
--------------------------------------------------------------------

const [num, setNum] = useState(10)

function btnClicked() {
    setNum(prev => prev + 1)
    setNum(prev => prev + 1)
    setNum(prev => prev + 1)
}

Starting value:

10

First update:

prev = 10
new value = 11

Second update:

prev = 11
new value = 12

Third update:

prev = 12
new value = 13

Final value:

10 → 13


IMPORTANT:

If the next state depends on the previous state, prefer:

setState(prev => newValueBasedOnPrev)


Examples:

setNum(prev => prev + 1)

setNum(prev => prev - 1)

setNum(prev => prev * 2)

setIsOpen(prev => !prev)


--------------------------------------------------------------------
5. STATE CAN ALSO BE AN OBJECT
--------------------------------------------------------------------

State does not have to be just a number or string.

Example:

const [user, setUser] = useState({
    name: "Sarthak",
    age: 20
})

Current state:

{
    name: "Sarthak",
    age: 20
}


We can access the values using:

user.name

user.age


--------------------------------------------------------------------
6. DO NOT DIRECTLY MUTATE OBJECT STATE
--------------------------------------------------------------------

Suppose:

const [user, setUser] = useState({
    name: "Sarthak",
    age: 20
})

We should NOT directly modify the existing state object like:

user.name = "Aman"
user.age = 29

This is called MUTATING state.

React state should be treated as IMMUTABLE.

Meaning:

Do not change the existing state object.

Instead:

Create a new object
        ↓
Make the required changes
        ↓
Give the new object to React


--------------------------------------------------------------------
7. COPYING AN OBJECT USING THE SPREAD OPERATOR
--------------------------------------------------------------------

Suppose:

const [user, setUser] = useState({
    name: "Sarthak",
    age: 20
})

We can create a copy:

const newUser = { ...user }

`...user` copies the properties of the existing object.

So:

const newUser = { ...user }

creates something like:

{
    name: "Sarthak",
    age: 20
}

Now we can modify the NEW object:

newUser.name = "Aman"
newUser.age = 29

Finally:

setUser(newUser)

Flow:

Old State
    ↓
{ ...user }
    ↓
Create new object
    ↓
Modify new object
    ↓
setUser(newUser)
    ↓
React re-renders


Example:

function btnClicked() {

    const newUser = { ...user }

    newUser.name = "Aman"
    newUser.age = 29

    setUser(newUser)
}


--------------------------------------------------------------------
8. UPDATING OBJECT STATE DIRECTLY WITH SPREAD
--------------------------------------------------------------------

Instead of creating a separate variable, we can directly
create a new object inside the setter.

Example:

setUser({
    ...user,
    age: 50
})


Suppose the current state is:

{
    name: "Rishi",
    age: 17
}


First:

...user

copies everything:

{
    name: "Rishi",
    age: 17
}

Then:

age: 50

overwrites the old age.

Final state:

{
    name: "Rishi",
    age: 50
}


--------------------------------------------------------------------
9. WHY THE ORDER MATTERS
--------------------------------------------------------------------

Correct:

{
    ...user,
    age: 50
}

First copy everything.

Then overwrite age.


If the current state is:

{
    name: "Rishi",
    age: 17
}

Then:

{
    ...user,
    age: 50
}

becomes:

{
    name: "Rishi",
    age: 50
}


Properties written AFTER the spread can overwrite the old
properties.


--------------------------------------------------------------------
10. UPDATING OBJECT STATE USING prev
--------------------------------------------------------------------

A safer and commonly used pattern is:

setUser(prev => ({
    ...prev,
    age: 50
}))


Here:

prev

is the previous state object.

Suppose:

prev = {
    name: "Rishi",
    age: 17
}


Then:

...prev

copies:

{
    name: "Rishi",
    age: 17
}


Then:

age: 50

overwrites the old age.

Final state:

{
    name: "Rishi",
    age: 50
}


This is especially useful when the new object state depends on
the previous object state.


--------------------------------------------------------------------
11. UPDATING MULTIPLE OBJECT PROPERTIES
--------------------------------------------------------------------

Suppose:

const [user, setUser] = useState({
    name: "Sarthak",
    age: 20
})


We can update both properties:

setUser(prev => ({
    ...prev,
    name: "Aman",
    age: 29
}))


New state:

{
    name: "Aman",
    age: 29
}


--------------------------------------------------------------------
12. WHY ...prev IS IMPORTANT
--------------------------------------------------------------------

Suppose the current state is:

{
    name: "Rishi",
    age: 17
}


If we write:

setUser({
    age: 50
})

React replaces the ENTIRE state object.

New state:

{
    age: 50
}


The `name` property is lost.


Instead:

setUser(prev => ({
    ...prev,
    age: 50
}))

Result:

{
    name: "Rishi",
    age: 50
}


So:

...prev

means:

"Keep all the old properties."


--------------------------------------------------------------------
13. TWO COMMON WAYS TO UPDATE OBJECT STATE
--------------------------------------------------------------------

METHOD 1: COPY → MODIFY → SET


const newUser = { ...user }

newUser.name = "Aman"
newUser.age = 29

setUser(newUser)


--------------------------------------------


METHOD 2: FUNCTIONAL UPDATE


setUser(prev => ({
    ...prev,
    name: "Aman",
    age: 29
}))


Both create a NEW object.

The second method is often cleaner, especially when the new
state is calculated using the previous state.


--------------------------------------------------------------------
14. COMPLETE EXAMPLE - FUNCTIONAL UPDATE
--------------------------------------------------------------------

import React, { useState } from 'react'

const App = () => {

    const [num, setNum] = useState(10)

    const btnClicked = () => {
        setNum(prev => prev + 1)
        setNum(prev => prev + 1)
        setNum(prev => prev + 1)
    }

    return (
        <div>
            <h1>{num}</h1>

            <button onClick={btnClicked}>
                Click
            </button>
        </div>
    )
}

export default App


Each click:

10 → 13 → 16 → 19 ...


--------------------------------------------------------------------
15. COMPLETE EXAMPLE - OBJECT STATE
--------------------------------------------------------------------

import React, { useState } from 'react'

const App = () => {

    const [user, setUser] = useState({
        name: "Rishi",
        age: 17
    })

    const btnClicked = () => {
        setUser(prev => ({
            ...prev,
            age: 50
        }))
    }

    return (
        <div>

            <h1>
                {user.name}, {user.age}
            </h1>

            <button onClick={btnClicked}>
                Change Age
            </button>

        </div>
    )
}

export default App


--------------------------------------------------------------------
16. QUICK REVISION
--------------------------------------------------------------------

Create state:

const [num, setNum] = useState(10)


Direct update:

setNum(20)


Update based on current render value:

setNum(num + 5)


Update based on previous state:

setNum(prev => prev + 1)


Multiple updates based on previous state:

setNum(prev => prev + 1)
setNum(prev => prev + 1)
setNum(prev => prev + 1)


Object state:

const [user, setUser] = useState({
    name: "Rishi",
    age: 17
})


Update one property:

setUser(prev => ({
    ...prev,
    age: 18
}))


Update multiple properties:

setUser(prev => ({
    ...prev,
    name: "Aman",
    age: 20
}))


====================================================================
                         MAIN TAKEAWAYS
====================================================================

1. Calling a state setter does not immediately change the state
   variable inside the currently running function.

2. React updates the state and then re-renders the component.

3. If the new value depends on the previous value, use:

   setState(prev => ...)

4. This is especially important when updating the same state
   multiple times.

5. Objects in state should not be directly mutated.

6. Create a new object when updating object state.

7. Use the spread operator to copy existing properties:

   { ...prev }

8. Properties written after the spread overwrite the old values:

   {
       ...prev,
       age: 50
   }

====================================================================
*/