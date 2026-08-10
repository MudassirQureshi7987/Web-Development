/*=========================================================
                CUSTOM MAP()
=========================================================*/

/*
Definition:
A custom implementation of Array.map()
that creates a new array by applying
a callback function to every element.
*/

/*
Syntax

function myMap(arr, callback){

    let newArr = [];

    for(let i=0;i<arr.length;i++){

        newArr.push(
            callback(arr[i], i, arr)
        );

    }

    return newArr;

}
*/

/*
How It Works

1. Loop through array.
2. Call callback for each element.
3. Store returned value.
4. Return new array.
*/

/*
Summary

myMap()
-------
Creates and returns a new array after
transforming every element.
*/


/*=========================================================
                DEEP CLONING
=========================================================*/

/*
Definition:
Deep Cloning creates a completely
independent copy of an object,
including all nested objects and arrays.
*/

/*
Why?

Assignment copies references.

Deep Cloning copies values recursively.
*/

/*
Modern Method

const copy = structuredClone(obj);
*/

/*
Traditional Method

const copy =
JSON.parse(JSON.stringify(obj));
*/

/*
Custom Implementation

function deepClone(obj){

    if(obj===null ||
       typeof obj!=="object")
        return obj;

    let clone =
        Array.isArray(obj) ? [] : {};

    for(let key in obj){

        clone[key]=deepClone(obj[key]);

    }

    return clone;

}
*/

/*
Summary

Deep Clone
----------
Creates an entirely new object,
preventing changes in the copied
object from affecting the original.
*/