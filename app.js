window.onload = function() {

//Area of Triangle Calculator
let btnCalc = document.getElementById('btnCalc');
let clear = document.getElementById('clear');
let result = document.getElementById('result');

//calc area function
let calcArea = () => {
    let side1 = document.getElementById('side-1').value;
    let side2 = document.getElementById('side-2').value;
    let side3 = document.getElementById('side-3').value;
    let s = (side1 + side2 + side3)/2;
    let area =  Math.floor(Math.sqrt(s*((s-side1)*(s-side2)*(s-side3))));
    result.innerHTML = area;
}

//Click Event to execute function
btnCalc.addEventListener("click", calcArea);
clear.addEventListener("click", () => {
    result.innerHTML = ' ';
})


// ******* Celsius To Fahrenheit Calculator *****************************

let tempCalc = document.getElementById('tempCalc');
let clearTemp = document.getElementById('clearTemp');
let resultC = document.getElementById('resultC');
let resultF = document.getElementById('resultF');

let calcCel = () => {
    let c = document.getElementById('c').value;
    if (c == '') {
        resultF.innerHTML = '';
    } else {
        resultF.innerHTML = (c * 1.8) + 32 + '°';
    }
}

let calcFah = () => {
    let f = document.getElementById('f').value;
    if (f == '') {
       resultC.innerHTML = '';
    } else {
       resultC.innerHTML = (f - 32) * 5/9 + '°';
    }
}

//Click Events to execute functions
tempCalc.addEventListener('click', calcCel);
tempCalc.addEventListener('click', calcFah);
//Clears the results
clearTemp.addEventListener('click', () => {
    resultC.innerHTML = '';
    resultF.innerHTML = '';
})


//****************MULITPLY AND DIVIDE CALCULATOR *********************** */

let mult = document.getElementById('multiply');
let divide = document.getElementById('divide');
let clearNums = document.getElementById('clearNums');
let resultNums = document.getElementById('resultNums');


//Multiply Function
let multiplyFunc = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    resultNums.innerHTML = '<p>' + num1 * num2; + '</p>';
   
}

let divideFunc = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    resultNums.innerHTML = num1 / num2;
    
} 

//Add events to execute functions
mult.addEventListener('click', multiplyFunc);
divide.addEventListener('click', divideFunc);
//Clear Result Area
clearNums.addEventListener('click', () => {
    resultNums.innerHTML = '';
})











}// End of Onwindow



