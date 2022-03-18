//--- Easy
//create a variable and assign it a number
let nuba = 66;

//minus 10 from that number
nuba = nuba -10; 

//print that number to the console
console.log(nuba)

//--- Medium
//create a variable that holds a value from the input
let val = document.querySelector('#danceDanceRevolution').value;


//add 25 to that number
val += 25;

//alert that number
alert("value is " + val);

//--- Hard
//create a variable that holds the h1
let hero = document.querySelector('h1');

//add an event listener to that element that console logs the 
// sum of the two previous variables

hero.addEventListener('click', sum);

function sum(){
    console.log(nuba + Number(val));
}