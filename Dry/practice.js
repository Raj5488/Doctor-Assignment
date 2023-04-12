// //         // Basic syntext of function
// //         function functionName(){
// //                 console.log("Hi There");
// //                 console.log("Hello");
// //         }

// //         functionName();

// //         //  how can i take inpute in function
// //     function sqr(x){
// //         return x*x;
// //         }
// //         let a= sqr(5);
// //         console.log(a);

// //         // function without a parametter and return
// //         function functionName(){
// //                 console.log("hello there");
// //         }

// //         functionName();
// //         functionName();
// //         functionName();

        


// //         function passMessage(){
// //                 return "Hello there i am jitu raj sharma"
// //         }
// //         let message=passMessage();
// //         console.log(message);

// //         let Newmassage= message+"Good Morning"
// //         console.log(Newmassage);



// //         // Function with a parameter
// // // Parametter ek variable hai jo funciton ko definiation k time ham declare karte hai argument tab u declare karte hai jab ujuctio call krte hai time 

// //         // Function with One parameter
// //         function displayMessge(messageToBeDisplay){
// //                 console.log(messageToBeDisplay);
// //         }



// //         displayMessge("helloo i'm here to see you");
// //         displayMessge("JITU RAJ SHARMA");

// //                 const sqr = (x) => x*x;
// //                 const value = (x,y)=> x+y;


// //         let hello=sqr(5);
// //         console.log(hello);

        










// // Array is a linera data Structure then this reason sequence access thsi is a hetrogeneous 
// // Ccc, jhava me yah monogenious hota hai kewal time par ek type is data store kar skti hai jaise number ya strng only 
// // [] this is a symbol of array pair of squire h hamajh jta hia array in java script me koi v value dal skte hai jaise strin ya number boolean also we can all easily tinsert 

// // let a =[1,2,3,4,5,"Name",false,"This is a number"];
// // console.log(a);

// // let b = new Array(65444434);
// // console.log(b);

// // let c = [21,312,"hello jitu raj sharma",423,21234,2345,54];
// // console.log(c[5]);              // This is called index value
// // console.log(c[0]);
// // console.log(c[2]);
// // //   This is reason for is caled zero based index beacuse he is zero based index 
// // c[2]="MITU RITU JITU"
// // console.log(c);


//                         // Arrow methods//
//     let raj = ["Jitu", 15,2,3,4,false];
//     raj.pop();  // last value will be delet
//     console.log(raj);

//     raj.push("Hello");   // value will be add in last
//     console.log(raj);

//     raj.shift(5);  // value will be deletd in first index
//     console.log(raj);

//     raj.unshift(3);         // value will be add in first index
//     console.log(raj);

//     let mitu = ["hello", false, "hello",123,24,234,54,231,2314];
//     let hello = raj.concat(mitu);
//     console.log(hello);


//     let ritu = raj.join("#######");
//     console.log(ritu);

//     raj.reverse();
//     console.log(raj);

//     let yes = raj.indexOf();
//     console.log(yes);

//     let No = raj.slice(3,5);
//     console.log(No);


//     raj.splice(3,0,5);
//     console.log(raj);



    






                                   // Function//
    function sqr(x){            // placeholder ko paramttter kahte hai
        console.log(x*x);
    }
    let a = sqr(8);         // This is a argument 
    console.log(a);


    function sayMessage(){
        console.log("raj");
    }
    sayMessage();
    sayMessage();
    sayMessage();
    sayMessage();


    function passMessage(){
        return "I am very haappy to learn Full Stack Web Development"
    }
    let message = passMessage();
        console.log(message);

        // Function with parametter
   function add(x,y){ 
    return(x+y);
}
console.log(add(2,654));


//              Function with two parametters
function sumOfTwoNumbers(num1, num2){
    return (num1+num2);
}
let final = sumOfTwoNumbers(50,78);
console.log(final);


// Array as in Arguments
function raj ([num1, num2]){
    return (num1+num2);
}
let number = raj[80,50];
console.log(number);

function sumOfParametters(){
    let sum = 0;
    for (var i =0;i<arguments.length;i++)
        sum+ = arguments[I];
        return sum;
}
let result = sumofAlParametters(1,2,3,4,5);
console.log(result);

