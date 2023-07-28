// Loading DOM elements
const gridContainer = document.querySelector("#gridContainer");
createGrid(16);

function createGrid(size) {
    /**
     * Create a square grid of "div" elements in gridContainer
     * size sets the dimensions of the square
     * i.e size = 16 will create a square grid of 16x16
     */
    console.groupCollapsed("%cGrid Creation", "color: green;");

    for (let row = 1; row <= size; row++) {
        const subGridContainer = document.createElement("div");
        subGridContainer.classList.add("subGridContainer");
        gridContainer.appendChild(subGridContainer);

        console.log(`%cCreated row No. ${row}`, "color: lightgreen;");

        for (let column = 1; column <= size; column++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("gridElement");
            subGridContainer.appendChild(gridElement);

            console.log(`Added grid element No. ${column}`);
        }
    }

    console.groupEnd();
}
