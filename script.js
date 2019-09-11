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
let getNumBtnValue = false
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

      if (!getNumBtnValue) {
        num1 = (display.value = parseFloat(array.join('')))
        isDecimalPresent() 
        console.log(num1)

      } else {
        num2 = (display.value = parseFloat(array.join(''))) 
        isDecimalPresent()
        console.log(num2)
      } 
  })
}

decimalBtn.addEventListener('click' , function(){
  array.push('.')
  isDecimalPresent()
})

function reset(){
  array = []
  decimalBtn.disabled = false

  if (num1 > 0) {
    getNumBtnValue = true
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
  operation = "ADDING"
  reset()

  if(num2 != null){
    total = num1 + num2
    resetSecond()
  } 
}

minusBtn.onclick = () => {
  operation = "SUBSTRACTING"
  reset()

  if (num2 != null) {
    total = num1 - num2
    resetSecond()
  }
}

multiplyBtn.onclick = () => {
  operation = "MULTIPLYING"
  reset()

  if (num2 != null) {
    total = num1 * num2
    resetSecond()
  }
}

divideBtn.onclick = () => {
  operation = "DIVIDING"
  reset()

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
  getNumBtnValue = false
  total = 0
  operation = null

  console.log('clear')
}

equalsBtn.onclick = function(){
  {
    if (operation == 'ADDING') {
      total = (num1 + num2)
        console.log(`total = ${total} (num1=> ${num1} + num2=> ${num2})`)
        operation = null
    } else if (operation == 'SUBSTRACTING') {
      total = (num1 - num2)
        console.log(`total = ${total} (num1=> ${num1} - num2=> ${num2})`)
        operation = null
    } else if (operation == 'DIVIDING') {
      total = (num1 / num2)
        console.log(`total = ${total} (num1=> ${num1} / num2=> ${num2})`)
        operation = null
    } else if (operation == 'MULTIPLYING') {
      total = (num1 * num2)
        console.log(`total = ${total} (num1=> ${num1} * num2=> ${num2})`)
        operation = null
    }

    display.value = total
    console.log('total ' + total)

    num1 = total
    num2 = null
    array = []
    decimalBtn.disabled = false
    getNumBtnValue = false
  }
}