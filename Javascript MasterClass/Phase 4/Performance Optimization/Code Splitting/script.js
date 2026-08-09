const btn = document.querySelector("button");

btn.addEventListener("click", async function () {

    let heavy = await import("./heavy.js");

    heavy.veryHeavy();

});


/*=========================================================
                CODE SPLITTING
=========================================================*/

/*
Definition:
Code Splitting is a technique that splits
JavaScript into smaller modules and loads
them only when required.

This reduces the initial bundle size and
improves application performance.
*/

/*
Dynamic Import

const module = await import("./module.js");

Unlike static imports, dynamic imports
load modules only when executed.
*/

/*
Why type="module"?

Required to use ES Modules
(import/export) in the browser.

<script type="module" src="script.js"></script>
*/

/*
How It Works

1. Page Loads.
2. Main script downloads.
3. Heavy module is NOT downloaded.
4. User performs an action.
5. import() loads the module.
6. Module functions are used.
*/

/*
Benefits

- Faster Initial Loading
- Smaller Bundle Size
- Lazy Loading
- Better Performance
- Loads Features On Demand
*/

/*
Static Import

import { fn } from "./module.js";

Loads immediately.
*/

/*
Dynamic Import

const module = await import("./module.js");

Loads only when needed.
*/

/*
Summary

Code Splitting
--------------
Splits code into smaller modules and
loads them dynamically using import()
only when required.
*/