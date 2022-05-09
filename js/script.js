// Created by: Jaejun Lee
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Calculates the product of two numbers the user provides.
 */
function myButtonClicked() {
  const integerOne = parseInt(document.getElementById("integer1").value)
  const integerTwo = parseInt(document.getElementById("integer2").value)
  var result = 0

  if (integerOne != 0 && integerTwo >= 0) {
    while (integerTwo > 0) {
      // Calculation for + or - times + numbers
      result = result + integerOne
      integerTwo = integerTwo - 1
    }
  }
  else if (integerTwo < 0) {
    while (integerTwo != 0) {
      // Calculation for + or - times - numbers
      result = result - integerOne
      integerTwo = integerTwo + 1
    }
  }
  document.getElementById("answers").innerHTML = "The product of these numbers is " + result
}
