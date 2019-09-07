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

let display = (document.getElementById('display'))
// let displaysValue = null
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
let operationOneRan = "no"

let adding = "no"
let subtracting = "no"
let dividing = "no"
let multiplying = "no"

function isDecimalPresent(){
  if (array.includes('.')) {
    decimalBtn.disabled = true
  } 
}

// get values from HTML
const numBtn = document.querySelectorAll('.btn-number')

for (let i = 0; i < numBtn.length; i++) {
  const btnElement = numBtn[i];

    btnElement.addEventListener('click', function(){
      array.push(btnElement.value)

      if (operationOneRan == "no") {
        num1 = (display.value = parseFloat(array.join('')))
        isDecimalPresent() 
        console.log(num1)

      } else if (operationOneRan == "yes"){
        num2 = (display.value = parseFloat(array.join(''))) 
        isDecimalPresent()
        console.log(num2)
      } 
  })
}


// =========== ANDY'S solution ========== //
// numBtn.forEach(x => {
//   x.onclick = function (e) {
//     // console.log(e.target.tagName)
//     console.log(e.target.tagName)
    
//     setValue(e.target.value)
//   }
// })


function reset(){
  array = []
  decimalBtn.disabled = false

  if (num1 > 0) {
    operationOneRan = "yes"
  }
}

function resetSecond(){
  display.value = total
  num1 = total
  num2 = null
  decimalBtn.disabled = false
  console.log(total)
}

addBtn.onclick = () => {
  reset('adding')
  adding = "yes"

  if(num2 != null){
    total = num1 + num2
    resetSecond()
  } 
}

minusBtn.onclick = () => {
  reset('subtracting')
  subtracting = "yes"

  if (num2 != null) {
    total = num1 - num2
    resetSecond()
  }
}

multiplyBtn.onclick = () => {
  reset('multiplying')
  multiplying = "yes"

  if (num2 != null) {
    total = num1 * num2
    resetSecond()
  }
}

divideBtn.onclick = () => {
  reset('dividing')
  dividing = "yes"

  if (num2 != null) {
    total = num1 / num2
    resetSecond()
  }
}

clearBtn.onclick = function(){
  display.value = 0
  array = []
  decimalBtn.disabled = false
  num1 = null
  num2 = null
  operationOneRan = "no"
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
    num2 = null
    array = []
    decimalBtn.disabled = false

    operationOneRan = "no"
  }
}