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
let getNumBtnValue = "no"
let operation = null

// Decimal check
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

      if (getNumBtnValue == "no") {
        num1 = (display.value = parseFloat(array.join('')))
        isDecimalPresent() 
        console.log(num1)

      } else if (getNumBtnValue == "yes"){
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
    getNumBtnValue = "yes"
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
  operation = "ADD"

  if(num2 != null){
    total = num1 + num2
    resetSecond()
  } 
}

minusBtn.onclick = () => {
  reset('subtracting')
  operation = "SUBSTRACTING"

  if (num2 != null) {
    total = num1 - num2
    resetSecond()
  }
}

multiplyBtn.onclick = () => {
  operation = "MULTIPLYING"
  reset('multiplying')
  multiplying = "yes"

  if (num2 != null) {
    total = num1 * num2
    resetSecond()
  }
}

divideBtn.onclick = () => {
  operation = "DIVIDING"
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
  getNumBtnValue = "no"
  total = 0
  operation = null

  console.log('clear')
}

equalsBtn.onclick = function(){
  {
    if (operation == 'ADD') {
      total = (num1 + num2)
      operation = null  
      console.log(`total = ${total} (num1=> ${num1} + num2=> ${num2})`)
    } else if (operation == 'SUBTRACT') {
      total = (num1 - num2)
      operation = null  
      console.log(`total = ${total} (num1=> ${num1} - num2=> ${num2})`)
    } else if (operation == 'DIVIDE') {
      total = (num1 / num2)
      operation = null  
      console.log(`total = ${total} (num1=> ${num1} / num2=> ${num2})`)
    } else if (operation == 'MULTIPLYING') {
      total = (num1 * num2)
      operation = null  
      console.log(`total = ${total} (num1=> ${num1} * num2=> ${num2})`)
    }

    display.value = total
    console.log('total ' + total)

    num1 = total
    num2 = null
    array = []
    decimalBtn.disabled = false

    getNumBtnValue = "no"
  }
}