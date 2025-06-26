import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function getRandonNumber(a,b){
return Math.floor(Math.random()*(b-a)+a);
}

function randomnumber(array){
  let maximo=array.length-1;
  let minimo=0;
  let random=getRandonNumber(minimo,maximo);
  return array[random];
}


window.onload = function() {

 document.querySelector("#excuse").innerHTML= randomnumber(who)+" "+randomnumber(action)+" "+randomnumber(what)+" "+randomnumber(when)}; 




