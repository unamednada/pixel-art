const colorArray = Array.from(document.querySelector('#color-palette').children);
let mouseIsDown = false;

function createColorArray() {
  const colors = [];
  for (let i = 0; i < 3; i += 1) {
    let color;
    do {
      color = Math.floor(Math.random() * 254);
    } while (colors.includes(color));
    colors.push(color);
  }
  return colors;
}

function setBGColors() {
  let newColors;
  colorArray[0].style.backgroundColor = 'black';
  colorArray[0].classList.add('selected');
  for (let i = 1; i < colorArray.length; i += 1) {
    newColors = createColorArray();
    colorArray[i].style.backgroundColor = `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
  }
}

window.onload = setBGColors;

const table = document.querySelector('#pixel-board');
let n = 10;
function createPixelBoard() {
  for (let i = 0; i < n; i += 1) {
    const row = document.createElement('tr');
    table.appendChild(row);
    for (let j = 0; j < n; j += 1) {
      const column = document.createElement('td');
      column.className = 'pixel';
      row.appendChild(column);
    }
  }
}

createPixelBoard();

function pickColor(event) {
  for (let i = 0; i < colorArray.length; i += 1) {
    if (Array.from(colorArray[i].classList).includes('selected')) {
      colorArray[i].classList.remove('selected');
    }
  }
  const selectedColor = event.target;
  if (selectedColor.id !== 'color-palette') {
    selectedColor.classList.add('selected');
  }
}

const colorPallete = document.querySelector('#color-palette');
colorPallete.addEventListener('click', pickColor);

function paintPixel(event) {
  const pixel = event.target;
  if (pixel.className === 'pixel' && mouseIsDown) {
    pixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
}

table.addEventListener('mousedown', () => { mouseIsDown = true; });
table.addEventListener('mouseup', () => { mouseIsDown = false; });
table.addEventListener('mouseover', paintPixel);
table.addEventListener('click', (event) => {
  mouseIsDown = true;
  paintPixel(event);
  mouseIsDown = false;
});

function clearBoard() {
  const pixelArray = Array.from(document.querySelectorAll('.pixel'));
  for (let i = 0; i < pixelArray.length; i += 1) {
    pixelArray[i].style.backgroundColor = 'white';
  }
}

const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', clearBoard);

const generateButton = document.querySelector('#generate-board');
const inputSize = document.querySelector('#board-size');

// Fonte de clearPreviousBoard : https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript

function clearPreviousBoard() {
  table.innerHTML = '';
}

function changeBoardSize() {
  if (!+inputSize.value) {
    window.alert('Board Inválido!');
  } else {
    n = +inputSize.value;
    if (n < 5) {
      n = 5;
    } else if (n > 50) {
      n = 50;
    }
    clearPreviousBoard();
    createPixelBoard();
  }
}

generateButton.addEventListener('click', changeBoardSize);
