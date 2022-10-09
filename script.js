// Variables

let currentColor = '#000000'
let currentSize = 16

// Constants

const container = document.getElementById('container');
const slider = document.getElementById('myRange');
const output = document.getElementById('gridSize');

// Range Slider output 

output.innerText = slider.value +'x'+ slider.value;

slider.oninput = function() {
  output.innerText = this.value +"x"+ this.value;
};

// Function to create the divs inside the container

function makeGrid (gridNumber) {
  let gridArea = gridNumber * gridNumber;
  for (g = 1; g <= (gridArea); g++) {
    let cells = document.createElement('div')
    container.style.setProperty('--grid-rows', gridNumber);
    container.style.setProperty('--grid-cols', gridNumber); 
    container.insertAdjacentElement('beforeend', cells);
    cells.addEventListener('mouseover', colorCells);
  }};
 
  // Function to color the divs inside the container

  function colorCells() {
    if (currentColor === 'random') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = currentColor;
    }};

  function changeColor(choice) {
    currentColor = choice
  };

// Function to create the number of divs requested by the user

function pixelSize() {
  let cells = container.querySelectorAll('div')
  cells.forEach(cell => cell.remove());
  makeGrid(slider.value);
};

// Function for the slider to output the number of divs requested by the user

slider.addEventListener('mouseup', pixelSize);

window.onload = () => {
  makeGrid(currentSize)
}
