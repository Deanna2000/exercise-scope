//C is for Cookie
//Set up data and inialize variables
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

//Iterate through the array
for (let y = 0; y < cookies.length; y++) {
    const currentCookie = cookies[y] //Set current array item to a variable
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`) //Use interpolation to write to the DOM, including the array item
}