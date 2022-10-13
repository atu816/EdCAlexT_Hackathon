// Wrap in a DOM content loaded
addEventListener('DOMContentLoaded', (event) => {
  console.log('hello');
  let header = document.querySelector('header');
  let testDiv = document.createElement('div');
  testDiv.setAttribute('style','border: solid red;background-color: grey')
  testDiv.innerText = 'testing'
  header.appendChild(testDiv)

  // https://developer.mozilla.org/en-US/docs/Web/HTML/*
  if (window.location.href === 'https://developer.mozilla.org/en-US/docs/Web/HTML/') {
    console.log('HTML page loaded');
  }


  // Choose a random person
  // Get people down
    // Render info based on page responded
    // Get URL we are on
  
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
      }
    ];
});
