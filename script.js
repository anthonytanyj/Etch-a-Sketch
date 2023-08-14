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


for (var i = 1; i < 17; i++) {
    container.innerHTML += '<div class="box" id="' + i + '"></div>';
}

var boxes = container.querySelectorAll(".box");

boxes.forEach(function (box) {
    box.style.backgroundColor = "white";
    box.style.width = "100px";
    box.style.height = "100px";
    box.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "black";
    });

    // OPTIONAL: If you want to revert the style when the mouse leaves (hover ends)
    box.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "";  // Or set to any other default color
    });
});