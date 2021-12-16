const DEFAULT_LINES_COLOR = "#eeeeee";
const DEFAULT_BG_COLOR = "#ffffff";
const DEFAULT_MO_COLOR = "#000000";
const DEFAULT_GRID_SIZE = 16;

const container = document.querySelector(".main-container");

const customGridContainer = document.querySelector(".outer-box");
const applyBtn = document.querySelector(".apply-button");
const resetBtn = document.querySelector(".reset-button");
const eraserBtn = document.querySelector(".eraser-button");
const linesColor = document.querySelector("#lines");
const bgColor = document.querySelector("#bgColor");
let someBgColor = DEFAULT_BG_COLOR;
let someLinesColor = DEFAULT_LINES_COLOR;
let bgClr = DEFAULT_BG_COLOR;
let lineClr = DEFAULT_LINES_COLOR;

//let num = prompt('what Number');;

let gridSize = DEFAULT_GRID_SIZE;



let slider = document.querySelector("#sRange");
let output = document.querySelector("#grid-size");
output.innerHTML = '16x16';

slider.oninput = function() {
  
  gridSize = this.value;
  output.innerHTML = this.value + "x" + this.value;
  
}




customizeGrid();


function AppendElements(num) {
  const div = document.createElement("div");
  div.classList.add("gridContainer");
  container.append(div);

  for (let i = 0; i < num * num; i++) {
    let divI = document.createElement("div");
    divI.classList.add("mainGrid");
    div.append(divI);
    div.style.gridTemplateColumns = `repeat(${num}, ${700 / num}px)`;
    div.style.gridTemplateRows = `repeat(${num}, ${620 / num}px)`;
  }
}


function removeElements() {
    let gC = document.querySelector(".gridContainer");
    gC.remove();
  }

applyBtn.addEventListener("click", (e) => {
  bgClr = someBgColor;
  AppendElements(gridSize);
  let mDivs = document.querySelectorAll(".mainGrid");
  mDivs.forEach((hoverableElement) => {
    hoverableElement.addEventListener("mouseover", (e) => {
      hoverableElement.style.backgroundColor = bgClr;
    });
    for (i = 0; i < mDivs.length; ++i) {
      mDivs[i].style.borderColor = lineClr;
    }
  });
});



function mainGridBg(color) {
  let mDivs = document.querySelectorAll(".mainGrid");
  for (i = 0; i < mDivs.length; ++i) {
    mDivs[i].style.backgroundColor = color;
  }
}

function mainGridLine(color) {
  let mDivs = document.querySelectorAll(".mainGrid");
  for (i = 0; i < mDivs.length; ++i) {
    mDivs[i].style.borderColor = color;
  }
}

function customizeGrid() {
    for (let i = 0; i < 6; i++) {
      const div = document.createElement("div");
      customGridContainer.append(div);
      div.classList.add("box");
    }
  }

resetBtn.addEventListener('click', () => {
  mainGridBg(DEFAULT_BG_COLOR);
  mainGridLine(DEFAULT_LINES_COLOR);
});

eraserBtn.addEventListener('click', () => {

  removeElements();
});

