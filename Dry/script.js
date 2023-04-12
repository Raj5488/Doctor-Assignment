const decrementbtn = document.getElementById("decrement");
const incrementbtn = document.getAnimations("increment");
const resetbtn = document.getElementById("reset");
const displayValue = document.getElementById("count");

// for Decrement button click
decrementbtn.addEventListener("click", function(){
    const value = Number(displayValue.innerText);
    if(value > 0){
        displayValue.innerText = value -1;
    }
    else{
        alert("Negative value is not allowed")
    }
});


// for increment Button click
incrementbtn.addEventListener("click",function(){
    let countNo = 0;
    countNo++;
    displayValue.innerText = countNo
})
