const resetBtn = document.getElementById("resetBtn");
    const randomColor = () =>{
        let var1 = "0123456789ABCDEF";
        let cons = "#";
        for(let i =0; i<6; i++){
            constant = cons + var1[Math.floor(Math.random()*16)];
    }
    return constant;    
}
console.log(randomColor());
function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
    resetBtn.addEventListener("click", changeRandomColor);
}
