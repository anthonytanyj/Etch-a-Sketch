const box = document.createElement("div");
const main = document.querySelector(".main");
box.id = "container";
main.appendChild(box);

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

//rainbow
function getRandomColor() {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return `rgb(${r},${g},${b})`; // Collect all to a css color string
}

let isRainbowMode = false;

document.querySelector(".Rainbow").addEventListener("click", function () {
    isRainbowMode = !isRainbowMode; // Toggle the rainbow mode on and off
});

let isEraser = false;

document.querySelector(".Eraser").addEventListener("click", function () {
    isEraser = !isEraser; // Toggle the Eraser mode on and off
});

document.querySelector(".Clear").addEventListener("click", function () {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(function (singleBox) {
        singleBox.style.backgroundColor = "white";
    });
});


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
        box.addEventListener("mouseenter", function () {
            if (isRainbowMode && !isEraser) {
                this.style.backgroundColor = getRandomColor();
            } else if (isEraser) {
                this.style.backgroundColor = "white";
            }
            else {
                this.style.backgroundColor = "black";
            }
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
slider.oninput = function () {
    updateDisplay(this.value);
    generateBoxes(parseInt(this.value));
} 
