/*
    Applied Lab 3-2
    Ducky World JavaScript
*/

/*
    Displays a welcome message.
*/
function welcomeCustomer() {
    alert("Welcome to Ducky World!");
}

/*
    Prompts the user for their name and displays a greeting.
*/
function greetCustomer() {
    const userName = prompt("Please enter your name:");
    if (userName !== null && userName.trim() !== "") {
        alert("Hello, " + userName + "!");
    } else if (userName !== null) {
        alert("Hello!");
    }
}

/*
    Calculates and displays the total number of ducks ordered.
*/
function calculateTotalDucks() {
    const yellow = Number(document.getElementById("yellow").value) || 0;
    const pink = Number(document.getElementById("pink").value) || 0;
    const blue = Number(document.getElementById("blue").value) || 0;
    const astro = Number(document.getElementById("astro").value) || 0;
    const totalDucks = yellow + pink + blue + astro;
    alert("Total ducks ordered: " + totalDucks);
    return totalDucks;
}

/*
    Validates the order before submitting the form.
    Return true to allow submission.
    Return false to prevent submission.
*/
function validateOrder() {
    const yellow = Number(document.getElementById("yellow").value) || 0;
    const pink = Number(document.getElementById("pink").value) || 0;
    const blue = Number(document.getElementById("blue").value) || 0;
    const astro = Number(document.getElementById("astro").value) || 0;
    const totalDucks = yellow + pink + blue + astro;

    if (totalDucks <= 0) {
        alert("Please select at least one duck.");
        return false;
    }

    return confirm("Are you sure you want to place this order?");
}