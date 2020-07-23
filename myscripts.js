var num1 =0;
var num2 =0;
var signChoice = "";
function addNum(num){
 document.getElementById("screen").value = document.getElementById("screen").value + num;
 }
function setSign(sign){
 signChoice = sign;
 num1 = document.getElementById("screen").value;
 document.getElementById("screen").value ="";
 }
function equalPressed() {
 num2= document.getElementById("screen").value;
 if (signChoice =="+") {
 document.getElementById("screen").value = Number(num1)+ Number(num2);
 }
 else if (signChoice == "-") {
   document.getElementById("screen").value = Number(num1) - Number(num2);
 }
 else if (signChoice == "x") {
   document.getElementById("screen").value = Number(num1)*Number(num2);
 }
 else if (signChoice == "/") {
   document.getElementById("screen").value = Number(num1)/Number(num2);
 }
 }
 function myFunction() {
   location.reload();
 }

 function percentFunction() {
   var num1 = document.getElementById("screen").value;
   document.getElementById("screen").value = Number(num1)/100;
 }

function piFunction () {
  var y = Math.PI;
  var num1 = document.getElementById("screen").value;
  document.getElementById("screen").value = Number(num1)*y;
}

function squarerootFunction() {
  var num1 = document.getElementById("screen").value;
  document.getElementById("screen").value = Math.sqrt(Number(num1));
}

function exponentFunction() {
  var num1 = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.pow(Number(num1),2);
}

function exponentFunction2() {
  var num1 = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.pow(Number(num1),3);
}

function exponentFunction10() {
  var num1 = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.pow(10,Number(num1)) ;
}

function bracketFunction() {
  var num1 = document.getElementById("screen").value;
    document.getElementById("screen").value = "("+ Number(num1);
}

function bracketFunction2() {
  var num1 = document.getElementById("screen").value;
    document.getElementById("screen").value = Number(num1)+")";
}
