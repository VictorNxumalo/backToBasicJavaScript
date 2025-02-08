// In JavaScript this is how you declare a variable
// Declaring a variable with let keyword allows it to be reassigned.
// if you don`t want to reassign the variables you can use the const keyword
let age;
// const character = "Hello, world"
// const count = 8;
// const rows = "Jessica"
// Assigning a value to a variable
age = 28;
// Priting out the variable
console.log(age);
// Reassigning the variable to a different value

// ARRAYS
// Declaring an array variable
let array = ["a", "b", "c", "d", "e",];
// Accessing elements of the array
console.log(array);
// Accessing specific elements of the array
console.log(array[2]);
// Changing the contents of the array
array[1] = "b";
// Using the array.length property to access the the length of the array or last element of the array
array[array.length - 1]; //this is how you access the last length of the array
array[array.length]; //this is how you access the length of the array

//Creating a small program featuring an array
let cities = ["London","New York","Mumbai"];
console.log(cities);
array[array.length-1] = "Mexico City";

// A method in JS is a function that`s associated with certain values or objects. Arrays have their own methods.
// The first one to explore is the array.push method.The push method allows you to push a value to end of the array
cities.push("Tokyo"); // when logging the results of the push method the new length of the array is returned. 
console.log(cities); 
//another essential method is the array.pop method. The pop method allows you to remove the last elemnt from the array
cities.pop();
console.log(cities); // you can assign the result of the pop method into another variable and check the result
let popped =cities.pop(); // not the result of the pop method is a value that was popped from the array


// 1. Building the Pyramid Generator Program
const characters = "#"; // this variable will serve as the building of the pyramid
const count = 8; // 
const rows = []; //
//  To create the pyramid you will need to create multiple rows. When you have to perform a task repeatedly until a certain
// condition is meta and for this will also use a while loop or loop iteration.
// Loops use the following syntax:
for (let i = 0; i < count; i++)
    {
        console.log(i)
    }
//An iterator is a variable declared inside the for loop to control how to loop iterates or goes through the logic.
//The condition of a for loop tells how many times it should iterate. when the condition is failse or met the iteration will stop
// The Iteration statenent tells the loop what to do with the iteratot after the iteration

// 2. Building the Pyramid Generator Program
for (let i = 0; i < count; i++)
    {
        rows.push(i);
    }
    let result = ""
    console.log(result);
    // To manipulate the results of the result string we need to use the for...of loop. which iterates over each item
    // in an iterable object and temporarily assign it to the variable
    //  The syntax of a for...of loop is like this:
     
    // Now Creating a for...of loop to iterate over the rows array. assign each row to the row variable
    for (const row of rows){}
    // In your for...of loop, use the addition operator to concatenate the row value to the result value.
    for (const row of rows) {
        result = result + row;
      }
    // use the special escape sequence \n, which is interpreted as a new line when the string is logged.
    // Use a second addition operator to append a new line after the result and row values.
    for (const row of rows) {
        result = result + row  +"\n";
      }
    //Printing numbers won't result in a visually appealing pyramid. 
    // Now that you're outputting the formatted content of your rows array, it's time to update your original loop.
    // Instead of pushing i to the array, push the value of your character variable.
    for (let i = 0; i < count; i = i + 1) {
        rows.push(character);
      }




