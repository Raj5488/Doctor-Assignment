                            // What is a class
//Ans:-  Classes serve as a bluprint for creating objects, providing a way to organize and structure code.They allow you to define objects with similar properties and methods in a reusable manner, reducing the amout of code you need to wirte and making your to write and making our code easier to maintain.


// Object-Oriented Programming:- 
            // Classes provide a way to do object-oriented programming in JavaScript, which is popular programming paradigm for organizing code into objects and classes.

// Reusability:- 
    // Ans:- Clases provide a way to create multiple objects with similar propoerties and methods reducing the amount of code you need to write.

// Abstraction:-
        // Ans:- Classes provide a way to abstract away the implementation details of objects and hide the complexity of your code. This makes your code more readable and easier to understand.

// Encapsulation:- 
    // Ans:- Classes provide a way to encapsulate data and behavior within objects, making it easier to manage state and behavior in a structured way.

// Modularity:- 
    //Ans:- Classes provide a way to organize code into distrinct, reusable units, making it easier to manage and maintain large codebases.
            


    class Animal{
        makeSound(){
            console.log("Animal sound");
        }
    }
    const myAnimal = new Animal();
    myAnimal.makeSound();
    // In this example, a Car class is defined that takes make, model, and year parameters. The class also has a hank method thta logs a message to the console. And object of the Car class is created with the new operator and assigned to the myCar Variable, and its propoerties and method can be accessed using dot notation.



// Example: Demonstrate an example of class definition
class Van{
    honk(){
        console.log("Beep Beep!!");
    }
}
const myCar = new Van();
myCar.honk();


// Example: let us try adding some data in the same car class
class Car {
    setMake(make){
        this.make = make;
    }
    setModel(model){
        this.model = model;
    }
    setYear(year){
        this.year = year;
    }
    honk(){
        console.log("Beep Beep!!");
    }
}

