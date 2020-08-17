// 1 - Select the section with an id of container without using querySelector.
document.getElementById("container");
// 2 - Select the section with an id of container using querySelector.
document.querySelector('#container');
// 3 - Select all of the list items with a class of "second".
document.getElementsByClassName('second');
// 4 - Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol .third');
// 5 - Give the section with an id of container the text "Hello!"
let initp = document.createElement('p');
let content = document.createTextNode("Hello");
initp.appendChild(content);
let id = document.querySelector('#container');
id.insertBefore(initp, document.querySelector('ul'));
// 6 - Add the class main to the div with a class of footer.
let clas = document.querySelector('.footer');
clas.classList.add('main');
// 7 - Remove the class main on the div with a class of footer.
clas.classList.remove('main');
// 8 - Create a new li element.
let li = document.createElement('li');
// 9 - Give the li the text "four"
li.classList.add('fourth');
let text = document.createTextNode('four');
li.appendChild(text);
// 10 - Append the li to the ul element.
let el = document.querySelector('ul');
el.insertBefore(li, document.querySelector('.third'));
// 11 - Loop over all of the lis inside the ol tag and give them a background color of "green"
let ol = document.querySelector('ol');
let li = ol.querySelectorAll('li');
for(let e of li) {
    u.style.backgroundColor = 'green';
}
// 12 - Remove the div with a class of footer
document.querySelector('.footer').remove('div')

