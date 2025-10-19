

// Code 1 

const t1 = performance.now();

for(let i = 0;i <= 100;i++) {
    let para = document.createElement('p');
    para.textContent = "This is my paragraph " + i;
    document.body.appendChild(para); 
    // why did we appendChild and what is appendChild?
    // appendChild is a method that adds a node to the end of the list of children of a specified parent node. 
}

const t2 = performance.now();

console.log("Time taken to create and append 100 paragraphs: " + (t2 - t1) + " milliseconds");