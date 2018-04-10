//Mod Squad Exercise

//Declare HTML Rep
let HTMLRepresentation = ""

    //Create data objects
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    //Print a title to the page
    HTMLRepresentation = `<h1>The Mod Squad</h1>`

    //Loop through the members array
    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`

    })

    //Write the members' names to the DOM
    document.querySelector(".show-info").innerHTML = HTMLRepresentation




