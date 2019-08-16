
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

// let display = document.getElementById('display')
// let num1 = null
// let array1 = []

// let btn = document.querySelector('button')

// console.log(document.querySelectorAll('#btn-list'))

// let btnItem = (document.querySelectorAll('#btn-list > button'))

// for(var i = 0; i < btnItem.lenght; i++){
//   btnItem[i].addEventListener("click", function(){

//     num1 = +this.value;
//     console.log (num1.value)
//   })
// }

// console.log(btnItem)
/*----------------- option 1 # ---------------*/

// var test =  document.querySelectorAll('.btn-number');

// // gets all the buttons elements
// test.forEach(function(userItem){
//   console.log(userItem.value) 
// });

/*------------------- end -------------------*/



/*----------------- option 2 - WORKING up to working clearing display ---------------*/

// let display = document.getElementById('display')
// let num1 = null
// let num2 = null

// let array = []

// function setValue(btnValue) {

//     //gets number from num btn pressed
//   number = btnValue.getAttribute('data-btn-number');

//     //push number from value into array => array
//   array.push(number);

//     //assign first number to num1
//   num1 = (display.value = array.join(''));
//   console.log(num1)
// }

// function addition(){
//   display.value = 0
//   console.log(num1)
// }

/*----------------- option 2.b - WORKING  ---------------*/

const display = document.getElementById('display')
let number = null
let array = []

let turn1 = false

let num1 = null
let num2 = null
let total = null


function setValue(btnValue) {

  num = btnValue.getAttribute('data-btn-number'); //gets number from num btn pressed

  array.push(num); //push number from value into array => array

  number = (display.value = array.join(''));  //assign first number to number
  console.log(number)

  turn1 = true
}

function addition() {

  if (number > 0 && turn1 == !false) {
    num1 = number  //let num1 be number
  }

  display.value = 0  //set display to 0  
  array = [] //empty the array 

  console.log('array & display cleared this is number1 ' + num1)

}


  // get total
// total = num1 + num2


/*----------------- option #3 - Get value into array - FAILED ---------------*/

// function setValue(number){
//   num1 = number
//   console.log(num1)
// }

// function setValue(x){
//   console.log(x)

//         //gets number from num btn pressed
//       // number = getAttribute('value')
//       // console.log(x)

//         //push number from value into array => array
//       // array1.push(number);

//         //assign first number to num1
//       // num1 = (display.value = array1.join(''));
// }


/*------------------- end -------------------*/



/*----------------- option #4 ---------------*/
// var num = null;
// var ele = document.querySelectorAll(".btn-list > button.btn-number");
// console.log(ele)

// for (var i = 0; i < ele.length; i++){
//   ele[i].addEventListener("click", function(){
//     num = +this.innerHTML;
//     console.log(num);
//   })
// }

// from here https://stackoverflow.com/questions/10941606/how-to-get-the-value-of-selected-button-in-twitter-bootstrap-button-group

/*------------------- end -------------------*/




// btn.onclick = function(){

//   console.log(btn.value)

//   // array1.push(btn.value)

// }



// console.log(display)

// btn.onclick = function(){

// }





// function addition(){

  //clears display
  // display = 0;

  // add num1 + num2
  // result = num1 + num2
  // console.log(result)

  // number = btnValue.getAttribute('data-btn-number');

  // arrayNum2.push(numbeer)
  // operator.getAttribute('data-btn-operation')
// }

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


