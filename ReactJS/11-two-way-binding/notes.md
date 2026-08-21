/*
====================================================================
                        TWO-WAY BINDING
====================================================================

► What is Two-Way Binding?

Two-way binding means connecting an input field with a React state
in BOTH directions.

1. User changes the input
        ↓
2. State gets updated

AND

1. State changes
        ↓
2. Input displays the updated state


So the flow is:

INPUT  →  STATE
  ↑         │
  └─────────┘


--------------------------------------------------------------------
HOW DO WE ACHIEVE TWO-WAY BINDING?
--------------------------------------------------------------------

We need two things:

1. value
2. onChange


Example:

const [title, setTitle] = useState('')


<input
    value={title}
    onChange={(e) => setTitle(e.target.value)}
/>


--------------------------------------------------------------------
1. INPUT → STATE
--------------------------------------------------------------------

This part:

onChange={(e) => setTitle(e.target.value)}

handles the flow:

User types
    ↓
onChange runs
    ↓
e.target.value gets the typed value
    ↓
setTitle() updates the state


Example:

User types:

Hello


Then:

e.target.value = "Hello"


So:

setTitle("Hello")


Now:

title = "Hello"


--------------------------------------------------------------------
2. STATE → INPUT
--------------------------------------------------------------------

This part:

value={title}

handles the flow:

State
    ↓
title
    ↓
value={title}
    ↓
Input displays that value


Example:

If:

title = "Mudassir"


Then:

value={title}


The input will display:

Mudassir


--------------------------------------------------------------------
COMPLETE FLOW
--------------------------------------------------------------------

Initial State:

const [title, setTitle] = useState('')


title = ""


User types:

Hello


↓

onChange runs


↓

e.target.value = "Hello"


↓

setTitle("Hello")


↓

State updates:

title = "Hello"


↓

React re-renders


↓

value={title}


↓

Input displays:

Hello


--------------------------------------------------------------------
BASIC SYNTAX
--------------------------------------------------------------------

const [value, setValue] = useState('')


<input
    value={value}
    onChange={(e) => setValue(e.target.value)}
/>


--------------------------------------------------------------------
IMPORTANT PARTS
--------------------------------------------------------------------

value={title}

→ State controls what is displayed inside the input.


onChange={...}

→ Detects when the user changes the input.


e.target.value

→ Gives us the current value inside the input.


setTitle(e.target.value)

→ Updates the React state with the value typed by the user.


--------------------------------------------------------------------
EXAMPLE
--------------------------------------------------------------------

const [title, setTitle] = useState('')


<input
    type="text"
    placeholder="Enter your name"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
/>


If the user types:

Mudassir


Then:

title = "Mudassir"


Because the input uses:

value={title}


the input and state always stay connected.


--------------------------------------------------------------------
TWO-WAY BINDING FORMULA
--------------------------------------------------------------------

value={state}

AND

onChange={(e) => setState(e.target.value)}


Together:

State → Input

value={state}


Input → State

onChange={(e) => setState(e.target.value)}


Therefore:

STATE ↔ INPUT


--------------------------------------------------------------------
CONTROLLED COMPONENT
--------------------------------------------------------------------

An input using two-way binding is called a CONTROLLED COMPONENT.

Example:

<input
    value={title}
    onChange={(e) => setTitle(e.target.value)}
/>


It is called "controlled" because React state controls the value
of the input.

The main source of truth is the React state.


====================================================================
                         MAIN TAKEAWAY
====================================================================

Two-way binding =

value={state}
        +
onChange={(e) => setState(e.target.value)}


value

→ State sends data to the Input.


onChange

→ Input sends data back to the State.


Therefore:

INPUT ↔ STATE

====================================================================
*/