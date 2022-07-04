const screen = document.querySelector(".screen")
const switchOn = document.querySelector(".on")
const switchOff = document.querySelector(".off")
const screenDisplay = document.querySelector("#display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")

switchOn.addEventListener("click",function(){
    screenDisplay.textContent = 0;
})

switchOff.addEventListener("click",function(){
    screenDisplay.innerHTML = '';
})

// Displays the numbers when clicked
numbers.forEach(function(numbers){
    numbers.addEventListener('click',function(e){
        let value = e.target.value;
        // screenDisplay.textContent = '';
        screenDisplay.textContent += value;
    })
});
operators.forEach(function(operator){
    operators.addEventListener('click',function(e){
        screenDisplay.textContent += e.target.value;
    })
})
