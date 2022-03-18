// *Variables*
// Declare a variable, assign it a value, and alert the value

let val = 65;
// alert(val);

// Create a variable, divide it by 10, and console log the value

var variable = 30;
variable /= 3;
console.log(variable); 

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function multipier(a,b,c){
    let reuslt = a *b * c;
    alert( reuslt);
}

// Create a function that takes in 4 numbers. 
// Add the first two numbers and subtract the next two. Console log the result

function weird(a,b,c,d){
    console.log();
}

// *Conditionals*
// Create a function that takes in 3 numbers. 
// Starting with 100 add the first number, subtract the second, 
// and divide the third. If the value is greater then 25, 
// console log "WE HAVE A WINNNA"

function winna(a,b,c){
    let result = (100 + a -b) /c;
    if (result > 25){
        console.log("We AHve a WINNA");
    }
}


// Create a function that takes in a day of the week. If it is a weekend alert, 
// "weekend" and if not alert "week day". 
// Handle capitilization and if the user does not enter a day of the week 
// alert "Try again!"

function dayOfWeek(day){
    const dayOfWeek = day.toLowerCase();
    if(dayOfWeek === 'saturday' || dayOfWeek === 'sunday'){
        alert("Weekend baby!!!!")
    }
    else
        alert("Nevermind it the regular week day.")
}


//*Loops*
//Create a function that takes in a number. 
// Console log all values from 1 to that number or greater, 
// but count by 3

function logNum(num){
    for(let i = 1; i <= num; i++){
        console.log(i)
    }
}
logNum(5)