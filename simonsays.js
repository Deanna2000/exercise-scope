const locations = [[1,1], [1,2], [3,3], [2,1], [2,2], [2,3]]
let counter = 0
let invalidLocation = ""

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] >1) {
    invalidLocation = true
    }
    if (invalidLocation) {
        console.log("This location is invalid")
    }
    else {
        counter++
    }
}
console.log(`There were ${counter} locations displayed`)

