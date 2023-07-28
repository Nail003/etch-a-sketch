// Loading DOM elements
const gridContainer = document.querySelector("#gridContainer");
const form = document.querySelector("form");

createGrid(16);
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
