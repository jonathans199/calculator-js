/* CALCULATOR 
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

const display = document.getElementById('display')
let displaysValue = null
let array = []

let decimal = document.getElementById('decimal')

// numbers to get values
let num1 = null
let num2 = null
let total = null

// Flags
let setValueWasCalled = false
let adding = false
let subtracting = false
let dividing = false
let multiplying = false

// get values from HTML
function setValue(btnValue) {
  if (setValueWasCalled == false) {
    num = btnValue //gets number from num btn pressed

    array.push(num) //push number from value into array => array

    if (array.includes('.') ){
        decimal.disabled = true    
    } 

    displaysValue = (display.value = array.join(''))  //assign first number to number
    num1 = parseFloat(displaysValue)

    console.log(num1)

  } else if (setValueWasCalled == true) {
      num = btnValue //gets number from num btn pressed

      array.push(num) //push number from value into array => array

      if (array.includes('.')) {
        decimal.disabled = true
      }

      displaysValue = (display.value = array.join('')) //assign first number to number
      num2 = parseFloat(displaysValue)

      console.log(num2)
  }
}

// when addition btn is pressed
function addition() {  
  array = []
  decimal.disabled = false
  adding = true
  

  console.log('adding')

  if(num1 > 0){
    setValueWasCalled = true
  }
}

// when substraction btn is pressed
function substraction(){ 
   array = []
   decimal.disabled = false
   subtracting = true

  console.log('subtracting')

   if (num1 > 0) {
     setValueWasCalled = true
   }
}

// when division btn is pressed
function division(){ 
   array = []
   decimal.disabled = false
   dividing = true

   console.log('dividing')

   if (num1 > 0) {
     setValueWasCalled = true
   }
}

// when multiplication btn is pressed
function multiplication(){ 
   array = []
   decimal.disabled = false
   multiplying = true

   console.log('multiplying')

   if (num1 > 0) {
     setValueWasCalled = true
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
  decimal.disabled = false

  setValueWasCalled = false
}

// when clr btn is pressed 
function clr(){
  display.value = 0
  array = []
  decimal.disabled = false
  num1 = null
  num2 = null
  setValueWasCalled = false
  total = 0
  adding = false
  subtracting = false
  dividing = false
  multiplying = false
  
  console.log('clear')
}