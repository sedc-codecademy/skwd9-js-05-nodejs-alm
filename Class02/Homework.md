# Assignment 01

Create an app that asks the user for username and password input.
The app should look for the specific username in a .json file,
if the user exists and the password is correct, the user should get a message
in the console "User logged in!"
If the password was wrong or the user does not exist, the user should get an appropriate message.

Bonus: Add a register user option, allowing you to insert new users in the .json database.

# Assignment 02

Create a textService module. The text service should have options 
to read, append and write to a certain file. Then import the module in an app.js
The user should be asked to either read, write or append to a file, and what do they want to write or append. 

Hint: Check out the NodeJS documentation for the functions appendFile and appendFileSync. (There are a few examples)

Bonus: Add a math module that has functions to sum, subtract, divide and multiply.
Import the module in the app.js file.
The user should also be given the options to sum, divide, multiply or subtract. (On top of read, write, append) If the user chooses any of the math options, then prompt them to add two numbers, and console log the appropriate result.

# Assignment 3

(Super Bonus, not mandatory). Create a quiz app. (At least 3 questions.) The user should be able to choose one correct out of 4 given answers. If the players guesses correctly the user should get +1 point, and 0 of they guess wrong. At the end of the quiz, console.log() the user score.

Hint: Questions could be stored in a .json file, along with the available answers.
