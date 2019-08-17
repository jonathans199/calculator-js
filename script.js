
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

// numbers to get values
let num1 = null
let num2 = null
let total = null

// Flags
let functionOneWasCalled = false
let adding = false
let subtracting = false
let dividing = false
let multiplying = false

// get values from HTML
function setValue(btnValue) {
  if (functionOneWasCalled == false) {
    // num = btnValue.getAttribute('data-btn-number'); //gets number from num btn pressed
    num = btnValue //gets number from num btn pressed
    // console.log(btnValue)

    array.push(num); //push number from value into array => array

    number = (display.value = array.join(''));  //assign first number to number
    num1 = parseInt(number)

    console.log(num1)

  } else if (functionOneWasCalled == true) {
      num = btnValue; //gets number from num btn pressed

      array.push(num); //push number from value into array => array

      number = (display.value = array.join('')); //assign first number to number
      num2 = parseInt(number)

      console.log(num2)
  }
}

// when addition btn is pressed
function addition() {
  display.value = 0  
  array = []
  adding = true

  console.log('adding')

  if(num1 > 0){
    functionOneWasCalled = true
  }
}

// when substraction btn is pressed
function substraction(){
   display.value = 0 
   array = []
   subtracting = true

  console.log('subtracting')

   if (num1 > 0) {
     functionOneWasCalled = true
   }
}

// when division btn is pressed
function division(){
   display.value = 0 
   array = []
   dividing = true

   console.log('dividing')

   if (num1 > 0) {
     functionOneWasCalled = true
   }
}

// when multiplication btn is pressed
function multiplication(){
   display.value = 0 
   array = []
   multiplying = true

   console.log('multiplying')

   if (num1 > 0) {
     functionOneWasCalled = true
   }
}

// when equals btn is pressed
function equals(){
  if (adding == true ){
    total = (num1 + num2)
    console.log(`total = ${total} from ${num1} + ${num2}`)
  } else if (subtracting == true){
    total = (num1 - num2)
    console.log(`total = ${total} from ${num1} - ${num2}`)
  } else if (dividing == true){
    total = (num1 / num2)
    console.log(`total = ${total} from ${num1} / ${num2}`)
  } else if (multiplying == true){
    total = (num1 * num2)
    console.log(`total = ${total} from ${num1} * ${num2}`)
  } 

  display.value = total
  console.log('total ' + total)

  num1 = null
  num2 = null
  array = []
  functionOneWasCalled = false
}

// when clr btn is pressed 
function clr(){
  display.value = 0
  array = []
  num1 = null
  num2 = null
  functionOneWasCalled = false
  total = 0
  adding = false
  subtracting = false
  dividing = false
  multiplying = false
  
  console.log('clear')
}