# Scope in JavaScript
When we use the word scope in programming, we are talking about some code's accessibility to other code. In JavaScript, this is driven by the curly braces. The curly braces build a virtual wall around the code which prevents any code that is outside the wall from seeing it.

Yet the code inside the walls has a special power. It can see outside the walls and access, or modify, that code - as long as that code, itself, is not contained in an equal, or lower scope. More on that in a bit.

To use the true power of block scopes in JavaScript, you need to use the let and const keywords for declaring variables. If you use var, block scope no longer applies, because those variables declared with var get hoisted and initialized. Always use let and const for variable declarations to avoid unintended side-effects of hoisting and initialization.

Objectives:
Take the examples of code that are provided and make corrections to the scope so they run correctly

## Lessons Learned:
* Declare variables early
* Be aware of const variables (and not to try to reassign them)
* Review the scope of each function and block of curly braces