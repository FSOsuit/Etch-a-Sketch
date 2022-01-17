const container = document.querySelector('.container');

function drawGrid(sizeOfGrid) {
  for (let i = 1; i <= sizeOfGrid; i++) {
    for (let j = 1; j <= sizeOfGrid; j++) {
      const grid = document.createElement('div');
      grid.classList.add('grid');
      let widthOfGrid = 100 / sizeOfGrid;
      let heightOfGrid = 100 / sizeOfGrid; 
      grid.setAttribute('style', `width: ${widthOfGrid}%; height: ${heightOfGrid}%`); //sets size relative to drawn screen size
      container.appendChild(grid);
    }
  }
}

function deleteGrid(gridElements) {
  gridElements.forEach((grid) => {
    grid.remove();
  });
}

let sizeOfGrid;
let correctSize = false;
while (correctSize === false) {
  sizeOfGrid = prompt("Enter size of the grid from 1 to 100"); //asks for size
  if (sizeOfGrid <= 100 && sizeOfGrid > 0) {
    correctSize = true; //check if input size is correct 
    //draws grid of input size
    drawGrid(sizeOfGrid);
  } else {
      alert("Enter correct size.")
    }
}




//chages color of each moused over div
const grids = document.querySelectorAll('.grid');
grids.forEach((grid) => {
  grid.addEventListener('mouseover', () => {
    grid.classList.add('mouseover');
  })
});

//resets the grid
const button = document.querySelector('.resetBtn');
button.addEventListener('click', () => {
  deleteGrid(grids);
  sizeOfGrid = prompt("Enter size of the grid from 1 to 100");
  drawGrid(sizeOfGrid);
  const newGrids = document.querySelectorAll('.grid');
  newGrids.forEach((newGrid) => {
    newGrid.addEventListener('mouseover', () => {
      newGrid.classList.add('mouseover');
    })
  })
});

