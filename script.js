
  //1st- program--------------------------------------------------
  
 function result1() {
  a = document.getElementById("1st-a");
  b = document.getElementById("1st-b")
  // var result1 = (a.value , b.value);
  var pera1 = document.getElementById("p-1")
  if( a.value > b.value){
    pera1.innerHTML = "Result is: 1st number is maximum "
  }
  else if(b.value > a.value){
    pera1.innerHTML = "Result is: 2nd number is maximum "
  }
  else{
    pera1.innerHTML = "Result is: both are equal "
  }
 }

//result1()


//2nd program----------------------------------------------------
function result2() {
  var A = document.getElementById("2nd-a")
  var B = document.getElementById("2nd-b")
  var C = document.getElementById("2nd-c")
  var p2 = document.getElementById("p-2")
  if(A.value > B.value && A.value > C.value ){
    p2.innerHTML = "Result is: 1st number is maximum"
  }
  else if(B.value > A.value && B.value> C.value){
    p2.innerHTML = "Result is: 2nd number is maximum"
  }
  else if (C.value > A.value && C.value > B.value ) {
    p2.innerHTML = "Result is: 3rd number is maximum"
  }
  else{
    p2.innerHTML = "Result is: all are equal"
  }
}

//result2()

//3rd-program-------------------------------------------------------
function result3(){
  
  var result3 = document.getElementById("3rd-a")
  var p3 = document.getElementById("p-3")
  if(result3.value > 0){
    p3.innerHTML = "Result is: num is positive"
  }
  else if(result3.value < 0){
    p3.innerHTML = "Result is: num is negative"
  }
  else{
    p3.innerHTML = "Result is: num is zero"
  }
}

//result3()

//4th-program--------------------------------------------------------------
function result4(){
  var result4 = document.getElementById("4th-a")
  var p4 = document.getElementById("p-4")
  if(result4.value % 5 == 0 && result4.value % 11 == 0){
    p4.innerHTML = "Result is: This num is divisible by 5 and 11"
  }
  else{
    p4.innerHTML = "Result is: This num is not divisible by 5 and 11"
  }
}
//result4()

//5th-program------------------------------------------------
function result5(){
  var result5 = document.getElementById("5th-a") 
  var p5 = document.getElementById("p-5")
  if(result5.value % 2 == 0){
    p5.innerHTML = "Result is: this is a even num"
  }
  else{
    p5.innerHTML = "Result is: this is a odd num"
  }
}
//result5()

//6th-program-------------------------------------------------

function result6(){
  var result6 = document.getElementById("6th-a")
  var p6 = document.getElementById("p-6")
  if(result6.value % 4 == 0){
    p6.innerHTML = "Result is: This is a leap year";
  }
  else{
    p6.innerHTML = "Result is: This is not a leap year";
  }
}
//result6()

//7th-program------------------------------------------------------

function result7(){
  var character = document.getElementById("7th-a");
  var p7 = document.getElementById("p-7")
  if(character.value >= 'a' && character.value <= 'z'){
    p7.innerHTML = "Result is: This is a Alphabet";
  }
  else{
    p7.innerHTML = "Result is: This is not a Alphabet";
  }
}
//result7()

//8th-program------------------------------------------------------

function result8(){
  var letter = document.getElementById("8th-a")
  var p8 = document.getElementById("p-8")
  if(letter.value == 'a' || letter.value == 'e' || letter.value == 'i' || letter.value == 'o' || letter.value == 'u'){
    p8.innerHTML = "Result is: This is a Vowel Alphabet"
  }
  else{
    p8.innerHTML = "Result is: This is a Consonant Alphabet"
  }
}
//result8()

//9th-program-------------------------------------------------
;
function result9(){
  var input = document.getElementById("9th-a")
  var p9 = document.getElementById("p-9")
  if((input.value >= 'a' && input.value <= 'z') || (input.value >= 'A' && input.value <= 'Z')) {
    p9.innerHTML = "Result is : This is a Alphabet";
  }
  else if(input.value >= 0 && input.value <= 9){
    p9.innerHTML = "Result is : This is a Digit";
  }
  else{
    p9.innerHTML = "Result is : This is a Special Character";
  }
}
//result9()

//10th-program----------------------------------------------

function result10(){
  var alphabet = document.getElementById("10th-a")
  var p10 = document.getElementById("p-10")
  if(alphabet.value >= 'a' && alphabet.value <= 'z'){
    p10.innerHTML = "Result is: This is a lowercase Alphabet";
  }
  else if(alphabet.value >= 'A' && alphabet.value <= 'Z'){
    p10.innerHTML = "Result is: This is a Uppercase Alphabet";
  }
}
//result10()

//11th-program-------------------------------------------------

function result11(){
  var weekday = document.getElementById("11th-a");
  var p11 = document.getElementById("p-11")
  if(weekday.value == 1){
    p11.innerHTML = "Result is: Its a Monday";
  }
  else if( weekday.value == 2){
    p11.innerHTML = "Result is: Its a Tuesday";
  }
  else if( weekday.value == 3){
    p11.innerHTML = "Result is: Its a Wednesday";
  }
  else if( weekday.value == 4){
    p11.innerHTML = "Result is: Its a Thursday";
  }
  else if( weekday.value == 5){
    p11.innerHTML = "Result is: Its a Friday";
  }
  else if( weekday.value == 6){
    p11.innerHTML = "Result is: Its a Saturday";
  }
  else if( weekday.value == 7){
    p11.innerHTML = "Result is: Its a Sunday";
  }
  else{
    p11.innerHTML = "Result is: invalid week number";
  }
}
//result11()


//12th-program---------------------------------------------------

function result12(){
  var monthNum = document.getElementById("12th-a")
  var p12 = document.getElementById("p-12")
  if(monthNum.value == 1){
    p12.innerHTML = "Result is: There is 31 days in 'January'";
  }
  else if(monthNum.value == 2){
    p12.innerHTML = "Result is: There is 28 days in 'Feburary'";
  }
  else if(monthNum.value == 3){
    p12.innerHTML = "Result is: There is 31 days in 'March'";
  }
  else if(monthNum.value == 4){
    p12.innerHTML = "Result is: There is 30 days in 'April'";
  }
  else if(monthNum.value == 5){
    p12.innerHTML = "Result is: There is 31 days in 'May'";
  }
  else if(monthNum.value == 6){
    p12.innerHTML = "Result is: There is 30 days in 'June'";
  }
  else if(monthNum.value == 7){
    p12.innerHTML = "Result is: There is 31 days in 'July'";
  }
  else if(monthNum.value == 8){
    p12.innerHTML = "Result is: There is 31 days in 'August'";
  }
  else if(monthNum.value == 9){
    p12.innerHTML = "Result is: There is 30 days in 'September'";
  }
  else if(monthNum.value == 10){
    p12.innerHTML = "Result is: There is 31 days in 'October'";
  }
  else if(monthNum.value == 11){
    p12.innerHTML = "Result is: There is 30 days in 'November'";
  }
  else if(monthNum.value == 12){
    p12.innerHTML = "Result is: There is 31 days in 'December'";
  }
  else{
    p12.innerHTML = "Result is: Invalid Month number";
  }
}
//result12()

//13th-program-------------------------------------------------
console.log("13)- count total number of notes in given amount");
console.log("result = I can't do this");

//14th-program-----------------------------------------------


function result14(){
  var p = document.getElementById("14th-a")
  var q = document.getElementById("14th-b")
  var r = document.getElementById("14th-c")
  var p14 = document.getElementById("p-14")
  if(p.value + q.value + r.value == 180){
    p14.innerHTML = "Result is: Its a Valid Triangle";
  }
  else{
    p14.innerHTML = "Result is: Its a Invalid Triangle";
  }
}
//result14()

//15th-program-----------------------------------------------------
console.log("15)-input all sides of a triangle and check whether triangle is valid or not");
function result15(){
  var side1 =+ prompt("enter 1st side of triangle")
  var side2 =+ prompt("enter 2nd side of triangle")
  var side3 =+ prompt("enter 3rd side of triangle")
  if((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)){
    console.log("result15 = sides form a valid Triangle");
  }
  else{
    console.log("result15 = sides not form valid triangle");
  }
}
//result15()

//16th-program----------------------------------------------------
// console.log("16)-check if the triangle is equilateral, isosceles or scalene triangle");
// var sideP =+ prompt("enter 1st side of triangle")
// var sideQ =+ prompt("enter 2nd side of triangle")
// var sideR =+ prompt("enter 3rd side of triangle")
// if((sideP + sideQ > sideR) && (sideQ + sideR > sideP) && (sideP + sideR > sideQ)){
//   function result16(){
//     if(sideP == sideQ && sideQ == sideR){
//       console.log("result16 = its a 'equiletral triangle'");
//     }
//     else if(sideP == sideQ || sideQ == sideR || sideP == sideR){
//       console.log("result16 = its a 'isosceles triangle'");
//     }
//     else{
//       console.log("result16 = its a 'scalene triangle'");
//     }
//   }
//   //result16()
// }
// else{
//   console.log("result16 = its  Invalid triangle");
// }


//17th-program
console.log("17)-find all roots of a quadratic equation");
function result17(){
  var z =+ prompt("enter x^2 coefficent")
  var x =+ prompt("enter x coefficent")
  var v =+ prompt("enter constant value")
  var disc =+ (x*x) - 4* (z * v)
  if(disc == 0){
    console.log("result17 = 'roots are equal and real'");
  }
  else if(disc > 0){
    console.log("result17 = 'the roots are rational and unequal ");
  }
  else{
    console.log("result17 = 'the roots are irrational and unequal");
  }
}
//result17()


//18th-program
console.log("18)-calculate profit or loss");
function result18(){
  var cost =+ prompt("enter cost price in rupees")
  var earn =+ prompt("enter earn price in rupees")
  var profitOrLoss = earn - cost
  if(profitOrLoss > 0){
    console.log("result18 = you earn profit of", profitOrLoss ,"Rs/-");
  }
  else if(profitOrLoss < 0){
    console.log("result18 = you made a loss of", -profitOrLoss,"Rs/-");
  }
  else{
    console.log("result18 = you neither made loss nor profit");
  }
}
//result18()
