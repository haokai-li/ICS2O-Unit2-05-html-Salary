// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the Salary

"use strict"

function enterClicked() {
  // This function get hours and rate calculate and show it back

  //input
  const hours = parseInt(document.getElementById("hours").value)
  const rate = parseInt(document.getElementById("rate").value)

  // process
  const yourPay = (hours * rate) * (1.00 - 0.18)
  const govenmentTake = (hours * rate) * 0.18

  //output
  document.getElementById('yourPay').innerHTML = 'Your pay will be: $' + takeHomeSalary.toFixed(2)
  document.getElementById('govenmentTake').innerHTML = 'Your pay will be: $' + takeHomeSalary.toFixed(2)
}