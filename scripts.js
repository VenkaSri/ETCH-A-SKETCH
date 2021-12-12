const container = document.querySelector('.main-container');
const customGridContainer = document.querySelector('.outer-box');

const linesColor = document.querySelector('#lines');
const bgColor = document.querySelector('#bgColor');







let num = prompt('what Number');;

    
    AppendElements(num);
    
    
function AppendElements(num) {
    const div = document.createElement('div');
    div.classList.add('gridContainer');
    container.append(div);

    for (let i = 0;i < num * num; i++) {
        resizableDivs();            
    }
}



function resizableDivs() {
    let divI = document.createElement('div');
    divI.classList.add('mainGrid');
    div.append(divI);
    div.style.setProperty('--repeatNumber', num);  
    div.style.gridTemplateColumns = `repeat(${num}, ${700 / num}px)`;  
    div.style.gridTemplateRows = `repeat(${num}, ${600 / num}px)`;
}




  





