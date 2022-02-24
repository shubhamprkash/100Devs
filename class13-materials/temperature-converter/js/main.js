//Write your pseduo code first! 

/*
    read input value
    convert from celsius to farehnight
        inputValue * 9/5
        +32
       { (0°C × 9/5) + 32 = 32°F  }
    print the output

*/


document.querySelector('#btn').addEventListener("click", convert);

function convert(){
    const inputVal = document.querySelector('#input').value;
    let  result = (inputVal * (1.8)) + 32;
    document.querySelector("#output").textContent=result;
}