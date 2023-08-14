// Loading DOM elements
const gridContainer = document.querySelector("#gridContainer");
const form = document.querySelector("form");
const rainbowModButton = document.querySelector("#rainbowModButton");
const darkeningModButton = document.querySelector("#darkeningModButton");

createGrid(16);
logMessageSeparator();
setModButtonsEvents();
logMessageSeparator();

form.addEventListener("submit", submitHandler);

// Event handlers
function submitHandler(e) {
    e.preventDefault();
    let newGridSize = e.target[0].value;
    if (newGridSize < 1 || newGridSize > 100) {
        console.log("%cWrong grid input detected", "color: red;");
        console.log(
            "%cChanging grid size to default value of 16",
            "color: orange;"
        );
        newGridSize = 16;
    }

    clearGridContainer();
    createGrid(newGridSize);
    console.log(
        `%cNew grid of size ${newGridSize}x${newGridSize} created`,
        "color: aqua;"
    );
    logMessageSeparator();
}

// Helper functions
function clearGridContainer() {
    /**
     * Removes all elements from grid container
     */
    gridContainer.innerHTML = "";
    console.log("%cRemoved all children of gridContainer", "color: coral;");
}

function createGrid(size) {
    /**
     * Create a square grid of "div" elements in gridContainer
     * size sets the dimensions of the square
     * i.e size = 16 will create a square grid of 16x16
     */
    console.groupCollapsed("%cGrid Creation", "color: green;");

    for (let row = 1; row <= size; row++) {
        // SubContainer for each row of elements for style purposes (flex box)
        const gridSubContainer = document.createElement("div");
        gridSubContainer.classList.add("gridSubContainer");
        gridContainer.appendChild(gridSubContainer);

        console.log(`%cCreated row No. ${row}`, "color: lightgreen;");

        for (let column = 1; column <= size; column++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("gridElement");
            gridSubContainer.appendChild(gridElement);

            console.log(`Added grid element No. ${column}`);
        }
    }

    console.groupEnd();
}

function logMessageSeparator() {
    /**
     * Just a beauty function to separate the console logs
     */
    console.log("%c----------Separator----------", "color: darkgrey;");
}

function setModButtonsEvents() {
    console.groupCollapsed("%cMod Buttons Event Setter", "color: lightcoral;");
    console.log("Setting event for rain bow mod button");

    rainbowModButton.addEventListener("click", rainbowModHandler);
    darkeningModButton.addEventListener("click", darkeningModHandler);
    console.groupEnd();
}

function rainbowModHandler(e) {
    console.log("Rainbow Mod");

    // Handle classes
    e.target.classList.toggle("active");
    darkeningModButton.classList.remove("active");

    // Get gridElements to apply new styles
    let gridElements = document.querySelectorAll(".gridElement");

    // RemoveAllEventListener and get the new updated list
    removeAllEventListener(gridElements);
    gridElements = document.querySelectorAll(".gridElement");

    // If active than deactivate
    if (!e.target.classList.contains("active")) {
        console.log("Deactivated");
        return;
    }

    // Add event listeners
    for (gridElement of gridElements) {
        gridElement.addEventListener("mouseenter", (e) => {
            const randomColor = randomHexColorGenerator();
            e.target.style = `flex: 1; background: ${randomColor};`;
        });
        gridElement.addEventListener("mouseleave", (e) => {
            e.target.style = "none";
        });
    }

    console.log("Activated");
    logMessageSeparator();
}

function darkeningModHandler(e) {
    e.target.classList.toggle("active");
    rainbowModButton.classList.remove("active");
}

function randomHexColorGenerator() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
}

function removeAllEventListener(nodeList) {
    for (node of nodeList) {
        node.replaceWith(node.cloneNode(true));
    }
}
