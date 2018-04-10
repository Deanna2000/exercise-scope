//Simon Says

//Set up variables
const locations = [[1,1], [1,2], [3,3], [2,1], [2,2], [2,3]]
let counter = 0
let invalidLocation = ""

//Iterate through the entire array
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]  //Establish the current array item

    if (currentLocation[0] >1) {  //Evaluate the current array item
    invalidLocation = true
    }
    if (invalidLocation) {   //The condition is assumed for a boolean (invalidLocation "is" true)
        console.log("This location is invalid")
    }
    else {
        counter++  //add to the counter - we are counting instances of valid locations so it's outside the if
    }
}
console.log(`There were ${counter} locations displayed`)

