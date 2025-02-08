const character = "#"
const count = 8
for (let i = 0; i < count; i++) 
    {
        rows.push(character.repeat(i+1));
    }

// FUNCTIONS
// a fucntion is a block of code that can be reused throughout the program.
// Functions are declared with the following syntax:

function name(parameters) {}

// The fucntion keyword tells JS that that the name variable is a going to be a function.
// Parameters is a variable that represents a value that is passed into the function when it is called/used.
// A function may have as many, or as few, parameters as you`d want.
//  Like a for loop. the space between the curly braces is the function body.

// Create/declare a function that will be called padRow
function padRow(){}; padRow();

// In order to use a function, we need to call the function. A function call tells the program to run the code frop the function.
//  Whenever you choose to call the function. The syntax of the function call is the function name followed by parantheses. 
// For Example, this code defines and calls a test function.
function test() {

}
test();
//  All functions in JS return a value. meaning they provide the defined result. of calling them for you to use elsewhere.
// To see the result of calling your padRow function, declare a call variable and assign your existing padRow call to that variable.
let callResult = padRow();
console.log(callResult); // Outputs: undefined

// The CallResult variable has an undefined value, even though it is defined. This is because PadRow function does not return a value
// by defalut, functions return undefined as their value.
// in order to return something else. we need to use the return keyword. Here is an example of a function that returns the string Functions are cool !
// function demo(){
//     return "Functions are cool!";
// };
// When you have a value that is explicitly written in your code, like the "Functions are cool!" string in your function.
// it is considered to be hard-coded. Hard-coding a value inside a function might not make it as reuable as you`d like.
// Instead, you should define parameters for the function. Parameters are special variables that are given a value when
//  you call the function, and are can be used in your function to dynamically change the result of the function`s code. 
// To add a parameter to a function. you need to add a varibale name inside the parantheses. FOr example, This demo function
// With the name parameter:
// function demo(name) {};
function padRow(name) {
    return "Hello!";
  }
// A function does not have to return a hard-coded value. It can return the value stored in a variable. Parameters are special variables.
// for a function. so they can be returned. 
// Now we will change the padRow function to retirn the name parameter directly.
function padRow(name) {return name; };

// When you open your console window, you`ll see that the padRow function still return undefined. Even though the return value.
// is difined. This is because parameters need to be given a value when calling them.
// When you pass a value to a function call. That value is reffered to as an arguement.
function PadRow(name) {
    return name;
  }
  padRow("Naomi");