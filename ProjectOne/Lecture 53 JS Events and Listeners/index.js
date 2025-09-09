
// Events : Actions that are happening in the system 
// Listeners : Code that waits for the event to happen and then runs some code in response to that event

// Example of an event : Click event , Mouseover event , Mouseout event , Keydown event , Keyup event , Load event , Unload event , Scroll event , Resize event etc.

// To check the events happening in a browsser,go to console
// monitorEvents(document); and enter (only supported in Chrome)
// Now try clicking anywhere in the document and you will see the events happening in the console
// To stop monitoring the events, enter unmonitorEvents(document);

// Event Target : The element that is the target of the event
// Action : The action that is performed on the event target
// Event Handler : The code that is executed when the event is triggered
// Event Listener : The code that listens for the event to happen and then runs the event handler

// There are two ways to add event listeners to an element
// 1. Using the `onclick` property of the element
// 2. Using the `addEventListener` method of the element

// addEventListener method
// Syntax : element.addEventListener(event, function(action on event));

let fpara = document.getElementById('fpara');

function changeText(event){
    console.log(event);  // event object contains information about the event that was triggered
    // event information will be printed inside the console0
    fpara.textContent = "Hello Mudassir";
}

fpara.addEventListener('click',changeText);

// fpara.addEventListener('click',function() {
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Mudassir";
// })

// This is also a way but we will use the first method as it's more optimal

// To remove an event listener, we can use the `removeEventListener` method of the element
// Syntax : element.removeEventListener(event, function(action on event));

// fpara.removeEventListener('click',changeText);

// One more reason we use function name instead of anonymous function is that we can remove the event listener using the function name
// If we use an anonymous function, we cannot remove the event listener as we don't have a reference to the function
// if we type the same function again inside removeEventListener, it will not work as it's a different function in memory
// therefore we use function name instead of anonymous function as reference to the function
// we want to pass the same object in memory to removeEventListener which we passed to addEventListener


// Phases of Event Propagation
// 1. Capturing Phase : The event is captured by the outermost element and propagated to the target element
// 2. Target Phase : The event is at the target element
// 3. Bubbling Phase : The event bubbles up from the target element to the outermost element

// An example of event propagation

// if div 
//       |-- p
//             |-- span
// If we click on the span element, the event will be captured by the div element and propagated to the p element and then to the span element
// This is the capturing phase
// Then the event is at the span element
// This is the target phase
// Then the event bubbles up from the span element to the p element and then to the div element
// This is the bubbling phase

// By default, the event listener is added in the bubbling phase
// We can change this by passing a third argument to the addEventListener method
// If we pass true as the third argument, the event listener will be added in the capturing phase
// If we pass false as the third argument, the event listener will be added in the bubbling phase
// By default, the third argument is false
// The name of the third argument is useCapture
// Syntax : element.addEventListener(event, function(action on event), useCapture);
// fpara.addEventListener('click',changeText,true); // This will add the event listener in the capturing phase
// fpara.addEventListener('click',changeText,false); // This will add the event listener in the bubbling phase
// fpara.addEventListener('click',changeText); // This will add the event listener in the bubbling phase as the default value of useCapture is false

