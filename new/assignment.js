// getting the html Element
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");
// for decrement button click
decrementBtn.addEventListener("click",() => {
    const value = Number(displayValue.innerText);
    if("value > 0"){
        displayValue.innerText = value -1;
    }
    else{
        alert("negative value is not allowed");
    }
});

// for increment button click
incrementBtn.addEventListener("click",()=>{
    const value= Number(displayValue.innerText);
    if(value >= 10){
        displayValue.innerText = value +1;
    }
    else{
        alert("10+ values are not allowed"); 
    }
});
// for reset button click
resetBtn.addEventListener("click",()=> {
    displayValue.innerText = 0;
})