// Objects are dynamic in nature cause we can change the state and definition of them 
// because it can change its properties and add new anytime 

let obj = {
    age : 12,
    wt : 45,
    ht : 65
};

console.log(obj);

// Now just see how I add a new property in my object

obj.color = "White";

console.log(obj);

let a = {value : 12};

let b = a;  // this is not cloning because b is literally pointing to the same object that a is
// it is just a reference

// There are three ways of cloning an object in JS

// 1. Using Spread ( ... )

let src = {
    age : 12,
    wt : 45,
    ht : 65
};

let dest = {...src};  // spread operator ... is used to clone the src object in the dest object
// let dest = src;  // if we had done this then we would be a reference and thus changes made in one would be visible in both 

src.age = 89;

// Here we can see that when we changed a vlue in src,the value in dest didn't change cause it wasm't a reference and thus a clone
console.log(src);    // { age: 89, wt: 45, ht: 65 }
console.log(dest);   // { age: 12, wt: 45, ht: 65 }


// 2. Assign Method

let src1 = {
       age : 12,
    wt : 45,
    ht : 65
}

let src2 = {
    value : 12,
    name : "Maddy",
}

// By using this assign method , we can clone multiple objects into one single object
// this says to assign src1 and src2 to the empty object {} dest1
let dest1 = Object.assign({},src1,src2);

console.log(dest1);  // { age: 12, wt: 45, ht: 65, value: 12, name: 'Maddy' }

// 3. By iterating
// Do not use this method cause for nested objects,you would get stuck and the thing would become very complex
// Always try to use spread operator and assign method

/*
let src = {
    age : 12,
    wt : 45,
    ht : 65
};
*/

// We will iterate on this src and try to put all the key value pairs in our dest2

let dest2 = {};

for(let key in src)
{
    let newKey = key;
    let newValue = src[key];

    // Insert this newKey and newValue in dest2
    dest2[newKey] = newValue;
}

console.log(dest2);


// Garbage Collector in JS

/*

In JavaScript, memory management is handled automatically.

When you create variables, objects, or functions, they occupy memory in the heap.

The Garbage Collector (GC) automatically frees up memory that is no longer reachable (i.e., not referenced by anything).

👉 You don’t explicitly allocate or free memory (unlike C/C++).

*/

