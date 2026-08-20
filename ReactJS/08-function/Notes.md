/*
====================================================================
                 FUNCTIONS IN REACT - COMPLETE NOTES
====================================================================

React components are JavaScript functions.
Since React is built on JavaScript, functions are used everywhere.

Examples:
• Handling button clicks
• Handling input changes
• Mouse events
• Scroll events
• Passing functions as props
• Calling API requests
• Updating State

--------------------------------------------------------------------
1. Declaring Functions Inside a Component
--------------------------------------------------------------------

You can create a normal JavaScript function inside your component.

Example:

function btnClicked(){
    console.log("Button Clicked");
}

OR

const btnClicked = () => {
    console.log("Button Clicked");
}

Arrow functions are more common in React.

--------------------------------------------------------------------
2. Calling Functions in Event Handlers
--------------------------------------------------------------------

Never do this:

<button onClick={btnClicked()}>

Reason:
The function executes immediately while rendering.

Correct:

<button onClick={btnClicked}>

Reason:
You are passing a reference to the function.
React will call it only when the event happens.

Think of it as:

Wrong
------
"Run it now."

Correct
--------
"React, whenever the button is clicked,
call this function."

--------------------------------------------------------------------
3. Inline Functions
--------------------------------------------------------------------

Instead of making a separate function, you can write one directly.

Example:

<button
    onClick={()=>{
        console.log("Button Clicked");
    }}
>
    Click
</button>

Useful when:
• Small amount of logic
• Used only once
• Doesn't need to be reused

--------------------------------------------------------------------
4. Passing Parameters to Functions
--------------------------------------------------------------------

Suppose:

function greet(name){
    console.log(name);
}

Wrong:

<button onClick={greet("Mudassir")}>

This runs immediately.

Correct:

<button
    onClick={()=>{
        greet("Mudassir");
    }}
>

The arrow function waits for the click,
then calls greet().

Think of it like:

Click
  ↓
Arrow Function
  ↓
greet("Mudassir")

--------------------------------------------------------------------
5. Event Object
--------------------------------------------------------------------

Whenever an event occurs,
React automatically creates an Event Object.

Example:

<button
    onClick={(event)=>{
        console.log(event);
    }}
>

React passes this object automatically.

The event contains information like:

• Which element triggered the event
• Mouse position
• Keyboard key
• Input value
• Scroll amount
• etc.

--------------------------------------------------------------------
6. Input onChange Event
--------------------------------------------------------------------

Whenever the input changes,
React calls the function.

Example:

<input
    onChange={(event)=>{
        console.log(event.target.value);
    }}
/>

Suppose user types:

M
Mu
Mud
Muda

Console:

M
Mu
Mud
Muda

event.target

↓

The input element

event.target.value

↓

Current value inside input

--------------------------------------------------------------------
7. Passing Event Data To Another Function
--------------------------------------------------------------------

Instead of writing everything inside onChange,
you can call another function.

function inputChanging(value){
    console.log(value);
}

<input
    onChange={(event)=>{
        inputChanging(event.target.value);
    }}
/>

Flow:

User Types
      ↓
onChange Event
      ↓
event.target.value
      ↓
inputChanging(value)

--------------------------------------------------------------------
8. Different Ways To Receive Event Object
--------------------------------------------------------------------

Method 1

function handleChange(event){
    console.log(event.target.value);
}

<input onChange={handleChange}/>

------------------------------------

Method 2

<input
    onChange={(event)=>{
        console.log(event.target.value);
    }}
/>

------------------------------------

Method 3

function handleChange(value){
    console.log(value);
}

<input
    onChange={(event)=>{
        handleChange(event.target.value);
    }}
/>

All are valid.

Choose according to your use case.

--------------------------------------------------------------------
9. Scroll Events
--------------------------------------------------------------------

React provides onWheel for mouse wheel scrolling.

Example:

<div
    onWheel={(event)=>{
        console.log(event.deltaY);
    }}
>

deltaY

> 0

Scrolling Down

deltaY

< 0

Scrolling Up

Example:

const pageScrolling = ()=>{
    console.log("Scrolling...");
}

<div
    onWheel={(event)=>{
        console.log(event.deltaY);
        pageScrolling();
    }}
>

--------------------------------------------------------------------
10. Multiple Statements Inside Event
--------------------------------------------------------------------

You are not limited to one line.

<button
    onClick={()=>{
        console.log("Clicked");
        alert("Hello");
        doSomething();
    }}
>

Arrow functions allow multiple statements.

--------------------------------------------------------------------
11. Passing Functions As Props
--------------------------------------------------------------------

Functions are values in JavaScript.

Parent:

function sayHello(){
    console.log("Hello");
}

<Child greet={sayHello}/>

Child:

function Child(props){

    return(
        <button onClick={props.greet}>
            Click
        </button>
    )

}

When child button is clicked,
Parent's function executes.

This is how child components communicate
with parent components.

--------------------------------------------------------------------
12. Anonymous vs Named Functions
--------------------------------------------------------------------

Named Function

function btnClicked(){
    console.log("Hello");
}

<button onClick={btnClicked}/>

Advantages

• Reusable
• Cleaner
• Easier to debug

------------------------------------

Anonymous Function

<button
    onClick={()=>{
        console.log("Hello");
    }}
>

Advantages

• Short
• Good for one-time logic

--------------------------------------------------------------------
13. Common React Events
--------------------------------------------------------------------

onClick
--------
Button clicked

onChange
---------
Input value changes

onSubmit
---------
Form submitted

onMouseEnter
-------------
Mouse enters element

onMouseLeave
-------------
Mouse leaves element

onWheel
--------
Mouse wheel scroll

onKeyDown
----------
Keyboard key pressed

onKeyUp
--------
Keyboard key released

onFocus
--------
Input gets focus

onBlur
-------
Input loses focus

--------------------------------------------------------------------
14. Remember
--------------------------------------------------------------------

✔ Components are JavaScript functions.

✔ Event handlers are functions.

✔ React automatically provides the Event Object.

✔ event.target.value gives input value.

✔ Use arrow functions when passing arguments.

✔ Don't write

onClick={function()}

unless necessary.

Prefer

onClick={handleClick}

or

onClick={()=>handleClick()}

depending on your requirement.

✔ Functions can be passed as Props.

✔ Functions are first-class citizens in JavaScript,
so React uses them extensively.

