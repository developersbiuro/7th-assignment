
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
  var p = parseInt( document.getElementById("14th-a").value )
  var q = parseInt( document.getElementById("14th-b").value )
  var r = parseInt( document.getElementById("14th-c").value )
  var p14 = document.getElementById("p-14")
  if((p + q + r) == 180){
    p14.innerHTML = "Result is:  Its a Valid Triangle";
  }
  else{
    p14.innerHTML = "Result is:  Its a Invalid Triangle";
  }
}
//result14()

//15th-program-----------------------------------------------------
console.log("15)-input all sides of a triangle and check whether triangle is valid or not");
function result15(){
  var side1 = parseInt(document.getElementById("15th-a").value) 
  var side2 = parseInt(document.getElementById("15th-a").value)
  var side3 = parseInt(document.getElementById("15th-a").value)
  var p15 = document.getElementById("p-15")
  if((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)){
    p15.innerHTML = "Result is: These sides form a Valid Triangle";
  }
  else{
    p15.innerHTML = "Result is: These sides form a Invalid Triangle";
  }
}
//result15()

//16th-program----------------------------------------------------



function result16() {

  var sideP = parseInt(document.getElementById("16th-a").value)
  var sideQ = parseInt(document.getElementById("16th-b").value)
  var sideR = parseInt(document.getElementById("16th-c").value)
  var p16 = document.getElementById("p-16")
  if((sideP + sideQ > sideR) && (sideQ + sideR > sideP) && (sideP + sideR > sideQ)){
    if(sideP == sideQ && sideQ == sideR){
      p16.innerHTML = "Result is: Its a 'Equiletral Triangle'";
    }
    else if(sideP == sideQ || sideQ == sideR || sideP == sideR){
      p16.innerHTML = "Result is: Its a 'Isosceles Triangle'";
    }
    else{
      p16.innerHTML = "Result is: Its a 'Scalene Triangle'";
    }
  }
  else{
    p16.innerHTML = "Result is: Its a Invalid triangle";
  }   
}
//result16()



//17th-program
console.log("17)-find all roots of a quadratic equation");
function result17(){
  var z = parseInt(document.getElementById("17th-a").value)
  var x = parseInt(document.getElementById("17th-b").value)
  var v = parseInt(document.getElementById("17th-c").value)
  var p17 = document.getElementById("p-17")
  var disc = (x*x) - 4* (z * v)
  if(disc == 0){
    p17.innerHTML = "Result is: 'The roots are equal and real'";
  }
  else if(disc > 0){
    p17.innerHTML = "Result is: 'The roots are unequal and rstional'";
  }
  else{
    p17.innerHTML = "Result is: 'The roots are unequal and irrational'";
  }
}
//result17()


//18th-program
console.log("18)-calculate profit or loss");
function result18(){
  var cost = parseInt(document.getElementById("18th-a").value)
  var earn = parseInt(document.getElementById("18th-b").value)
  var p18 = document.getElementById("p-18")
  var profitOrLoss = earn - cost
  if(profitOrLoss > 0){
    p18.innerHTML = "Result is: You earn profit ";
  }
  else if(profitOrLoss < 0){
    p18.innerHTML = "Result is: You made loss ";
  }
  else{
    p18.innerHTML = "Result is: You neither earn profit or loss ";
  }
}
//result18()

//19th-program
function result19(){
  var math = parseInt(document.getElementById("19th-a").value);
  var phys = parseInt(document.getElementById("19th-b").value);
  var chem = parseInt(document.getElementById("19th-c").value);
  var bio  = parseInt(document.getElementById("19th-d").value);
  var comp = parseInt(document.getElementById("19th-e").value);
  var p19  = document.getElementById("p-19");
  var sum = (math + phys + chem + bio + comp) ;
  var percent = (sum / 500) * 100 ;
  if(percent >= 90){
    p19.innerHTML = "Result is: These marks are of A grade";
  }
  else if(percent >= 80){
    p19.innerHTML = "Result is: These marks are of B grade";
  }
  else if(percent >= 70){
    p19.innerHTML = "Result is: These marks are of C grade";
  }
  else if(percent >= 60){
    p19.innerHTML = "Result is: These marks are of D grade";
  }
  else if(percent >= 40){
    p19.innerHTML = "Result is: These marks are of E grade";
  }
  else{
    p19.innerHTML = "Result is: These marks are of F grade"
  }
}
