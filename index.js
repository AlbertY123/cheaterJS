import cheater from './cheater.js';
//Code We need to run
document.getElementById("hide").addEventListener("click", hide);
function hide(){
    cheater.hidebyid("ukraine");
}
document.getElementById("header").classList.add("heading");

//Example code (Useless code)
console.log(cheater.randomNumber(2,10));
