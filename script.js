
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
  var A =+ document.getElementById("2nd-a")
  var B =+ document.getElementById("2nd-b")
  var C =+ document.getElementById("2nd-c")
  var p2 = document.getElementById("p-2")
  if( A.value > B.value , A.value > C.value ){
    p2.innerHTML = "Result is: 1st number is maximum"
  }
  if(result2 = B.value > A.value, B.value> C.value){
    p2.innerHTML = "Result is: 2nd number is maximum"
  }
  else{
    p2.innerHTML = "Result is: 3rd number is maximum"
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
  var result5 =+ document.getElementById("5th-a") 
  var p5 = document.getElementById("p-5")
  if(result5.value % 2 == 0){
    p5.innerHTML = "this is a even num"
  }
  else{
    p5.innerHTML = "this is a odd num"
  }
}
//result5()

//6th-program-------------------------------------------------
console.log('6)-check whether a year is leap year or not');
function result6(){
  var result6 =+ prompt("enter a year")
  if(result6 % 4 == 0){
    console.log("result6 =",result6," is a leap year");
  }
  else{
    console.log("result6 =",result6, " is not a leap year");
  }
}
//result6()

//7th-program------------------------------------------------------
console.log("7)-check whether a character is alphabet or not");
function result7(){
  var character = prompt("enter a character");
  if(character >='a' && character <= 'z'){
    console.log("result7 =",character,"is a alphabet");
  }
  else{
    console.log("result7 =",character,"is not a alphabet");
  }
}
//result7()

//8th-program------------------------------------------------------
console.log("8)-check whether character is vowel or consonant.");
function result8(){
  var letter = prompt("enter a alphabet")
  if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
    console.log("result8 =",letter, "is a vowel");
  }
  else{
    console.log("result8 =",letter, "is a consonant");
  }
}
//result8()

//9th-program-------------------------------------------------
console.log("9)-check whether it is alphabet, digit or special character");
function result9(){
  var input = prompt("enter any character")
  if(input >= 'a' && input <= 'z' || input >= 'A' && input <= 'Z') {
    console.log("result9 =",input, "is a alphabet");
  }
  else if(input >= 0 && input <= 9){
    console.log("result9 =",input, "is a digit");
  }
  else{
    console.log("result9 =",input, "is a special character");
  }
}
//result9()

//10th-program----------------------------------------------
console.log("10)-check whether a character is uppercase or lowercase alphabet");
function result10(){
  var alphabet = prompt("enter a alphabet")
  if(alphabet >= 'a' && alphabet <= 'z'){
    console.log("result10 =",alphabet, "is a lowercase alphabet");
  }
  else if(alphabet >= 'A' && alphabet <= 'Z'){
    console.log("result10 =",alphabet, "is a uppercase alphabet");
  }
}
//result10()

//11th-program-------------------------------------------------
console.log("11)-input week number and print week day");
function result11(){
  var weekday = prompt("enter a weekday number");
  if(weekday == 1){
    console.log("result11 = its a MONDAY");
  }
  else if( weekday == 2){
    console.log("result11 = its a TUESDAY");
  }
  else if( weekday == 3){
    console.log("result11 = its a WEDNESDAY");
  }
  else if( weekday == 4){
    console.log("result11 = its a THURSDAY");
  }
  else if( weekday == 5){
    console.log("result11 = its a FRIDAY");
  }
  else if( weekday == 6){
    console.log("result11 = its a SATURDAY");
  }
  else if( weekday == 7){
    console.log("result11 = its a SUNDAY");
  }
  else{
    console.log("invalid Week Number");
  }
}
//result11()


//12th-program---------------------------------------------------
console.log("12)-input month num and print Num of days in that month");
function result12(){
  var monthNum = prompt("enter a month number")
  if(monthNum == 1){
    console.log("result12 = There is 31 days in 'January'");
  }
  else if(monthNum == 2){
    console.log("result12 = There is 28 days in 'February'");
  }
  else if(monthNum == 3){
    console.log("result12 = There is 31 days in 'March'");
  }
  else if(monthNum == 4){
    console.log("result12 = There is 30 days in 'April'");
  }
  else if(monthNum == 5){
    console.log("result12 = There is 31 days in 'May'");
  }
  else if(monthNum == 6){
    console.log("result12 = There is 30 days in 'June'");
  }
  else if(monthNum == 7){
    console.log("result12 = There is 31 days in 'July'");
  }
  else if(monthNum == 8){
    console.log("result12 = There is 31 days in 'August'");
  }
  else if(monthNum == 9){
    console.log("result12 = There is 30 days in 'September'");
  }
  else if(monthNum == 10){
    console.log("result12 = There is 31 days in 'October'");
  }
  else if(monthNum == 11){
    console.log("result12 = There is 30 days in 'November'");
  }
  else if(monthNum == 12){
    console.log("result12 = There is 31 days in 'December'");
  }
  else{
    console.log("result12 = Invalid Month number");
  }
}
//result12()

//13th-program-------------------------------------------------
console.log("13)- count total number of notes in given amount");
console.log("result = I can't do this");

//14th-program-----------------------------------------------
console.log("14)-input angles of a triangle and check whether triangle is valid or not");

function result14(){
  var p =+ prompt("enter 1st angle of triangle")
  var q =+ prompt("enter 2nd angle of triangle")
  var r =+ prompt("enter 3rd angle of triangle")
  if(p + q + r == 180){
    console.log("result14 = its a Valid Triangle");
  }
  else{
    console.log("result14 = its a invalid Triangle");
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
