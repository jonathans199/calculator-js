
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

let display = document.getElementById('display')
let num1 = null
let arrayNum1 = []
let arrayNum2 = []

function setValue(btnValue){

        //gets number from num btn pressed
      number = btnValue.getAttribute('data-btn-number');

        //push number from value into array => array
      arrayNum1.push(number);

        //assign first number to num1
      num1 = (display.value = arrayNum1.join(''));
  console.log(num1)
}

function addition(){

  //clears display
  // display.reset

  // add num1 + num2
  // result = num1 + num2
  // console.log(result)

  // number = btnValue.getAttribute('data-btn-number');

  // arrayNum2.push(numbeer)
  
  // operator.getAttribute('data-btn-operation')
}

// if (document.getElementById('btn1').click() ){
//   inputField.value = 1
// }


// var inputField = (document.getElementById('inputField')).value = num1

// function memNumb1(){
//   let inputField = (document.getElementById('inputField')).value = 1
//   num1 = 1
// }

// function memNumb2(){
//   let inputField = (document.getElementById('inputField')).value = 2
//   num2 = 2
// }

// // dresult = num1 + num2 


// // function num1Function() {
// //   let result = (document.getElementById('inputField'))

// //     result.value = 1
// // }

// // function num2Function() {
// //   let result = (document.getElementById('inputField'))

// //     result.value = 2
// // }










