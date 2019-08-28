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

// Operators
const decimalBtn = document.getElementById('btn-decimal')
const addBtn = document.getElementById('btn-add')
const minusBtn = document.getElementById('btn-minus')
const divideBtn = document.getElementById('btn-divide')
const multiplyBtn = document.getElementById('btn-multiply')
const equalsBtn = document.getElementById('btn-equals')
const clearBtn = document.getElementById('btn-clear')

// numbers to get values
let num1, num2, total 

// Flags
let setValueWasCalled = "no"
let adding = "no"
let subtracting = "no"
let dividing = "no"
let multiplying = "no"

// get values from HTML
function setValue(btnValue) {
  if (setValueWasCalled == "no") {
    num = btnValue //gets number from num btn pressed

    array.push(num) //push number from value into array => array

    if (array.includes('.') ){
        decimalBtn.disabled = true    
    } 

    displaysValue = (display.value = array.join(''))  //assign first number to number
    num1 = parseFloat(displaysValue) 

    console.log('num1=> ' + num1)

  } else if (setValueWasCalled == "yes") {
      num = btnValue //gets number from num btn pressed

      array.push(num) //push number from value into array => array

      if (array.includes('.')) { //find out if array already contains a decimal
        decimalBtn.disabled = true // if yes then disable the decimal button
      }

      displaysValue = (display.value = array.join('')) //assign first number to number
      num2 = parseFloat(displaysValue)

      console.log('num2=>' + num2)
  }
}

function reset(){
  array = []
  decimalBtn.disabled = false

  if (num1 > 0) {
    setValueWasCalled = "yes"
  }
}


addBtn.onclick = function(){
  reset()
  adding = "yes"
  console.log('adding')
}

minusBtn.onclick = function(){
  reset()
  subtracting = "yes"
  console.log('subtracting')
}

divideBtn.onclick = function(){
  reset()
  dividing = "yes"
  console.log('dividing')
}

multiplyBtn.onclick = function(){
  reset()
  multiplying = "yes"
  console.log('multiplying')
}

clearBtn.onclick = function(){
  display.value = 0
  array = []
  decimalBtn.disabled = false
  num1 = null
  num2 = null
  setValueWasCalled = "no"
  total = 0
  adding = "no"
  subtracting = "no"
  dividing = "no"
  multiplying = "no"

  console.log('clear')
}

equalsBtn.onclick = function(){
  {
    if (adding == "yes") {
      total = (num1 + num2)
        console.log(`total = ${total} (num1=> ${num1} + num2=> ${num2})`)
      adding = "no" // reset flag for continous operations // reset flag for continous operations
    } else if (subtracting == "yes") {
      total = (num1 - num2)
        console.log(`total = ${total} (num1=> ${num1} - num2=> ${num2})`)
      subtracting = "no" // reset flag for continous operations
    } else if (dividing == "yes") {
      total = (num1 / num2)
        console.log(`total = ${total} (num1=> ${num1} / num2=> ${num2})`)
      dividing = "no" // reset flag for continous operations
    } else if (multiplying == "yes") {
      total = (num1 * num2)
        console.log(`total = ${total} (num1=> ${num1} * num2=> ${num2})`)
      multiplying = "no" // reset flag for continous operations
    }

    display.value = total
    console.log('total ' + total)

    num1 = total
    // num2 = null
    array = []
    decimalBtn.disabled = false

    setValueWasCalled = "no"
  }
}
