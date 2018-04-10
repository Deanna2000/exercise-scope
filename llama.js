const llamaNamer = function () {
    possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"],
    randomizer = Math.floor(Math.random() * 7)

        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix
    }


nameMaker = llamaNamer()
console.log(nameMaker)