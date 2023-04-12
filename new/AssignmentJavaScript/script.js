const decrementBtn = document.getElementById("decrementBtn");
decrementBtn.addEventListener("click",decrement);
function decrement (){
    const value = Number(decrementBtn.innerTex);
    if(value > 0){
        displayValue.innerTex = value -1;
    }
    else{
        alert("You are not Selected")
    }
}
const incrementBtn = document.getElementById("incrementBtn");
incrementBtn.addEventListener("click",increment);
function increment(){
    const digit = Number(incrementBtn.innerText);
    if(digit >= 10){
        increment.innerTex = digit +10;
    }
    else{
        alert("You are not Eligible")
    }
}
