"use strict";

function decimalToBinary(decimalNum) {
  let binaryHolder = [];
  while (decimalNum >= 1) {
    binaryHolder.unshift(Math.floor(decimalNum % 2));
    decimalNum = decimalNum / 2;
  }
  return binaryHolder.join("");
}

// doubling binary to Decimal (101)
// 1
//1 x 2 + 0 = 2
//2 x 2 + 1 = 5
function binaryToDecimal(binaryNum) {
  let decimalValueHolder = 0;
  let binaryBase = 1;
  while (binaryNum) {
    let lastNum = binaryNum % 10;
    binaryNum = Math.floor(binaryNum / 10);
    decimalValueHolder += lastNum * binaryBase;
    binaryBase = binaryBase * 2;
  }
  return decimalValueHolder;
}

document.querySelector(".btn").addEventListener("click", function () {
  let firstOctet = document.querySelector(".first-octet").value;
  let secondOctet = document.querySelector(".second-octet").value;
  let thirdOctet = document.querySelector(".third-octet").value;
  let fourthOctet = document.querySelector(".fourth-octet").value;
  if (!firstOctet && !secondOctet && !thirdOctet && !fourthOctet) {
    document.querySelector(".display-result").textContent = "Enter a number";
  } else {
    document.querySelector(".display-result").textContent = `${decimalToBinary(
      firstOctet
    )}, ${decimalToBinary(secondOctet)}, ${decimalToBinary(
      thirdOctet
    )},${decimalToBinary(fourthOctet)}`;
  }
});

document.querySelector(".Decimal-btn").addEventListener("click", function () {
  let firstDecimal = document.querySelector(".first-decimal").value;
  let secondDecimal = document.querySelector(".second-decimal").value;
  let thirdDecimal = document.querySelector(".third-decimal").value;
  let fourthDecimal = document.querySelector(".fourth-decimal").value;
  if (!firstDecimal && !secondDecimal && !thirdDecimal && !fourthDecimal) {
    document.querySelector(".decimal-display-result").textContent =
      "Enter a 1 or 0 ";
  } else {
    document.querySelector(
      ".decimal-display-result"
    ).textContent = `${binaryToDecimal(firstDecimal)},${binaryToDecimal(
      secondDecimal
    )},${binaryToDecimal(thirdDecimal)},${binaryToDecimal(fourthDecimal)} `;
  }
});
