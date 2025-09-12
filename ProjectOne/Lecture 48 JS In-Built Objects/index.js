 console.log("Muddu");

 console.log(Math.PI);  // 3.141592653589793

 console.log(Math.max(30,66,24,54,65,12));

 console.log(Math.min(30,66,24,54,65,12));

 console.log(Math.round(1.6)); // 2
 console.log(Math.round(1.4)); // 1
 console.log(Math.round(1.5)); // 2

 console.log(Math.ceil(1.1));  // 2
 console.log(Math.floor(1.9)); // 1

 console.log(Math.abs(-6));  // 6

 console.log(Math.random());  // gives random number between 0 and 1  (eg. 0.2566922745823952)

 console.log(Math.sqrt(5));  // 2.23606797749979

 console.log(Math.pow(3,3));  // 27 cause 3^3  3 ** 3 also works


//  Date and Time Objects

let curr = new Date();  // gets current date and time

console.log(curr);  // 2025-09-06T13:24:09.041Z

// In Browser, this is the behaviour of date 

// new Date();

// Date Sat Sep 06 2025 18:51:24 GMT+0530 (India Standard Time)

let date = new Date("June 20 1998 07:15");

console.log(date);  // 1998-06-20T01:45:00.000Z

// The month (6) here is 0-based indexing so therefore 7th month would be printed 
let date1 = new Date(1998, 6, 20, 7);  // 1998-07-20T01:30:00.000Z

console.log(date1);

let newDate = new Date();
console.log(newDate.getDay()); // Saturday is 6 and Sunday is 0 and Monday is 1 and so on .. 

console.log(newDate.getFullYear());  // 2025

console.log(newDate.setFullYear(2002));   // 1031319457094 returning this garbage value

console.log(newDate);  // 2002-09-06T13:37:37.094Z