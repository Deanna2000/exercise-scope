# Scope in JavaScript
When we use the word scope in programming, we are talking about some code's accessibility to other code. In JavaScript, this is driven by the curly braces. The curly braces build a virtual wall around the code which prevents any code that is outside the wall from seeing it.

Yet the code inside the walls has a special power. It can see outside the walls and access, or modify, that code - as long as that code, itself, is not contained in an equal, or lower scope. More on that in a bit.

To use the true power of block scopes in JavaScript, you need to use the let and const keywords for declaring variables. If you use var, block scope no longer applies, because those variables declared with var get hoisted and initialized. Always use let and const for variable declarations to avoid unintended side-effects of hoisting and initialization.

## Objectives:
### Take the examples of code that are provided and make corrections to the scope so they run correctly for the following examples -
1. Cookie Exercise - loop through an array and log the array results
2. Conjunction Function - join 2 words together in a function
3. Mod Squad Members List - display member names from an array
4. Simon Says - show the count of array locations based on a condition
5. Lambda Llama - loop through an array and use a randomizer to show an array item in the console


## Lessons Learned:
* Declare variables early
* Be aware of const variables (and not to try to reassign them)
* Review the scope of each function and block of curly braces
* impure functions call to information outside the function or they return inconsistent data
* pure functions are completely encapsulated and they return the same data every time