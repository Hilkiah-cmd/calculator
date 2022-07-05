const screen = document.querySelector(".screen")
const switchOn = document.querySelector(".on")
const switchOff = document.querySelector(".off")
const screenDisplay = document.querySelector("#display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const del = document.querySelector(".del")
const ansDisplay = document.querySelector("#ans")
const equals = document.querySelector(".equals")

let ans;
let num1;
let num2 ;
let operator;

switchOn.addEventListener("click",function switchOn1(){
    ans = 0;
    ansDisplay.textContent = ans;
})
switchOff.addEventListener("click",function(){
    screenDisplay.innerHTML = '';
    ansDisplay.innerHTML = '';
    numbers.disabled = true;
    screenDisplay.disabled = true;
})
// Displays the numbers when clicked
function addNUmbers(){
    numbers.forEach(function(numbers){
        numbers.addEventListener('click',function(e){
            let value = e.target.value
            screenDisplay.textContent += value;
        })
    })
}
addNUmbers();
//Display the operators when clicked
function addOperator(){
    operators.forEach(function(operators){
        operators.addEventListener('click',function addOperator(e){
            operator = e.target.value;
            screenDisplay.textContent += operator;
        })
    })
}
addOperator();
function add(num1,num2){
    num1 = 2;
    num2 = 3;
    ans = num1 + num2;
    console.log(ans)
    return ans;
}
add()
function subtract(num1,num2){
    ans = num1 - num2;
    return ans;
}
function multiply(num1,num2){
    ans = num1 * num2;
    return ans;
}
function division(num1,num2){
    ans = num1 / num2;
    return ans;
}
function calculator(num1,num2){
    
}
equals.addEventListener("click",function(){
    ansDisplay.textContent = add();
})