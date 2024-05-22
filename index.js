
 ////////////// chapter 4 //////////////////////////
 var variable1, variable2, variable3;



 //Legal variables names
var  firstName
 var myVariable
var num1
 var _counter
 var $price


 //Illegal variables names
//   var 123variable
//  var my variable 
// var (Reserved keyword)
// var my-variable 
//  var alert (Reserved keyword)

// Define variables for the allowed characters
var allowedCharacters = "letters, digits, underscores, and dollar signs";
var exampleVariable = "$my_1stVariable";

// Display the rules in the browser
document.write("<p>Variable names can only contain " + allowedCharacters + ".<br>For example " + exampleVariable + "</p>");
document.write("<p>Variables must begin with a letter, underscore, or dollar sign.<br>For example $name, _name, or name</p>");
document.write("<p>Variable names are case-sensitive</p>");
document.write("<p>Variable names should not be JavaScript reserved keywords</p>");


////////////////////////Chapter-5////////////////////////////////////////
 // Define the two numbers
 var number1 = 3;
 var number2 = 5;

 // Add the two numbers
 var sum = number1 + number2;

 // Display the result in the browser
 document.write("The sum of " + number1 + " and " + number2 + " is " + sum);

 // Define the two numbers
 var number1 = 10;
 var number2 = 3;

 // Perform subtraction
 var difference = number1 - number2;

 // Perform multiplication
 var product = number1 * number2;

 // Perform division
 var quotient = number1 / number2;

 // Perform modulus
 var remainder = number1 % number2;

 // Display the results in the browser
 document.write("<p>Subtraction: " + number1 + " - " + number2 + " = " + difference + "</p>");
 document.write("<p>Multiplication: " + number1 + " * " + number2 + " = " + product + "</p>");
 document.write("<p>Division: " + number1 + " / " + number2 + " = " + quotient + "</p>");
 document.write("<p>Modulus: " + number1 + " % " + number2 + " = " + remainder + "</p>");

 // a. Declare a variable
 var myVariable;

 // b. Show the value of variable in the browser
 document.write("Value after variable declaration is: " + myVariable + "<br>");

 // c. Initialize the variable with some number
 myVariable = 5;

 // d. Show the initial value of variable in the browser
 document.write("Initial value: " + myVariable + "<br>");

 // e. Increment the variable
 myVariable++;

 // f. Show the value of variable after increment in the browser
 document.write("Value after increment is: " + myVariable + "<br>");

 // g. Add 7 to the variable
 myVariable += 7;

 // h. Show the value of variable after addition in the browser
 document.write("Value after addition is: " + myVariable + "<br>");

 // i. Decrement the variable
 myVariable--;

 // j. Show the value of variable after decrement in the browser
 document.write("Value after decrement is: " + myVariable + "<br>");

 // k. Show the remainder after dividing the variable's value by 3
 var remainder = myVariable % 3;

 // l. Show the remainder in the browser
 document.write("The remainder is: " + remainder + "<br>"  );

////QUESTION 4/////////////////
 // Multiply 600 by 5
 let result = 600 * 5;

 // Display the result
 console.log(result); 
 document.write(" Total cost to buy 5 tickets to a moive is 3000PKR" + "<br>");


///////////////QUESTION 5 ///////////////////////




let celsiusTemperature = 25;
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);

let fahrenheitTemperature2 = 77;
let celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
document.write(`${fahrenheitTemperature2}°F is ${celsiusTemperature2}°C` + "<br>");



/////////////////QUESTION 6///////////////////////////////

let priceItem1 = 650
 



//////////QUESTION 8//////////////////////////
// Store total marks and marks obtained by a student
let totalMarks = 500;
let marksObtained = 425;

// Calculate percentage
let percentage = (425 / 500) * 100;

// Output the result
document.write("Percentage obtained: 85% " +"<br>");


///////////////////QUESTION 9/////////////////////////
// Define the amounts in USD and SAR
let usdAmount = 10;
let sarAmount = 25;

// Define the exchange rates
let usdToPkrRate = 104.80;
let sarToPkrRate = 28;

// Convert the amounts to Pakistani Rupees and sum them up
let totalPkr = (usdAmount * usdToPkrRate) + (sarAmount * sarToPkrRate);

// Output the result
document.write("Total amount in Pakistani Rupees: " + totalPkr.toFixed(2) + "<br>");

//////////////////QUESTION 10////////////////////////////
// Initialize a variable with some number
let number = 10;

// Perform arithmetic operations in sequence
let result2 = ((number + 5) * 10) / 2;

// Output the result
document.write("Result2:", result2 + "<br>");




//////////////////////QUESTION 11/////////////////////



// Store the current year in a variable
let currentYear = new Date(2024).getFullYear();

// Store their birth year in a variable
let birthYear = 2006; 

// Calculate their age
let age1 = currentYear - birthYear;
let age2 = age1 - 18; 

// Output the result
document.write("Your age is 18" + "<br>");

/////////////////////QUESTION 12//////////////////////
// Store the radius of the circle into a variable
let radius = 10; // For example, radius is 10 units

// Calculate the circumference of the circle
let circumference = 2 * Math.PI * radius;

// Calculate the area of the circle
let area = Math.PI * radius * radius;

// Output the results
document.write("The circumference is " + circumference.toFixed(2));
document.write("The area is " + area.toFixed(2) + "<br>");

///////////////////////QUESTION 13///////////////////////
// Store your favorite snack into a variable
let favoriteSnack = "chocolate bars";

// Store your current age into a variable
let currentAge = 15;

// Store a maximum age into a variable
let maximumAge = 65;

// Store an estimated amount per day (as a number)
let amountPerDay = 2; 

// Calculate how many snacks you would eat total for the rest of your life
let remainingYears = maximumAge - currentAge;
let totalAmount = amountPerDay * 365 * remainingYears;

// Output the result
document.write("You would eat a total of " + totalAmount + " " + favoriteSnack + " for the rest of your life.");