const container = document.querySelector('.container');

//creates a grid 16 x 16
for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.textContent = j;
    let widthOfGrid = 100 / 16;
    let heightOfGrid = 100 / 16; 
    grid.setAttribute('style', `width: ${widthOfGrid}%; height: ${heightOfGrid}%`);
    container.appendChild(grid);
  }
}

//chages color of each moused over div
const grids = document.querySelectorAll('.grid');
grids.forEach((grid) => {
  grid.addEventListener('mouseover', () => {
    grid.classList.add('mouseover');
  })
});