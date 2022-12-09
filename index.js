let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
//for home
let Run = 0;

function one(){
    Run += 1;
    homeEl.textContent = Run
}
function two(){
    Run += 2;
    homeEl.textContent = Run
}
function three(){
    Run += 3;
    homeEl.textContent = Run
}
//for guest
let people = 0;

function one1(){
    people += 1;
    guestEl.textContent = people
}
function two2(){
    people += 2;
    guestEl.textContent = people
}
function three3(){
    people += 3;
    guestEl.textContent = people
}
//RESET
function reset1(){
    homeEl.textContent = 0
    Run = 0 
}
function reset2(){
    guestEl.textContent =0
    people = 0
}
