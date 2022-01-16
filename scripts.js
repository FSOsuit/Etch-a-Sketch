const container = document.querySelector('.container');

for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.textContent = j;
    container.appendChild(grid);
  }
  
}
