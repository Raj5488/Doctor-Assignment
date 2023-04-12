
// Two array ko add kaise karna hai
const oneArray = [1,2,3,4];
const twoArray = [5,6,7,8,9,10];
const someArray = oneArray.concat(twoArray);
// console.log(someArray);

// second mathods
const threeArray = [oneArray , twoArray];
console.log(threeArray);

const fourArray = [...oneArray , ...twoArray];
console.log(fourArray);
// ...oneArray = aye sirf value ko hata deta hai squre bracket se final bracket me sirf rah jata hai  * spread kar deta hai
// ...oneArray = 1,2,3,4
// ...twoArray = 5,6,7,8
// **********************************************************************

// spread operator
/* const name = ["Jitu raj sharma" , "falsh"];
const newNames = ["Batan", ...name, "jitu"];
const sitename = "Pwskills"
console.log([...sitename]);

function Pwskills(...values){
    return values
}
console.log(Pwskills("superman", "false")); */




                        // if we know there is rougth something so there is these case use complersary so this is very useful of this argument
// try{
//     console.log('hello');
    // console.log(a);
//     console.log("Ending try");
// }
// catch (error) {
//     console.log("Handled", error);
// }
// finally{
//     console.log("finally");
// }





            // This only use for how can i get answer with the help of RegEx 
// let pattern = "Pw";
// let RegExOne = new RegExp(pattern);
// let flag = "gi";
// let RegExTwo = new RegExp(pattern, flag);
// let regExThree = /pw/gi;

// const StartToCheck = "pw is growing at a rapid speed and recently they are working on pw skills to create skill based pw content."

// const result = regExThree.test(StartToCheck);
// console.log(result);

// const anotherResult = StartToCheck.match(regExThree);
//     console.log(anotherResult);




    
        // how can i get answer with the help of every and findOf is number or string

    const gameScore = [200, 300, 250, 150];
    //Check if all values are Numbers

    const gameScoreCheck = gameScore.every((Check)=>typeof Check==="number");
    console.log(gameScoreCheck);
    console.log(typeof(gameScore[1]));

    // Fina score above 200 methods
    const above200 = gameScore.find((score)=> score>200)
    console.log(above200);


    // setinterval ek asa function hai jise laga kar ham bol skte hai ki har 2,5 second ke bad ham ya print kro jaisa ki karwana hia function time dek kar

    function HelloBrother (){
        console.log("Jitu Raj Sharma");
    }
    // setInterval(HelloBrother, 1000)


    // setTimeOut is the after this is setting of the most 
    setTimeout(HelloBrother,5000);


    let arr = [2,3,4,5,];
    arr.forEach(function(element, index, arr){
        console.log(index,);
    })

    const heros = ["jitu", "Mitu", "Ritu","Raj","Jitendra"];
    heros.forEach((index)=>
    console.log(index.toUpperCase()))
    
    arr.map(function(element,index,arr){
        console.log(element, index, arr);
    })
    heros.map(function(index){
        console.log(index);
    })

    const arr1 = [1,2,3,4,5];
    const arr2 = [6,7,8,9,10];
    const final = arr1.concat(arr2);
    console.log(final);

    const NewValue = [...arr1, ...arr2];
    console.log(NewValue);




    try{
        console.log("Hello Brother How are You");
        // console.log(raj);
    }
    catch (error) {
        console.log("replace only", error);
    }
    finally{
        console.log("Hello");
    }



    

