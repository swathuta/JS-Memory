console.log("HEllooooo");

//define a name and show it on a the screen
const name = "Hermione"
const nameElement = document.getElementById('name');

console.log('name element', nameElement);
nameElement.textContent = name;

// define an age and show that on the screen
const age = 11;
const ageElement = document.getElementById('age')
ageElement.textContent = age;

//create css classes for is good/not
const isGood = false;
const goodClass = isGood ?  'good' : 'not-good';
const isGoodElement = document.getElementById('is-good')
isGoodElement.textContent = isGood
//show the right word/class styles on the screen depending