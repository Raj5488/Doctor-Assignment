// const powerTwo = (n)=>{
//     return n**2
// }
// function powerCube(powerTwo,n){
//     return powerTwo(n)*2
// }
// console.log(powerCube(powerTwo,3));


// function sayHello(){
//     return()=>{
//         console.log("Jitu raj sharma");
//     }
// }
// let guessValue = sayHello()
// guessValue ()
// console.log(guessValue);


// const higherOrder = n =>{
//     const onefun = m =>{
//         const twoFun =p =>{
//             return m+n+p
//         }
//         return twoFun
//     }
//     return onefun
// }
// console.log(higherOrder(2)(43)(354));



// const names = ["jitu kumar", "suryakant", "ritu kumar", "sharma", "Mituraj sharma", "Kundan kumar"];
// names.forEach((element, index, names)=>{
//     console.log(element, index, names);
// })

// names.forEach((el)=>{
//     console.log(el.toUpperCase());
// })



// const digit = ["jitu raj", "Mitu raj sharma" , "raj", "ramesh" ,"jiturajsharma"]
//     // digit.forEach((n)=>{

//     //     console.log(n.toUpperCase(), digit[0]);
//     // })
//     const thisisFilter = digit.filter((hello)=>{
//             hello.endsWith("raj")
//             console.log(hello);
//     })

//     const carBill = [20, 30, 40,50]
//     const someOfBill = carBill.reduce((prev, curr)=>prev + curr);
//     console.log(someOfBill);

    const gameScore =[200,201,300,400,500,600,"jitu"]
    // chek this digit which typ of value
const gameScorechek = gameScore.every((v)=>typeof v==="number")
console.log(gameScorechek);




console.log(gameScore);
const above = gameScore.find((score)=>
    score>200)
console.log(above);