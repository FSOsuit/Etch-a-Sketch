const container = document.querySelector('.container');
const grids = document.querySelectorAll('.grid');

//draws grid
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

//deletes grid
function deleteGrid() {
  const oldGrid = document.querySelectorAll('.grid');
  oldGrid.forEach((grid) => {
    grid.remove();
  });
}

//adds event listener to each created div in grid
function colorGrid() {
  const currentGrid = document.querySelectorAll('.grid');
  currentGrid.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      grid.classList.add('mouseover');
    });
  });
}

let sizeOfGrid = 16; // starting grid size
drawGrid(sizeOfGrid); // draws initial grid



//chages color of each moused over initial div
colorGrid();

//resets the grid
const button = document.querySelector('.resetBtn');
button.addEventListener('click', () => {
  deleteGrid(grids); //removes grid
  sizeOfGrid = prompt("Enter size of the grid from 1 to 100");
  while (sizeOfGrid <= 0 || sizeOfGrid > 100) {
    sizeOfGrid = prompt("Enter size of the grid from 1 to 100");
  }
  drawGrid(sizeOfGrid); //draws new grid
  colorGrid(); //allows color the new grid
});

