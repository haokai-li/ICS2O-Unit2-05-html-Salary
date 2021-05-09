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
  const your = (hours * rate) * (1.00 - 0.18)
  const govenment = (hours * rate) * 0.18

  //output
  document.getElementById('your').innerHTML = 'Your pay will be: $' + your.toFixed(2)
  document.getElementById('govenment').innerHTML = 'The govenment will take: $' + govenment.toFixed(2)
}