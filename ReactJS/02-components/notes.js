/*
==========================================
REACT COMPONENTS - QUICK NOTES
==========================================

► What is a Component?
- A Component is a reusable piece of UI.
- It returns JSX (HTML-like syntax).
- Every React app is made up of components.

Example:
function App() {
    return <h1>Hello</h1>;
}

------------------------------------------

► Types of Components

1. Functional Component ✅ (Modern React)
- Just a JavaScript function.
- Returns JSX.
- Uses Hooks for state and other features.

function App() {
    return <h1>Hello</h1>;
}

2. Class Component (Old)
- Uses ES6 classes.
- Rarely used in new React projects.

------------------------------------------

► Rules for Components

✔ Component name must start with a CAPITAL letter.
✔ Must return a single parent element.
✔ Use className instead of class.
✔ Use camelCase for attributes (onClick, tabIndex, etc.)

------------------------------------------

► Component Composition

A component can render another component.

<App />
 ├── <Navbar />
 ├── <Hero />
 ├── <Card />
 └── <Footer />

------------------------------------------

► Export & Import

// Export
export default App;

// Import
import App from "./App";

------------------------------------------

► Why Components?

- Reusable
- Easy to maintain
- Better code organization
- Makes UI modular

==========================================
*/