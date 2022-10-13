

const resources = [
  {
    name: "Katie Ahn",
    role: "Fellow",
    skill: ["JavaScript"]
},
  {
    name: "Jared Lewis",
    role: "Engineering Instructor",
    skill: ["HTML", "API"]
},
  {
    name: "Katrina Villanueva",
    role: "Engineering Instructor",
    skill: ["CSS", "JavaScript"]
},
  {
    name: "Max Shick",
    role: "Fellow",
    skill: ["HTML", "CSS"]
},
  {
    name: "Chris Jamali",
    role: "Fellow",
    skill: ["CSS", "HTML", "JavaScript"]
},
  {
    name: 'Kristin Tillotson',
    role: 'Instructor',
    skills: ["HTML", "CSS"]
  },
  {
    name: 'Crystal Agoncillo',
    role: 'Fellow',
    skills: ['API', 'JavaScript']
  },
  {
    name: 'Matt Dias',
    role: 'Senior',
    skills: ['API']
  },
  {
    name: 'Jimmy Lin',
    role: 'Senior',
    skills: ['API', "JavaScript"]
  }
];

const cssArr = [];
const htmlArr = [];
const jsArr = [];
const apiArr = [];

// Iterate over
  // Based on if skill includes certain specialty
    // Push into respective arr
    resources.forEach( obj => {
      Object.keys(obj).forEach( key => {
        if(obj[key].includes("CSS"))
        cssArr.push(obj)
      })
    })
    resources.forEach( obj => {
      Object.keys(obj).forEach( key => {
        if(obj[key].includes("HTML"))
        htmlArr.push(obj)
      })
    })
    resources.forEach( obj => {
      Object.keys(obj).forEach( key => {
        if(obj[key].includes("JavaScript"))
        jsArr.push(obj)
      })
    })
    resources.forEach( obj => {
      Object.keys(obj).forEach( key => {
        if(obj[key].includes("API"))
        apiArr.push(obj)
      })
    })

    let cssIndex = Math.floor(Math.random() * cssArr.length);
    let htmlIndex = 0;
    let apiIndex = Math.floor(Math.random() * apiArr.length);
    let jsIndex = Math.floor(Math.random() * jsArr.length);

    localStorage.setItem('css', cssIndex,)
    localStorage.setItem("html", htmlIndex,)
    localStorage.setItem('api', apiIndex,)
    localStorage.setItem('js', jsIndex,)


const date = new Date()// use Date method 
const hours = date.getHours()// to get the hour
let timeOfDay

if (hours < 12) {// depending on the hour display greeting
    timeOfDay = "Good morning!"
} else if (hours >= 12 && hours < 17) {
    timeOfDay = "Good afternoon!"
} else {
    timeOfDay = "Good evening!"
}
console.log(timeOfDay)


// Header ref
let header = document.querySelector('header');
// Toolbar container div
let toolbar = document.createElement('div');
toolbar.setAttribute('id', 'toolbar-container');
// Need help? title
let help = document.createElement('div');
help.setAttribute('id','help');
help.innerText = `${timeOfDay} Need some help?`
// Container center box
let toolbarCenter = document.createElement('div');
toolbarCenter.setAttribute('id', 'center-toolbar');
// Shuffle Button
let shuffle = document.createElement('div');
shuffle.setAttribute('id', 'shuffle');
// shuffle.innerText = 'Want to ask someone else?'

// Set default text
toolbarCenter.innerText = 'Codesmith Helper Bar is here for You.';
// Append toolbar text to toolbar, toolbar to header
toolbar.appendChild(help);
toolbar.appendChild(toolbarCenter);
toolbar.appendChild(shuffle);
header.appendChild(toolbar);

// Cases for each window
if (window.location.href.includes('HTML')) {
  console.log(htmlArr);
  let htmlI = window.localStorage.getItem("html");
  
  // if (htmlI === htmlArr.length) {
  //   htmlI = 0;
  //   localStorage.setItem('html', htmlI);
  // }
  console.log(window.localStorage);
  console.log('htmlI', htmlI)
  toolbarCenter.innerText = `${htmlArr[htmlI].name} is the ${htmlArr[htmlI].role} who specializes in HTML`
  htmlI++;
  localStorage.setItem("html", htmlI);
};

if (window.location.href.includes('CSS')) {
  toolbarCenter.innerText = `${cssArr[cssIndex].name} is the ${cssArr[cssIndex].role} who specializes in CSS`
  cssIndex++;
  if (cssIndex === cssArr.length) cssIndex = 0;
}
if (window.location.href.includes('JavaScript')){
  toolbarCenter.innerText = `${jsArr[jsIndex].name} is the ${jsArr[jsIndex].role} who specializes in JavaScript`
  jsIndex++;
  if (jsIndex === jsArr.length) jsIndex = 0;
}
if (window.location.href.includes('API')){
  toolbarCenter.innerText = `${apiArr[apiIndex].name} is the ${apiArr[apiIndex].role} who specializes in APIs`
  if (apiIndex === apiArr.length) apiIndex = 0;
}


// Timer shutdown
let startTime = 60;
// Create a timer to be displayed
let timer = document.createElement('div');
// timer.setAttribute()
timer.innerText = startTime;
shuffle.appendChild(timer);

// store the setInterval function inside a var to use clearInterval later
const timerFunc = 

setInterval( () => {
  if(startTime === 0) timerStop();// calls timerStop func if timer runs out
  if(startTime !== 0) {// keeps going as long as time left
    startTime--;
    timer.innerText = startTime;
  }
}, 1000);// calls every 1 sec

function timerStop() {
  clearInterval(timerFunc);// ends countdown
  window.alert("You've been here a while. Maybe it's time to take a break?");
// displays window alert msg
  timer.innerText = 'Good choice!'
  return;
   // can add more functionality to this
  }


  // toggle dark mode button
  const toggle = document.createElement('button');
  toggle.setAttribute('id', 'light-mode');
  toggle.innerText = 'dark-mode'

  let enabled = false;

  toggle.addEventListener('click', () => {

    if(enabled === true){
        console.log("click", enabled)
        toolbar.setAttribute('id', 'toolbar-container');
        toggle.setAttribute('id', 'light-mode');
    }

    if(enabled === false){
      console.log("click", enabled)
      toolbar.setAttribute('id', 'toolbar-containerDark');
      toggle.setAttribute('id', 'dark-mode');
    }

    enabled = !enabled

  })

  shuffle.appendChild(toggle)


