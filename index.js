let button = document.getElementById('my-button');
console.log(button)


let buttonsByTag = document.getElementsByTagName('button');
console.log(button)

let buttonsClassName = document.getElementsByClassName('my-class');
console.log(button)

let buttonsClassName = document.querySelectorAll('button.my-class');
console.log(button)



let button = document.getElementById('btn');
let content = documen.getElementById('content);

button.addEventListener(click, () => {
    if (content.innerHTML== 'Goodbye.') {
        content.innerHTML = 'Hello';
    } else {
        content.innerHTML = 'Goodbye'
    }
    }
});



document.getElementById('content').innerHTML = 'Goodbye';

document.getElementById('remove').addEventListener ('click', () => {
    let idToRemove = document.getElementById('remove-id').value;
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentnode.removeChild(elementToRemove);
    document.getElementById('remove-id').value = '';
});

let id = 0;
document.getElementById('add').addEventListener ('click', () => {
    var parent = dcoument.getElementById('paragraph');
    var newElement= document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value;
    newElement.setAttribute('id', id++);
    parent.appendChild(newElement);
    document.getElementById('new-text').value = '';