// Created by: Jaejun Lee
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict";

function myButtonClicked() {
  const side1 = document.getElementById("side1").value
  const side2 = document.getElementById("side2").value 
  const side3 = document.getElementById("side3").value

  
  if ((side1 == side2 && side2 == side3)) {
    document.getElementById("answers").innerHTML = "The triangle is an equilateral triangle. "
  }
  else if ((side1 == side2 || side2 == side3 || side1 == side3)) {
    document.getElementById("answers").innerHTML = "The triangle is an isosceles triangle. "
  }
  else if ((side1 == 0 || side2 == 0 || side1 == 0)) {
    document.getElementById("answers").innerHTML = "This is not a triangle. "
  }
  else {
    document.getElementById("answers").innerHTML = "The triangle is a scalene triangle."
  }
}
