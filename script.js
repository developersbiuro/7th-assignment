
  //1st- program
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

//2nd program
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

//3rd-program
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

//4th-program
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

//5th-program
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

//6th-program
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

//7th-program
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

//8th-program
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

//9th-program
console.log("9)-check whether it is alphabet, digit or special character");
function result9(){
  var input = prompt("enter any character")
  if(input >= 'a' && input <= 'z' || input >= 'A' && input <= 'Z' )
}