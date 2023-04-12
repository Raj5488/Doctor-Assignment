class Product {
    // properties -> variables -> data memebar
    name;
    price;
    rating;

    //behaviours -> functions -> member functions
    display(){
        console.log("Displaying the current product");
    }
}
const p = new Product(); // new -> creates an empty plain object
// in the piece3 of code we are calling the ocnstrutor method
console.log(p);
p.display();


                        // Constructor
    