/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

document.querySelector("#excuse").innerHTML = generateExcuse();
}

let generateExcuse = () => {

  let who = ["The doctor","My sister", "Your neighbor", "Your dad"];
  let action= ["stole", "ate", "hide", "lost"];
  let thing=["the money","my bike", "my food", "the tickets"];
  let when =["last night.","yesterday.", "last week", "an hour ago."]

  let whoIndex= Math.floor(Math.random()*4);
  let actionIndex= Math.floor(Math.random()*4);
  let thingIndex= Math.floor(Math.random()*4);
  let whenIndex= Math.floor(Math.random()*4);

  

  return who[whoIndex] + " " + action[actionIndex] + " " + thing[thingIndex] + " " + when[whenIndex];

  

};



