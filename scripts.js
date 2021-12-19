const DEFAULT_LINES_COLOR = "#eeeeee";
const DEFAULT_BG_COLOR = "#FFFFFF";
const DEFAULT_MO_COLOR = "#000000";
const DEFAULT_GRID_SIZE = 16;

const container = document.querySelector(".main-container");
const customGridContainer = document.querySelector(".outer-box");
const applyBtn = document.querySelector(".apply-button");
const resetBtn = document.querySelector(".reset-button");
const colorBtn = document.querySelector(".color-button");
const eraserBtn = document.querySelector(".eraser-button");
const linesColor = document.querySelector("#lines");
const bgColor = document.querySelector("#bgColor");
const year = document.querySelector(".year");
let someBgColor = DEFAULT_MO_COLOR;
let someLinesColor = DEFAULT_LINES_COLOR;
let someGridSize = DEFAULT_GRID_SIZE;
let gridSize = DEFAULT_GRID_SIZE;
let bgClr = DEFAULT_MO_COLOR;
let lineClr = DEFAULT_LINES_COLOR;

let slider = document.querySelector("#sRange");
let output = document.querySelector("#grid-size");
output.innerHTML = "16x16";

slider.oninput = function () {
  someGridSize = this.value;

  output.innerHTML = this.value + "x" + this.value;
};

AppendElements(DEFAULT_GRID_SIZE);
customizeGrid();
changeBgColor();
changeLineColor();

function AppendElements(num) {
  const div = document.createElement("div");
  div.classList.add("gridContainer");
  container.append(div);

  for (let i = 0; i < num * num; i++) {
    let divI = document.createElement("div");
    divI.classList.add("mainGrid");
    div.append(divI);
    div.style.setProperty("--repeatNumber", num);
    div.style.gridTemplateColumns = `repeat(${num}, ${700 / num}px)`;
    div.style.gridTemplateRows = `repeat(${num}, ${620 / num}px)`;
  }
}
function customizeGrid() {
  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    customGridContainer.append(div);
    div.classList.add("box");
  }
}

linesColor.addEventListener("input", function (e) {
  let box = document.querySelectorAll(".box");
  for (i = 0; i < box.length; ++i) {
    box[i].style.borderColor = this.value;
    someLinesColor = this.value;
    lineClr = this.value;
  }
});

let bDivs = document.querySelectorAll(".box");
bDivs.forEach((hoverableElement) => {
  bgColor.addEventListener("input", function (e) {
    someBgColor = this.value;

    hoverableElement.addEventListener("mouseover", (e) => {
      hoverableElement.style.backgroundColor = someBgColor;

      console.log(someBgColor);
    });
  });
});

applyBtn.addEventListener("click", (e) => {
  checkMatch();
  if (someGridSize !== gridSize) {
    removeElements();
    AppendElements(someGridSize);
    someGridSize = gridSize;
  }

  bgClr = someBgColor;
  let mDivs = document.querySelectorAll(".mainGrid");
  mouserOverMainGrid(bgClr);
  for (i = 0; i < mDivs.length; ++i) {
    mDivs[i].style.borderColor = lineClr;
  }
});

function changeBgColor() {
  mouserOverMainGrid(DEFAULT_MO_COLOR);
  mouserOverCustomizeableGrid(DEFAULT_MO_COLOR);
}

function changeLineColor() {
  let mDivs = document.querySelectorAll(".mainGrid");
  for (i = 0; i < mDivs.length; ++i) {
    mDivs[i].style.borderColor = DEFAULT_LINES_COLOR;
  }
}

function mouserOverMainGrid(color) {
  let mDivs = document.querySelectorAll(".mainGrid");
  mDivs.forEach((hoverableElement) => {
    hoverableElement.addEventListener("mouseover", (e) => {
      hoverableElement.style.backgroundColor = color;
    });
  });
}

function mouserOverCustomizeableGrid(color) {
  let mDivs = document.querySelectorAll(".box");
  mDivs.forEach((hoverableElement) => {
    hoverableElement.addEventListener("mouseover", (e) => {
      hoverableElement.style.backgroundColor = color;
    });
  });
}

function checkMatch() {
  if (someBgColor !== bgClr) {
    let mDivs = document.querySelectorAll(".mainGrid");
    for (i = 0; i < mDivs.length; ++i) {
      mDivs[i].style.backgroundColor = "#ffffff";
    }
  }
}

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

function resetPreviewGrid() {
  let mDivs = document.querySelectorAll(".box");
  for (i = 0; i < mDivs.length; ++i) {
    mDivs[i].style.backgroundColor = "#ffffff";
    mDivs[i].style.borderColor = "#eeeeee";
  }
}

resetBtn.addEventListener("click", () => {
  removeElements();
  AppendElements(DEFAULT_GRID_SIZE);
  mouserOverMainGrid(DEFAULT_MO_COLOR);
  mainGridLine(DEFAULT_LINES_COLOR);
  output.innerHTML = "16x16";
  slider.value = 16;
  bgClr = DEFAULT_MO_COLOR;
  someBgColor = DEFAULT_MO_COLOR;
  someLinesColor = DEFAULT_LINES_COLOR;
  lineClr = DEFAULT_LINES_COLOR;
  bgColor.value = DEFAULT_MO_COLOR;
  linesColor.value = DEFAULT_LINES_COLOR;
  resetPreviewGrid();
});

eraserBtn.addEventListener("click", () => {
  mouserOverMainGrid(DEFAULT_BG_COLOR);
});

function removeElements() {
  let gC = document.querySelector(".gridContainer");
  gC.remove();
}

function colorMode() {
  let mDivs = document.querySelectorAll(".mainGrid");
  mDivs.forEach((hoverableElement) => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    hoverableElement.addEventListener("mouseover", (e) => {
      hoverableElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
  });
}

colorBtn.addEventListener("click", () => {
  mainGridBg(DEFAULT_BG_COLOR);
  colorMode();
});

const date = new Date();
year.innerHTML = date.getFullYear();