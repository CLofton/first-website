"use strict";

console.log("Hello, world!");

function myFunction() {
    document.getElementById("demo").innerHTML = "Look I can make an interactive page!";
  }

function imageBye() {
    let element = document.getElementById("img");
    element.parentNode.removeChild(element);
    console.log("Image Bye Function was called.")
}

function imageHello() {
    document.getElementById("images").innerHTML = "Sorry pictures don't work";
     console.log("Image Hello Function was called.")
 }