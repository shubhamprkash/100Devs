//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractor(a , b){
    alert(a - b) ;
}
// subtractor(25,5 );


//create a function that divides three numbers and console logs the quotient
function triDivider(a,b,c){
    console.log(a /b/c) ;
}

triDivider(12,4,3)

//create a function that multiplys three numbers and returns the product
function triMulti(a,b,c){
    return a * b * c;
}
let pro = triMulti(5,5,5);
console.log(pro)

//---Medium
//create a function that takes in three numbers. 
// Add the first two numbers and return the remainder of 
// dividing the sum of the first two numbers by the third number

function triNum(a,b,c){
    return (a + b)%c;
}
triNum(3,3,2);
console.log(triNum(3,3,8))

//---Hard
//create a function that takes in 4 numbers. 
// Multiply the first two numbers. 
// If the product is greater than 100 add the sum of 
// the last two numbers and console log the value. 
// If the product is less that 100, subtract the difference of 
// the last two numbers and console log the value. 
// If the product is 100, multiply the first three numbers together 
// and alert the remainder of dividing the fourth number

