const container = document.querySelector('.main-container');
const customGridContainer = document.querySelector('.outer-box');

const linesColor = document.querySelector('#lines');
const bgColor = document.querySelector('#bgColor');
let someBgColor = '#eee';
let someLinesColor = '#eee';

customizeGrid();




//let num = prompt('what Number');;

    
  //  AppendElements(num);
    
    
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
        div.style.gridTemplateRows = `repeat(${num}, ${600 / num}px)`;           
    }
}

linesColor.addEventListener('input', function(e) {
    let box = document.querySelectorAll('.box');
    for (i = 0; i < box.length; ++i) {
        box[i].style.borderColor = this.value;
    }
});



function customizeGrid() {
    
    for (let i = 0; i < 6; i++) {
        const div = document.createElement('div');
        customGridContainer.append(div);
        div.classList.add('box');        
    }

    
} 
let divs = document.querySelectorAll('.box');
divs.forEach((hoverableElement) => {
    bgColor.addEventListener('input', function(e) {
        someBgColor = this.value;
        hoverableElement.addEventListener('mouseover', (e) => {
            hoverableElement.style.backgroundColor = this.value;
            
            console.log(someBgColor);
        }); 
    });
});

    
document.querySelector('.p').addEventListener('click', (e) => {
    document.querySelector('.p').style.color = someBgColor;
});



