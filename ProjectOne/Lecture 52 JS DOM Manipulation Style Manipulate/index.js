

// To change CSS properties using Javascript, we can use the `style` property of a DOM element.
// The `style` property allows us to set individual CSS properties directly on the element.

// Using get and set the `style` property

// let paraElement = document.getElementById('spara');
// undefined
// paraElement
// <p id="spara" style="background-color: green; padding : 2rem">

// console.log(paraElement.style);
// CSS2Properties(5) { "background-color" → "green", "padding-top" → "2rem", "padding-right" → "2rem", "padding-bottom" → "2rem", "padding-left" → "2rem" }
// debugger eval code:1:9
// undefined
// paraElement.style.backgroundColor = 'beige';
// "beige" 

// By using the `style` property, we can dynamically change the appearance of elements on a webpage.
// But by using this method, we can only change one inline style of an element.
// and in order to change multiple inline styles of an element, we can use the `cssText` property of the `style` object.

// let secondElement = document.getElementById('sdiv');
// undefined
// secondElement
// <div id="sdiv" style="background-color: yellow; padding : 1.5rem">

// secondElement.style.cssText;
// "background-color: yellow; padding: 1.5rem;"
// secondElement.style.cssText = "background-color : blue; color : white;";
// "background-color : blue; color : white;" 

// So by using the `cssText` property, we can set multiple inline styles at once.


// setAttribute method
// Another way to change the inline styles of an element is by using the `setAttribute` method.
// The `setAttribute` method allows us to set any attribute of an element, including the `style` attribute.

// let element = document.querySelector('#fdiv');
// undefined
// element
// <div id="fdiv" style="background-color: aqua; padding : 2rem">

// element.setAttribute('class','firstDiv');
// undefined

// element

// <div id="fdiv" class="firstDiv" style="background-color: aqua; padding : 2rem">

// We can also use the `setAttribute` method to change the `style` attribute of an element.
// We can add as well as update the inline styles of an element using the `setAttribute` method.
// We can also use the `setAttribute` method to remove the inline styles of an element by setting the `style` attribute to an empty string.

// element.setAttribute('style','');
// undefined
// element
// <div id="fdiv" class="firstDiv" style="">

// we can do multiple inline styles using setAttribute method
// element.setAttribute('style','background-color : pink; padding : 3rem; border-radius : 1rem;');
// undefined
// element
// <div id="fdiv" class="firstDiv" style="background-color : pink; padding : 3rem; border-radius : 1rem;"></div>


// let element = document.querySelector('#fdiv');
// undefined
// element
// <div id="fdiv" style="background-color: aqua; padding : 2rem">

// element.setAttribute('style','padding : 0.5rem');
// undefined
// element.setAttribute('style','padding : 2rem');
// undefined 

// When we are changing the inline styles of an element using the `setAttribute` method,
// it will overwrite the existing inline styles of the element.
// It will not merge the new styles with the existing styles.
// It will just replace the existing styles with the new styles.
// So we have to be careful while using the `setAttribute` method to change the inline styles of an element.
// Because it will remove the existing styles of the element.

// Using className
// Another way to change the styles of an element is by using the `className` property.
// The `className` property allows us to set the class attribute of an element.
// By changing the class of an element, we can change the styles of the element if we have defined styles for that class in a CSS file or in a `<style>` tag.

// let fpara = $0;
// undefined
// fpara
// <p id="fpara" class="goku vegeta" style="background-color: red; padding : 2rem">

// fpara.className
// "goku vegeta"
// fpara.className = "Gohan, Bulbul";
// "Gohan, Bulbul"
// fpara
// <p id="fpara" class="Gohan, Bulbul" style="background-color: red; padding : 2rem">

// Here, we have changed the class of the paragraph element from "goku vegeta" to "Gohan, Bulbul".
// But this method will overwrite the existing classes of the element.
// So we have to be careful while using the `className` property to change the class of an element.
// Because it will remove the existing classes of the element.

// Using classList
// The `classList` property allows us to add, remove, and toggle classes of an element without affecting the existing classes.
// It provides methods like `add()`, `remove()`, `toggle()`, and `contains()` to manipulate the classes of an element.
// We can get the list of classes in the form of an array-like object.
// It can also check if a class is present in the element or not.


// let element = document.querySelector('#fpara');
// undefined
// element
// <p id="fpara" class="firstClass secondClass" style="background-color: red; padding : 2rem">

// element.classList
// DOMTokenList [ "firstClass", "secondClass" ]

// element.classList.add('thirdClass');
// undefined
// element.classList
// DOMTokenList(3) [ "firstClass", "secondClass", "thirdClass" ]

// element.classList.remove('secondClass');
// undefined
// element.classList
// DOMTokenList [ "firstClass", "thirdClass" ]

// element.classList.toggle('thirdClass');
// false
// element.classList
// DOMTokenList [ "firstClass" ]

// element.classList.toggle('thirdClass');
// true
// element.classList.contains('secondClass');
// false
// element.classList.contains('firstClass');
// true 


// The toggle method adds the class if it is not present and removes it if it is present.
// The contains method checks if the class is present in the element or not and returns a boolean value.
// The classList property is very useful when we want to manipulate the classes of an element without affecting the existing classes.
// It is a safer way to change the classes of an element compared to the className property.
