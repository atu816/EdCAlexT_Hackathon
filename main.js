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

    let cssIndex = 0;
    let htmlIndex = 0;
    let apiIndex = 0;
    let jsIndex = 0;


// Header ref
let header = document.querySelector('header');
// Toolbar container div
let toolbar = document.createElement('div');
toolbar.setAttribute('id', 'toolbar-container');
// Need help title
let help = document.createElement('div');
help.setAttribute('id','help');
help.innerText = 'Need help?'
// Container center box
let toolbarCenter = document.createElement('div');
toolbarCenter.setAttribute('id', 'center-toolbar');
// Set default text
toolbarCenter.innerText = 'Codesmith Helper Bar';
// Append toolbar text to toolbar, toolbar to header
toolbar.appendChild(help);
toolbar.appendChild(toolbarCenter);
header.appendChild(toolbar);

// Cases for each window
if (window.location.href.includes('HTML')) {
  toolbarCenter.innerText = `${htmlArr[htmlIndex].name} is the ${htmlArr[htmlIndex].role} who specializes in HTML`
  htmlIndex++;
  if (htmlIndex === htmlArr.length) htmlIndex = 0;
}
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