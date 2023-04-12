const btn = document.getElementById("button");
const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for (let i =0; i<6; i++){
        cone = cons +val[Math.floor(Math.random() * 16)];       //math.random value fixed hota hai =0 to 0.99
    }
    return cone;
};
console.log(randomColor());
function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
    btn.addEventListener("click",changeRandomColor);
}