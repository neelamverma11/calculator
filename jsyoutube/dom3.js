console.log('Hello this is dom3  of thapa technical');

// access child of a body

let child = document.body.children;
console.log(child);

// add a new child in a body

let para = document.createElement('p');
let Textnode = document.createTextNode('This is TextNode');
para.appendChild(Textnode);
console.log(para);
document.body.appendChild(para);

//  access first and  last child

let list = document.querySelector('ul');
console.log(list.firstChild);
console.log(list.lastChild);

// how to access siblings

let sibling = thapa.nextElementSibling.nextElementSibling;
console.log(sibling);