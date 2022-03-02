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

// no, birthday is date and age is number/integer hence no point using uppercase


//*********************************************Functions Tasks **************************************************************************************************************************/
/*
Is "else" required?
importance: 4
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
Is there any difference in the behavior of these two variants?
*/

//No difference

/*
Rewrite the function using '?' or '||'
importance: 4
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR |
*/

let age ;
function checkAge(age){
return age>18 ? true : confirm('Did parents allow you?')
}

function checkAge2(age) {
    if (age > 18) {
        return true || confirm('Did parents allow you?');
    } 
  }

const writter3  = document.querySelector('#func-t1');
writter3.innerHTML=`checkAge(32) ==> ${checkAge(32)} `;
const writter4  = document.querySelector('#func-t1-2');
writter4.innerHTML=`checkAge2(22) ==> ${checkAge2(21)}`;
console.log(checkAge2(22));


/*
Function min(a, b)
importance: 1
Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(a, b) {
  if(a < b){
    return a;
  }else
  return b;
}

const writter5  = document.querySelector('#func-t2');
writter5.innerHTML=` min(32,22) ==>  ${min(32, 22)} `;


/*
Function pow(x,n)
importance: 4
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
*/

function pow(x,y){
  result  = x;
  for(let i=1;i<y;i++){
    result = rusult * rusult;
  }
  return result;
}

