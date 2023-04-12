const decrementbtn = document.getElementById("decrement");
const incrementbtn = document.getElementById("increment");
let count = document.getElementById("count");
const resetbtn = document.getElementById("reset");
let CountBtn = 0;

decrementbtn.addEventListener("click", function(){
    if(count>0){
        count.innerText = CountBtn;
        CountBtn--;
    }
    else{
        console.log("Negative Value is not Accepted");
    }
});
incrementbtn.addEventListener("click", function(){
    CountBtn++;
    count.innerText = CountBtn;
});
resetbtn.addEventListener("click", function(){
    CountBtn = 0;
    count.innerHTML = CountBtn;
});
