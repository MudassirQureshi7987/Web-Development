
// Compile Time Error

// Syntax Error

// console.log(1;

// Runtime Error
// Reference Error comes into the category of runtime error

// console.log(x); // Reference error


// Error Handling

// 1. Try and Catch
// 99% of the time this is used 

// If error happens in try block then only we go inside the catch block otherwise it gets skipped
try{
    console.log("Try block starts here");
    console.log(x);  // This will throw a reference error and therefore the flow of execution in try block would stop here and won't go further
    console.log("Try block ends here");
}
catch(err) {  // This catch block catches the error that try block throws and that error is stored in err here,err is var for it
    // In catch block, we define what we need to do with the error
    // Here,it can be
    // retry logic  , fallback mechanism  ,  logging  ,  custom error

    console.log("I am inside the catch block")

    console.log("This is the error : " , err);
}


// Try catch finally 
// Finally block always runs no matter error appear or not 
try {
  console.log("Start");
  throw new Error("Something went wrong!"); // manually throwing error
} catch (err) {
  console.log("Caught: " + err.message);
} finally {
  console.log("This always runs");
}

// Throwing Custom Errors


try {
    // Reference Error
    console.log(X);
}
catch(err) {
    throw new Error("Bhai pehle declare toh karle variable");
}


let errorCode = 100;
if(errorCode == 100) {
    throw new Error("Invalid JSON");
}

console.log("Runnable");  // this is not executed cause we threw an error without a try block 
