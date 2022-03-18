// *Variables*
// Create a variable and console log the value

let val = 65;
console.log(val);

// Create a variable, add 10 to it, and alert the value

let something = 10;
something += 10; 
alert(something);


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function suntractor(a,b,c,d){
    alert(a-b-c-d);
}

suntractor(90,80,70,60);

// Create a function that divides one number by another and returns the remainder

function reminder(a,b){
    return  a%b;

}

console.log(reminder(10,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is 
// greater than 50 alert Jumanji

function adderJumanji(a,b){
    let result= a+b;
    if(result > 50){
        alert("jumaji")
    }
}

adderJumanji(20,10);


// Create a function that multiplys three numbers and if the 
// product is divisible by 3 alert ZEBRA

function multiDiveder(a,b,c){
    let pro = a*b*c;
    if (pro % 3 === 0 ){
        alert("Zebra")
    }
}

multiDiveder(60,20,5);

//*Loops*
//Create a function that takes in a word and a number. 
// Console log the word x times where x was the number passed in

function pataNahi(word,num){
    for(let i = 1; i<=num ; i++){
        console.log(word)
    }
}
pataNahi('kuchBhi', 5);