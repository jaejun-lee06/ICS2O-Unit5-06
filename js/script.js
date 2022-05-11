// Created by: Jaejun Lee
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * This function does multiplication.
 */
function myButtonClicked () {

  const integer1 = parseInt(document.getElementById("integer1").value)
	const integer2 = parseInt(document.getElementById("integer2").value)
  var addedInteger = 0
  var result = 0

  if (integer1 > 0 && integer2 > 0) {
    while (addedInteger < integer2) {
      addedInteger = addedInteger + 1;
      result = result + integer1;
    }
  } else if (integer1 < 0 && integer2 < 0) {
    while (addedInteger > integer2) {
      addedInteger = addedInteger - 1;
      result = result - integer1;
    }
  } else if (integer1 > 0 && integer2 < 0) {
    while (addedInteger > integer2) {
      addedInteger = addedInteger - 1;
      result = result - integer1;
    }
  } else {
    while (addedInteger < integer2) {
      addedInteger = addedInteger + 1;
      result = result + integer1;
    }
  }
  
  document.getElementById("answers").innerHTML = "The answer is: " + integer1 + " x " + addedInteger + " = " + result;
}