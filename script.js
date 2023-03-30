
  //1st- program--------------------------------------------------
  console.log("1)-find maximum between two numbers.");
 function result1() {
  a =+ prompt("enter 1st number");
  b =+ prompt("enter 2nd number");
  var result1 = (a,b);
  if(result1 = a > b){
    console.log("result1 =",a, "is a maximum number than",b)
  }
  else{
    console.log("result1 =",b ,'is a maximum number than' , a)
  }
 }

//result1()

console.log("2)-For finding maximum b/w 3 num")

//2nd program----------------------------------------------------
function result2() {
  A =+ prompt("enter 1st num")
  B =+ prompt( "enter 2nd num")
  C =+ prompt("enter 3rd num")
  var result2 = (A,B,C)
  if(result2 = A > B , A > C ) {
    console.log("result2 =",A , " is maximum than ", B,"and" , C)
  }
  if(result2 = B > A, B > C){
    console.log("result2 =",B , " is maximum than ",A ,"and" , C);
  }
  else{
    console.log("result2 =",C , " is maximum than ", A,"and" , B);
  }
}

//result2()

//3rd-program-------------------------------------------------------
console.log('3)-check if a number is negative, positive or zero.');
function result3(){
  
  var result3 =+ prompt("enter a number")
  if(result3 == 0){
    console.log("result3 =", result3,"num is zero");
  }
  else if(result3 < 0){
    console.log("result3 =", result3,"num is negative");
  }
  else{
    console.log("result3 =", result3,"num is positive");
  }
}

//result3()

//4th-program--------------------------------------------------------------
console.log("4)-check whether a number is divisible by 5 and 11 or not")
function result4(){
  var result4 =+ prompt("enter a number")
  if(result4 % 5 == 0 && result4 % 11 == 0){
    console.log("result4 =",result4," is divisible by 5 and 11");
  }
  else{
    console.log("result4 =",result4," is not divisible by 5 and 11");
  }
}
//result4()

//5th-program------------------------------------------------
console.log("5)-check whether a number is even or odd");

function result5(){
  var result5 =+ prompt("enter number")
  if(result5 % 2 == 0){
    console.log("result5 =",result5,"is a even num")
  }
  else{
    console.log("result5 =",result5,"is a odd num");
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
console.log("16)-check if the triangle is equilateral, isosceles or scalene triangle");
var sideP =+ prompt("enter 1st side of triangle")
var sideQ =+ prompt("enter 2nd side of triangle")
var sideR =+ prompt("enter 3rd side of triangle")
if((sideP + sideQ > sideR) && (sideQ + sideR > sideP) && (sideP + sideR > sideQ)){
  function result16(){
    if(sideP == sideQ && sideQ == sideR){
      console.log("result16 = its a 'equiletral triangle'");
    }
    else if(sideP == sideQ || sideQ == sideR || sideP == sideR){
      console.log("result16 = its a 'isosceles triangle'");
    }
    else{
      console.log("result16 = its a 'scalene triangle'");
    }
  }
  //result16()
}
else{
  console.log("result16 = its not valid triangle");
}


//17th-program
console.log("17)-find all roots of a quadratic equation");