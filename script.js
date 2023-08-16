const box = document.createElement("div");
box.id = "container";
document.body.appendChild(box);

// Styles for the body to center the container
document.body.style.height = "100vh"; // Full viewport height
document.body.style.margin = "0"; // Remove default margin
document.body.style.display = "flex";
document.body.style.justifyContent = "center"; // Center horizontally
document.body.style.alignItems = "center"; // Center vertically


container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "400px";
container.style.height = "400px";
container.style.justifyContent = "space-between";
container.style.alignContent = "space-between";
container.style.border = '2px solid black'

function generateBoxes(value) {
    // First, clear the container
    container.innerHTML = '';

    const totalBoxes = value * value;
    const boxSize = 400 / value - 2;  // -2 to account for box border

    for (var i = 0; i < totalBoxes; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.id = "box-" + i;
        box.style.backgroundColor = "white";
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.border = '1px solid black';
        box.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "black";
        });
        
        // // OPTIONAL: Revert style when the mouse leaves (hover ends)
        // box.addEventListener("mouseleave", function() {
        //     this.style.backgroundColor = "white";
        // });

        container.appendChild(box);
    }
}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

function updateDisplay(value) {
    output.textContent = `${value} x ${value}`;
}

// Initial display
updateDisplay(slider.value);
generateBoxes(parseInt(slider.value));


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    updateDisplay(this.value);
    generateBoxes(parseInt(this.value));
} 
