
/* 
CALCULATOR 
  1 - get value when btn is pressed
  2 - display that value in the display 
  3 - if btn pressed more than once keep adding btn to string
  4 - once an operator btn is pressed
    - 1 - convert that string to int
    - 2 - get the second number 
    - 3 - do the calculation
  5 - display the result onto display

  - put all values in an array
  - get all the items out together contact
  - 
*/

/*----------------- option 2.b - WORKING  ---------------*/
const display = document.getElementById('display')
let number = null
let array = []

let num1 = null
let functionOneWasCalled = false

let num2 = null
let total = null


function setValue(btnValue) {

  if (functionOneWasCalled == false) {

  num = btnValue.getAttribute('data-btn-number'); //gets number from num btn pressed

  array.push(num); //push number from value into array => array

  number = (display.value = array.join(''));  //assign first number to number
  num1 = parseInt(number)

  console.log(num1)

  } else if (functionOneWasCalled == true) {
    num = btnValue.getAttribute('data-btn-number'); //gets number from num btn pressed

    array.push(num); //push number from value into array => array

    number = (display.value = array.join('')); //assign first number to number
    num2 = parseInt(number)

    console.log(num2)
  }
}

function addition() {

  display.value = 0  //set display to 0  
  array = [] //empty the array 

  console.log('array & display cleared this is number1 ' + num1)
  console.log(number)

  if(num1 > 0){
    functionOneWasCalled = true
  }
}

function equals(){
  total = num1 + num2

  display.value = total
  console.log(total)
}

function clr(){
  display.value = 0 
  array = []
  num1 = null
  num2 = null 
  functionOneWasCalled = false
  total = 0
}

 