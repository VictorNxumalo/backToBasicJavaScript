const character = "#";
const count = 8;

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1);
}

// Generate the pyramid
for (let i = 1; i <= count; i++) {
    console.log(padRow(i, count));
}

// BREAKDOWN

// 1. Declaring Variables

// const character = "#";
// const count = 8;
// character = "#"; // → This is the symbol used to create the pyramid.
// count = 8; → This is the number of rows in the pyramid.
// 2. Creating the padRow Function

// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1);
// }
// This function is responsible for formatting each row of the pyramid.

// Breaking it down:
// rowNumber → Represents the current row (1, 2, 3, ...).
// rowCount → The total number of rows (count = 8 in this case).
// How the return statement works:

// " ".repeat(rowCount - rowNumber) 
// This adds leading spaces to center the row.
// Example:
// For rowNumber = 1, it adds 7 spaces (8 - 1 = 7).
// For rowNumber = 2, it adds 6 spaces (8 - 2 = 6).
// This keeps reducing as the pyramid grows.

// character.repeat(2 * rowNumber - 1)
// This generates the # symbols in a pyramid shape.
// 2 * rowNumber - 1 ensures that:
// rowNumber = 1 → 1 #
// rowNumber = 2 → 3 #
// rowNumber = 3 → 5 #
// ...
// rowNumber = 8 → 15 #
// 3. Generating the Pyramid using a Loop

// for (let i = 1; i <= count; i++) {
//     console.log(padRow(i, count));
// }
// for (let i = 1; i <= count; i++) → Loops from 1 to 8, calling padRow(i, count) each time.
// console.log(padRow(i, count)); → Prints the generated row.
// Step-by-Step Execution
// When count = 8
// Row (i)	Spaces (" ".repeat(8 - i))	Hashes ("#".repeat(2 * i - 1))	Final Output
// 1	" " (7 spaces)	"#"	#
// 2	" " (6 spaces)	"###"	###
// 3	" " (5 spaces)	"#####"	#####
// 4	" " (4 spaces)	"#######"	#######
// 5	" " (3 spaces)	"#########"	#########
// 6	" " (2 spaces)	"###########"	###########
// 7	" " (1 space)	"#############"	#############
// 8	"" (0 spaces)	"###############"	###############
// Final Console Output

//        #      
//       ###     
//      #####    
//     #######   
//    #########  
//   ########### 
//  #############
// ###############
// Summary of Key Concepts Used
// ✔ repeat(n) Method → Repeats a string n times.
// ✔ String Concatenation → Combining spaces and # to format output.
// ✔ Loop (for) → Iterates through rows from 1 to count.
// ✔ Mathematical Formula (2 * i - 1) → Generates an odd number of # per row.
