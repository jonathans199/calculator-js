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
let num1 = null
let num2 = null
let total = null

// Flags
let setValueWasCalled = "yes"
let adding = "yes"
let subtracting = "yes"
let dividing = "yes"
let multiplying = "yes"

// get values from HTML
function setValue(btnValue) {
  if (setValueWasCalled == "yes") {
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

      if (array.includes('.')) {
        decimalBtn.disabled = true
      }

      displaysValue = (display.value = array.join('')) //assign first number to number
      num2 = parseFloat(displaysValue)

      console.log('num2=>' + num2)
  }
}

// function reset(){
//   array = []
//   decimalBtn.disabled = false

//   if (num1 > 0) {
//     setValueWasCalled = "yes"
//   }
// }


addBtn.onclick = function(){
  array = []
  decimalBtn.disabled = false

  if (num1 > 0) {
    setValueWasCalled = "yes"
  }

  adding = "yes"
  console.log('adding')
}

// minusBtn.onclick = function(){
//   reset()
//   subtracting = "yes"
//   console.log('subtracting')
// }

// divideBtn.onclick = function(){
//   reset()
//   dividing = "yes"
//   console.log('dividing')
// }

// multiplyBtn.onclick = function(){
//   reset()
//   multiplying = "yes"
//   console.log('multiplying')
// }


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
  // reset()
  {
    if (adding == "yes") {
      total = (num1 + num2)
      console.log(`total = ${total} (num1=> ${num1} + num2=> ${num2})`)
    // } else if (subtracting == "yes") {
    //   total = (num1 - num2)
    //   console.log(`total = ${total} from ${num1} - ${num2}`)
    // } else if (dividing == "yes") {
    //   total = (num1 / num2)
    //   console.log(`total = ${total} from ${num1} / ${num2}`)
    // } else if (multiplying == "yes") {
    //   total = (num1 * num2)
    //   console.log(`total = ${total} from ${num1} * ${num2}`)
    }

    display.value = total
    console.log('total ' + total)

    // num1 = null
    // num2 = null
    array = []
    decimalBtn.disabled = false

    setValueWasCalled = "no"
  }
}




/*---- OPTION 1 ------*/
// // when addition btn is pressed
// function addition() {  
//   array = []
//   decimalBtn.disabled = false
//   adding == "yes"
  

//   console.log('adding')

//   if(num1 > 0){
//     setValueWasCalled == 'yes'
//   }
// }

// // when substraction btn is pressed
// function substraction(){ 
//    array = []
//    decimalBtn.disabled = false
//    subtracting = true

//   console.log('subtracting')

//    if (num1 > 0) {
//      setValueWasCalled = true
//    }
// }

// // when division btn is pressed
// function division(){ 
//    array = []
//    decimalBtn.disabled = false
//    dividing = true

//    console.log('dividing')

//    if (num1 > 0) {
//      setValueWasCalled = true
//    }
// }

// // when multiplication btn is pressed
// function multiplication(){ 
//    array = []
//    decimalBtn.disabled = false
//    multiplying = true

//    console.log('multiplying')

//    if (num1 > 0) {
//      setValueWasCalled = true
//    }
// }




// when equals btn is pressed

// function equals(){
//   if (adding === "yes" ){
//     total = (num1 + num2)
//       console.log(`total = ${total} from ${num1} + ${num2}`)
//   } else if (subtracting === "yes"){
//     total = (num1 - num2)
//       console.log(`total = ${total} from ${num1} - ${num2}`)
//   } else if (dividing === "yes"){
//     total = (num1 / num2)
//       console.log(`total = ${total} from ${num1} / ${num2}`)
//   } else if (multiplying === "yes"){
//     total = (num1 * num2)
//       console.log(`total = ${total} from ${num1} * ${num2}`)
//   } 

//   display.value = total
//   console.log('total ' + total)

//   num1 = null
//   num2 = null
//   array = []
//   decimalBtn.disabled = false

//   setValueWasCalled = false
// }

// when clr btn is pressed 

// function clr(){
//   display.value = 0
//   array = []
//   decimal.disabled = false
//   num1 = null
//   num2 = null
//   setValueWasCalled = false
//   total = 0
//   adding = false
//   subtracting = false
//   dividing = false
//   multiplying = false
  
//   console.log('clear')
// }