/*let h = "0";
let d = "0";

console.log("enter human years");
let person = prompt("Please enter your name", "Harry Potter");
console.log(input);
*/

/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dogage = 0;
rl.question("How old is your dog? ", function (answer) {
    dogage = ((Math.log(answer)*16)+31); // Going from dog years to human years is -  ((ln dogyears) * 16) + 32  = humanyears
    dogage = Math.round(dogage); //get rid of decimal
    console.log("your dog is " + dogage + " in human years.")

  rl.close();
});
*/


let dogage = 0;

function calc() {
    let val = document.getElementById("g").value
    dogage = ((Math.log(val)*16)+31); // Going from dog years to human years is -  ((ln dogyears) * 16) + 32  = humanyears
    dogage = Math.round(dogage); //get rid of decimal
    console.log("your dog is " + dogage + " in human years.")

    document.getElementById("outp").innerHTML = "Your dog is " + dogage + " in human years!";
}
