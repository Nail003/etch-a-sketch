// Loading DOM elements
const gridContainer = document.querySelector("#gridContainer");
createGrid(16);

// Helper functions
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
