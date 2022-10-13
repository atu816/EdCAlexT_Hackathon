

const people = [
  {
    name: 'Jared',
    role: 'Instructor',
    skills: 'Debugging'
  },
  {
    name: 'Kat',
    role: 'Instructor',
    skills: 'HTML'
  },
  {
    name: 'Camera',
    role: 'Instructor',
    skills: 'OOP'
  },
  {
    name: 'Crystal',
    role: 'Fellow',
    skills: 'API'
  }
];
// Wrap in a DOM content loaded
// document.addEventListener('DOMContentLoaded', () => {
console.log('hello');

let header = document.querySelector('header');
let testDiv = document.createElement('div');

testDiv.setAttribute('style', 'border: solid red;background-color: grey')
testDiv.innerText = 'Codesmith Helpers'
header.appendChild(testDiv)
console.log(window.location.href);
if (window.location.href.includes('HTML')) {
  testDiv.innerText = `${people[0].name} is the ${people[0].role} who specializes in ${people[0].skills}`
}
if (window.location.href.includes('CSS')) {
  testDiv.innerText = `${people[1].name} is the ${people[1].role} who specializes in ${people[1].skills}`
}
if (window.location.href.includes('JavaScript')){
  testDiv.innerText = `${people[2].name} is the ${people[2].role} who specializes in ${people[2].skills}`
}
if (window.location.href.includes('API')){
  testDiv.innerText = `${people[3].name} is the ${people[3].role} who specializes in ${people[3].skills}`
}


  // Choose a random person
  // Get people down
    // Render info based on page responded
    // Get URL we are on


