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

// darker color
function colorGridDarker() {
  const currentGrid = document.querySelectorAll('.grid');
  let opacity = 0;
  let widthOfGrid = 100 / sizeOfGrid;
  let heightOfGrid = 100 / sizeOfGrid; 
  currentGrid.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      grid.classList.add('mouseover');
      if (opacity >= 0.999999999999) {
        opacity = 0;
        grid.setAttribute('style', `width: ${widthOfGrid}%; height: ${heightOfGrid}%; opacity: ${opacity + 0.1}`);
      } else {
        grid.setAttribute('style', `width: ${widthOfGrid}%; height: ${heightOfGrid}%; opacity: ${opacity + 0.1}`);
      }
      opacity += 0.1;
    });
  });
}

//function to get random number 
function randomNumberRGB () {
  const max = 256;
  const randomNumber = Math.floor(Math.random() * max);
  return randomNumber;
}

//random color function
function randomColor() {
  const currentGrid = document.querySelectorAll('.grid');
  let widthOfGrid = 100 / sizeOfGrid;
  let heightOfGrid = 100 / sizeOfGrid;
  currentGrid.forEach((grid) => {
    const R = randomNumberRGB();
    const G = randomNumberRGB();
    const B = randomNumberRGB();
    grid.addEventListener('mouseover', () => {
      grid.setAttribute('style', `width: ${widthOfGrid}%; height: ${heightOfGrid}%; background: rgb(${R},${G},${B})`);
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

//button for darker color
const buttonDarker = document.querySelector('.darker');
buttonDarker.addEventListener('click', () => {
  colorGridDarker();
});

//random color
const buttonRand = document.querySelector('.random');
buttonRand.addEventListener('click', () => {
  randomColor();
});