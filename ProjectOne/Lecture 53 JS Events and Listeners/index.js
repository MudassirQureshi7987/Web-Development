
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

// let fpara = document.getElementById('fpara');

// function changeText(event){
//     console.log(event);  // event object contains information about the event that was triggered
//     // event information will be printed inside the console0
//     fpara.textContent = "Hello Mudassir";
// }

// fpara.addEventListener('click',changeText);

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
// fpara.addEventListener('click',changeText); // This will add the event listener in the bubbling phase as the 
// default value of useCapture is false


// Default Actions
// Default behavior of an element when an event is triggered
// The default action of an anchor tag is to navigate to the href attribute value when clicked
// So to prevent the default action of an element, we can use the preventDefault method of the event object
// Syntax : event.preventDefault();

// let fanchor = document.getElementById('fanchor');

// fanchor.addEventListener('click',function(event){
//     event.preventDefault(); // This will prevent the default action of the anchor tag
//     fanchor.textContent = "I am a preventDefault example";
// });

// Now when we click on the anchor tag, it will not navigate to the href attribute value
// Instead, it will change the text content of the anchor tag to "I am a preventDefault example"


// Avoiding Too Many Event Listeners
// Instead of adding event listeners to multiple elements, we can add a single event listener to a parent element and use event delegation to handle the events of the child elements
// This will improve the performance of the application as we are not adding multiple event listeners to multiple elements
// Example of event delegation

// let paras = document.querySelectorAll('p');

// for(let i = 0;i < paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click',function(){
//         alert("You have clicked on paragraph " + (i+1));
//     })  
// }

// But by doing this, we are adding multiple event listeners to multiple elements
// Instead, we can add a single event listener to the parent element and use event delegation to handle the events of the child elements

// let paras = document.querySelectorAll('p');

// function paraHandler(event){
//     alert("You have clicked on " + event.target.textContent);
// }

// for(let i = 0;i < paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click',paraHandler);  
// }

// Here, we are adding a single event listener to each paragraph element
// And using the event object to get the target element that was clicked
// This way, we are not adding multiple event listeners to multiple elements
// Instead, we are adding a single event listener to each paragraph element
// This will improve the performance of the application as we are not adding multiple event listeners to multiple elements


// We can directly add the event listener to the parent element and use event delegation to handle the events of the child elements
// This way,we won't have to link each and every child element to the event listener

// let mydiv = document.getElementById('wrapper');

// function divHandler(event){
//     alert("You have clicked on " + event.target.textContent);
// }

// mydiv.addEventListener('click',divHandler);

// The target property of the event object will give us the element that was clicked
// So, we can use the target property to get the element that was clicked
// And then we can perform the desired action on that element
// This way, we are adding a single event listener to the parent element
// And using event delegation to handle the events of the child elements
// This will improve the performance of the application as we are not adding multiple event listeners to multiple elements


// If we only want to show alerts for span and not for paragraphs in it then


let mydiv = document.getElementById('wrapper');

function divHandler(event) {
    console.log("You clicked:", event.target.nodeName.toLowerCase(), "with text:", event.target.textContent);
    
    if (event.target.nodeName === 'SPAN') { // nodeName returns the tag name in uppercase sso we compare with 'SPAN'
        alert("You have clicked on " + event.target.textContent);
    }
}

mydiv.addEventListener('click', divHandler);


// DOMContentLoaded Event
// This event is fired when the initial HTML document has been completely loaded and parsed
// This event does not wait for stylesheets, images, and subframes to finish loading
// This event is useful when we want to run some code after the DOM is fully loaded
// Syntax : document.addEventListener('DOMContentLoaded', function(action on event));

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
});

// The above code will run when the DOM is fully loaded and parsed
// We can use this event to run some code after the DOM is fully loaded
// This is useful when we want to manipulate the DOM elements after they are fully loaded
// This is also useful when we want to add event listeners to the DOM elements after they are fully loaded

