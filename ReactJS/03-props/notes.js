/*
===========================================================
                    REACT PROPS (Properties)
===========================================================

► What are Props?

- Props (short for Properties) are used to pass data from a
  Parent Component to a Child Component.

- They make components dynamic and reusable.

- Props are READ-ONLY.
  A child component should NEVER modify its props.

-----------------------------------------------------------
Why do we need Props?
-----------------------------------------------------------

Without Props:

<Card />
<Card />
<Card />

All cards would display the same content.

With Props:

<Card name="Mudassir" age={21} />
<Card name="Rahul" age={20} />
<Card name="Aman" age={22} />

Each Card receives different data.

-----------------------------------------------------------
How Props Work
-----------------------------------------------------------

Parent Component
        │
        │ Passes Data
        ▼
Child Component

Parent controls the data.
Child only receives and displays it.

-----------------------------------------------------------
Passing Props
-----------------------------------------------------------

Parent:

<Card
    name="Mudassir"
    profession="Developer"
    age={21}
/>

Child:

function Card(props){
    return (
        <>
            <h1>{props.name}</h1>
            <h2>{props.profession}</h2>
            <h3>{props.age}</h3>
        </>
    )
}

-----------------------------------------------------------
Accessing Props
-----------------------------------------------------------

Method 1 (Using props object)

function Card(props){
    return <h1>{props.name}</h1>;
}

Method 2 (Destructuring) ✅ Recommended

function Card({name, age}){
    return (
        <>
            <h1>{name}</h1>
            <h2>{age}</h2>
        </>
    );
}

-----------------------------------------------------------
Types of Props
-----------------------------------------------------------

String

<Card name="Mudassir" />

Number

<Card age={21} />

Boolean

<Card isStudent={true} />

Array

<Card skills={["HTML","CSS","React"]} />

Object

<Card user={{name:"Mudassir", age:21}} />

Function

<Card greet={sayHello} />

JSX

<Card icon={<FaUser />} />

-----------------------------------------------------------
Passing JavaScript Values
-----------------------------------------------------------

Use {}

<Card age={21} />
<Card salary={50000 * 2} />
<Card name={userName} />

Strings can be written without {}

<Card city="Nagpur" />

-----------------------------------------------------------
Props are Immutable
-----------------------------------------------------------

❌ Wrong

props.name = "Rahul";

✔ Correct

Props should only be READ.

If data needs to change,
use State instead.

-----------------------------------------------------------
Children Prop
-----------------------------------------------------------

Anything written between opening and closing tags
is automatically available as props.children.

Parent

<Card>
    <h1>Hello World</h1>
</Card>

Child

function Card(props){
    return (
        <div>
            {props.children}
        </div>
    );
}

Output:

Hello World

-----------------------------------------------------------
Default Props (Optional)
-----------------------------------------------------------

function Card({name = "Guest"}){
    return <h1>{name}</h1>;
}

If no name is passed,
"Guest" will be displayed.

-----------------------------------------------------------
Real Life Example
-----------------------------------------------------------

Imagine an ID Card.

The design stays the same,
only the information changes.

Card Design
----------------------
Name:
Age:
Profession:
----------------------

Props provide the changing information.

<Card name="Mudassir" age={21} />
<Card name="Rahul" age={20} />
<Card name="Aman" age={19} />

Same component.
Different data.

-----------------------------------------------------------
Remember
-----------------------------------------------------------

✔ Props = Data sent from Parent → Child

✔ Props are Read Only

✔ Use {} for JavaScript expressions

✔ Destructuring is preferred

✔ Props make components reusable

✔ Changing data = State
   Passing data = Props

===========================================================
Difference Between Props and State
===========================================================

Props
------
• Passed by Parent
• Read Only
• Used to transfer data
• Cannot be modified by Child

State
------
• Managed by the Component itself
• Can change
• Causes Re-render
• Used for dynamic data

===========================================================
*/