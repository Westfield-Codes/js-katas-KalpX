/* Variable and Alert Katas */
// These katas do not involve functions and are very basic. 
// "String variable" and "integer variable" are created the same way. 

/* COLOR KATAS */

/* Var Alert */
// make a string variable named color, set it equal to your favorite color.
// alert the message" "My favorite color is " plus the variable name, outside the quotes.

/* Var Alert Prompt */
// make a string variable for color, but prompt the user for their favorite color.
// alert color plus " is a nice color!" - note the space in the quotes.

/* Var Alert Prompt Conditional */
// make a string variable for color, prompt the user for their favorite
// if user enters "black" alert "Black is not really a color." 
// otherwise alert color " is a nice color!"

/* AGE KATAS */

/* Var Alert */
// make an integer variable for age, set it equal to your age
// make a string variable for name, set it to your name
// alert name is age years old

/* Var Alert Prompt */
// make an integer variable for age, prompt user for their age
// make a string variable for name, prompt user for their name
// alert name is age years old

/* Var Alert Prompt Conditional */
// make an integer variable for age, prompt user for it
// make a string variable for name, prompt user for it
// if age is greater than 16, alert "you don't look that old!"
// otherwise alert name is age years old

/* ICE CREAM CONE KATAS */

/* Var Alert Prompt */
// make a string variable for favorite ice cream flavor, prompt user for it
// make an integer variable for number of scoops on the cone, prompt user for it
// alert "You want " scoops "scoops of " flavor

/* Var Alert Prompt Conditional */
// make a string variable for favorite ice cream flavor, prompt user for it
// make an integer variable for number of scoops on the cone, prompt user for it
// if scoosp is creater than three, alert ("Max 3 scoops!")
// otherwise alert "You want " scoops " scoops of " flavor

/* PET KATAS */

/* Var Alert Prompt */
// make a variable for a pet type, prompt user for it 
// make a variable for a pet name, prompt user for it
// alert "You have a pet type named pet name 

/* Var Alert Prompt Conditionals */
/* Var Alert Prompt Conditionals */
// make a variable for pet type, prompt user for it 
var pet = prompt("What is your favorite type of pet.");
// make a variable for pet name, prompt user for it
var names = prompt("What is your pet name?");
// alert "You have a pet type named pet name 
alert("Your pet type is " + pet + " and its name is " + names)
// if pet is a dog, say "I like dogs, too!"
if(pet == "dog") alert("I like dogs too!");
// if it is a cat, say "I'm allergic to cats"
else if(pet == "cat") alert("I am allergic to cats!");
// If it is not a dog or a cat, say "what an interesting pet!"
else alert("That's an interesting pet!");

/* Animals and legs:
* Practicing variable naming and assignment, including camelCase.
*/

// Create (declare) a variable and name it legs
var legs;
// Assign 4 to that variable. It is holding an integer (number)
legs = 4;
// Create (declare) a variable and name it animalType
var animalType;
// Assign the name of a type of animal with the current value of legs to animalType. It is holding a string (symbols)
animalType = "Dog";
// Display an Alert Box with the message: "An [animalType] has [legs] legs"
alert("An " + animalType + " has " + legs + " legs ");
// Subtract 2 from legs and assign that to legs (not in this order)
legs = 2;
// Assign the name of a type of animal with the new value of legs to animalType
animalType = "Human";
// Display an Alert Box with the message: "An [animalType] has [legs] legs"
alert("An " + animalType + " has " + legs + " legs ");
// Multiply the current value of legs by 3 and assign that to legs
legs = 6;
// Assign the name of a type of animal with the new value of legs to animalType
animalType = "Spider";
// Display an Alert Box with the message: "An [animalType] has [legs] legs"
alert("An " + animalType + " has " + legs + " legs ");
// Add 2 to the current value of legs and assign that to legs
legs = 8;
// Assign the name of a type of animal with the new value of legs to animalType
animalType = "Scorpion";
// Display an Alert Box with the message: "An [animalType] has [legs] legs"
alert("An " + animalType + " has " + legs + " legs ");
// Multiply the current value of legs by 4 and assign that to legs
legs = 32;
// Assign the name of a type of animal which could have the new value of legs to animalType
animalType = "Centipede";
// Display an Alert Box with the message: "An [animalType] SOMETIMES has [legs] legs"
alert("An " + animalType + " SOMETIMES has " + legs + " legs ");
// Assign the value of 3 to legs
legs = "3";
// Assign the string "amputee" to animalType
animalType = "Amputee";
// Display an Alert Box with the message: "An [animalType] SOMETIMES has [legs] legs"
alert("An " + animalType + " SOMETIMES has " + legs + " legs ");
// Assign the string "dog" to animalType
animalType = "dog";
// Display an Alert Box with the message: "for example, an [animalType]".
alert("for example, " + " an " + animalType);
/* Fun with expressions
* Understanding the pecularities of the JavaScript Alert Box
*/

// Declare a variable and name it first
var first;
// Assign a value to first using a prompt: "Enter first number"
first = prompt("Enter First Number");
// Declare a variable and name it second
var second;
// Assign a value to second using a prompt: "Enter second number"
second = prompt("Enter Second Number");
// Declare a variable and name it bragging
var bragging;
// Assign exactly this expression to bragging: "I can add " + first + " + " + second"
bragging = "I can add " + first + " + " + second;
// Display an Alert Box with bragging inside it.
alert(bragging);
// Assign exactly this expression to bragging: first + " + " + second + " = " + first + second
var answer;
answer = (first + second);
bragging = first + " + " + second + " = " + first + second + answer;
// DO NOT Display an Alert Box with bragging inside it YET.
//prediction = first + " + " + second + " = " + first + second;
// Declare a variable and name it prediction
var prediction;
// Assign your prediction about what will be displayed when we display bragging
alert(bragging)
// Display an Alert Box with prediction inside it.
alert(prediction);
// Call Mr. M. over to see it. Do not do anythign else!

// Await further instructions.