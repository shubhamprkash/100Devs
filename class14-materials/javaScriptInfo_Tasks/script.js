/*
 Working with variables
importance: 2
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/

let admin , name ='John';
 admin = name;

const writter  = document.querySelector('#t1');
writter.innerHTML=`name  =  ${name} <br/> Admin = ${admin}`;
// alert(admin);

/*
Giving the right name
importance: 3
Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name 
that variable?
*/

let ourPlanet = 'Earth';
let curentVisiterName = name;

const writter2  = document.querySelector('#t2');
writter2.innerHTML=`ourPlanet =  ${ourPlanet} <br/> currentVisitorName = ${curentVisiterName}`;

/*
Uppercase const?
importance: 4
Examine the following code:

const birthday = '18.04.1982';

const age = someCode(birthday);
Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).

Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // make uppercase?

const AGE = someCode(BIRTHDAY); // make uppercase?
*/

// no