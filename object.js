// PROBLEM 1 - Write a function that loops through an array of numbers and returns the sum of the numbers.
// SOLVE 1
let array = [21, 11, 12, 22];
let sum = 0;
function totalNumber(array){
    for(let allArray of array){
        sum += allArray;
    }
    return sum;
}
console.log(totalNumber(array));
// PROBLEM 1 SOLVED

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 2 - Create an object with properties name and age. Write a function to add a new property city to the object.
// SOLVE 2
let myself = {
    myName: "Nusrat Suchona",
    age: 19,
}
function newCity(myself){
    myself.newCity = "Cumilla";
    return myself;
}
console.log(newCity(myself));
// PROBLEM 2 SOLVED

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 3 - Write a function that takes a number and returns whether it is even or odd.
// SOLVE 3
function everOrOdd(num){
    if(num % 2 == 0){
        return "Even Number";
    }
    else{
        return "Odd Number";
    }
}
console.log(everOrOdd(21));
// PROBLEM 3 SOLVED

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 4 - Create an object that represents a car with properties brand and model. Write a function to update the model of the car.
// SOLVE 4
let aCar = {
    brand: "Bugatti",
    model: "The La Voiture Noire",
}
function updateModel(){
    aCar.model = "Tourbillon";
    console.log(aCar);
}
updateModel();
// PROBLEM 4 SOLVED

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 5 - Write a function that loops through an object and prints each property and its value.
// SOLVE 5
let grocery = {
    fruits: "Mango",
    vegetables: "Tomato",
    drinks: "Mojo",
    juice: "Orange juice",
    rice: "10kg",
    daal: "2kg",
}
function properties(totalGrocery){
    for(let allgroceries in totalGrocery){
        console.log(allgroceries + ":" + " " + totalGrocery[allgroceries]);
    }
}
properties(grocery);
// PROBLEM 5 SOLVED