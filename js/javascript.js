// Loading DOM elements
const gridContainer = document.querySelector("#gridContainer");
createGrid(16);

function createGrid(size) {
    /**
     * Create a square grid of "div" elements in gridContainer
     * size sets the dimensions of the square
     * i.e size = 16 will create a square grid of 16x16
     */
    const gridElement = document.createElement("div");
    gridElement.classList.add("gridElement");

    const area = size * size;
    for (let i = 0; i < area; i++) {
        gridContainer.appendChild(gridElement);
        console.log(`Created grid element No. ${i}`);
    }
}
