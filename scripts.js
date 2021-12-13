const DEFAULT_LINES_COLOR = '#000000';
const DEFAULT_BG_COLOR = '#ffffff';
const DEFAULT_GRID_SIZE = 16;



const container = document.querySelector('.main-container');
const customGridContainer = document.querySelector('.outer-box');
const applyBtn = document.querySelector('.apply-button');

const linesColor = document.querySelector('#lines');
const bgColor = document.querySelector('#bgColor');
let someBgColor = DEFAULT_BG_COLOR;
let someLinesColor = DEFAULT_GRID_SIZE;
let changedBgColor = DEFAULT_BG_COLOR;
let changedLinesColor = DEFAULT_GRID_SIZE;






//let num = prompt('what Number');;

    
AppendElements(DEFAULT_GRID_SIZE);
customizeGrid();
changeBgColor();
changeLineColor();

    
    
function AppendElements(num) {
    const div = document.createElement('div');
    div.classList.add('gridContainer');
    container.append(div);

    for (let i = 0;i < num * num; i++) {
        let divI = document.createElement('div');
        divI.classList.add('mainGrid');
        div.append(divI);
        div.style.setProperty('--repeatNumber', num);  
        div.style.gridTemplateColumns = `repeat(${num}, ${700 / num}px)`;  
        div.style.gridTemplateRows = `repeat(${num}, ${620 / num}px)`;           
    }
}
function customizeGrid() {
    
    for (let i = 0; i < 6; i++) {
        const div = document.createElement('div');
        customGridContainer.append(div);
        div.classList.add('box');
                
    }  
}

linesColor.addEventListener('input', function(e) {
    let box = document.querySelectorAll('.box');
    for (i = 0; i < box.length; ++i) {
        box[i].style.borderColor = this.value;
        someLinesColor = this.value;
        changedLinesColor = someLinesColor;
    }
});


 



let bDivs = document.querySelectorAll('.box');
bDivs.forEach((hoverableElement) => {
    bgColor.addEventListener('input', function(e) {
        someBgColor = this.value;
        changedBgColor = someBgColor;
        hoverableElement.addEventListener('mouseover', (e) => {
            hoverableElement.style.backgroundColor = someBgColor;
            
            console.log(someBgColor);
        }); 
    });
});





applyBtn.addEventListener('click', (e) => {
    if (someBgColor !== changedBgColor && someLinesColor !== changedLinesColor) {
        clearCurrentBgColor();
    }
    let mDivs = document.querySelectorAll('.mainGrid');
mDivs.forEach((hoverableElement) => {
        hoverableElement.addEventListener('mouseover', (e) => {
        hoverableElement.style.backgroundColor = someBgColor;    
            
    });
    for (i = 0; i < mDivs.length; ++i) {
        mDivs[i].style.borderColor = someLinesColor;
        
    } 
});
});

function changeBgColor() {
let mDivs = document.querySelectorAll('.mainGrid');
mDivs.forEach((hoverableElement) => {
        hoverableElement.addEventListener('mouseover', (e) => {
        hoverableElement.style.backgroundColor = '#000000';          
    });
});
}

function changeLineColor() {
    let mDivs = document.querySelectorAll('.mainGrid');
    for (i = 0; i < mDivs.length; ++i) {
        mDivs[i].style.borderColor = DEFAULT_LINES_COLOR;
    }
}

function clearCurrentBgColor() {
    let box = document.querySelectorAll('.mainGrid');
    for (i = 0; i < box.length; ++i) {
        box[i].style.borderColor = '#000000';
        box[i].style.backgroundColor = '#ffffff';
        
    }
}





    




