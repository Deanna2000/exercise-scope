//Lambda LLama

//Set up the function
const llamaNamer = function () {
    possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"], //Establish array
    randomizer = Math.floor(Math.random() * 7) //Add random functionality to use below

        const suffix = " the Llama" //To be used when console logging
        const name = possibleNames[randomizer] //Selecting randomly from the array
        return name + suffix //Teturning the random name and the other text
    }


nameMaker = llamaNamer() //Setting a function to a variable
console.log(nameMaker) //Invoking the function