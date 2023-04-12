const displayValue = document.getElementById("displayValue");

// for after click increment button
const incrementBtn = document.getElementById("incrementBtn");
incrementBtn.addEventListener("click",hello);
function hello(){
    const value = Number(displayValue);
    if(value >= 10){
        displayValue.innerText = value -1;
    }
    else{
        alert("10+ values are not allowed");
    }
};
// for after click decrement button  
const decrementBtn = document.getElementById("decrementBtn");
decrementBtn.addEventListener("click",hey);
function hey(){
    const value = Number(displayValue);
    if(value > 0){
        displayValue.innerText = value -1;
    }
    else{
        alert("Negaive value not allowed");
    }
};
// Reset button
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", reset);
function reet (){
    displayValue.innerText = 0
}
