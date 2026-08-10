// Bad code

const ul = document.querySelector("ul");

for (let i = 1; i <= 10000; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    ul.appendChild(li);
}


// Good code
const ul = document.querySelector("ul");

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 10000; i++) {

    const li = document.createElement("li");

    li.textContent = `Item ${i}`;

    fragment.appendChild(li);

}

ul.appendChild(fragment);



/*=========================================================
            DOCUMENT FRAGMENT
=========================================================*/

/*
Definition:
A DocumentFragment is a lightweight,
temporary container used to build DOM
elements in memory before inserting
them into the actual DOM.
*/

/*
Why Use It?

Appending elements directly to the DOM
multiple times causes repeated Reflows
and Repaints.

DocumentFragment allows all elements
to be created first and appended only
once.
*/

/*
Syntax

const fragment = document.createDocumentFragment();

fragment.appendChild(element);

parent.appendChild(fragment);
*/

/*
How It Works

1. Create DocumentFragment.
2. Add elements to the fragment.
3. Append the fragment to the DOM.
4. Browser updates the DOM only once.
*/

/*
Benefits

- Fewer Reflows
- Fewer Repaints
- Better Performance
- Faster DOM Manipulation
- Efficient for Large Lists
*/

/*
Summary

DocumentFragment
----------------
A temporary in-memory container used
to batch DOM updates, reducing
Reflows and Repaints.
*/