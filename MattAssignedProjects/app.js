//Create function that takes string written in normal english- 
// Have a random number of chars capitalized in string 
// (replace . with a random amount of 1's and !'s, and  ? with a randum number of ?'s or !'s)

function thisIsTheInternet(str) {
    let r = "";

    for (let i = 0; i < str.length; i++) {
        // if the char is a lowercase letter and a 50% chance to occur
        if(str.charAt(i).match(/[a-z]/) && Math.floor(Math.random() * 2) == 1) {
            r = r + str.charAt(i).toUpperCase(); 
            console.log("top char:",str.charAt(i).toUpperCase()); 
            console.log("r:", r); 
        }
        else {
            r = r + str.charAt(i);
            console.log("bot char:", str.charAt(i)); 
            console.log("r:", r);
        }
    }
    console.log("Answer:", r);
    
}

thisIsTheInternet("Hiiiiiiiiiii");
// how to assign a char to specific point in string