document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('dark').onclick = goDark;

let body = document.querySelector('body');

function partyPurple() {
  body.style.backgroundColor = 'rgba(241,63,247,1)'
  body.style.color = 'white'
}

function partyGreen() {
  body.style.backgroundColor = 'rgba(0,253,81,1)'
  body.style.color = 'white'
}

function partyBlue() {
  body.style.backgroundColor = 'rgba(0,254,255)'
  body.style.color = 'white'
}

function goDark(){
  body.style.backgroundColor = "black";
  body.style.color = "white";
}