console.log('hello');
let header = document.querySelector('header');
let testDiv = document.createElement('div');
testDiv.setAttribute('style','border: solid red;background-color: grey')
testDiv.innerText = 'testing'
header.appendChild(testDiv)