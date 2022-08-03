let container = document.querySelector(".container")

let pRed = document.createElement("p")

container.append(pRed)
pRed.innerText = "Hey i'm red!";
pRed.style.color = "red"

let blueHeading = document.createElement("h3")
container.append(blueHeading)

blueHeading.innerText = "I'm a blue h3!"
blueHeading.style.color = "blue"

// a <div> with a black border and pink background color with the following elements inside of it:

const divBorder = document.createElement("div");
container.appendChild(divBorder);
divBorder.style.backgroundColor = "pink"
divBorder.style.border = "3px solid black";

// Elements inside div

// another <h1> that says “I’m in a div”

let heading1 = document.createElement("h1");
divBorder.appendChild(heading1);
heading1.append("I'm in a div")

// a <p> that says “ME TOO!”

let p = document.createElement("p")
divBorder.append(p)
p.innerText = "ME TOO!"

// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.


console.log(divBorder)