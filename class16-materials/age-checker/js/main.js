//Create a conditonal that checks their age

//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


function checker(){
    let age = document.querySelector("#danceDanceRevolution").value;
    let msg;
if (age<16){
    msg = "You can not drive";
}
else if( age<18){
    msg="You can't hate from outside the club, because they can't even get in";
}
else if (age < 21){

    msg ='You can not drink';
}
else if(age < 25 ){
    msg = "can not rent cars affordably";
}
 else if (age < 30 ){
    msg="You can not rent fancy cars affordably";
}
else if (age >= 30){
    msg="there is nothing left to look forward too";
}
console.log (msg);
}

document.querySelector('h1').addEventListener('click', checker);


// console.log(msg);
//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
