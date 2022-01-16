const container = document.querySelector('.container');

for (let i = 1; i < 17; i++) {
  const grid = document.createElement('div');
  grid.classList.add('grid');
  grid.textContent = i;
  container.appendChild(grid);
}