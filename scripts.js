const container = document.querySelector('.main-container');
const box = document.querySelector('.box');

let num = 6;


    AppendElements(num);
    
    

function AppendElements(num) {
    let div = document.createElement('div');
    div.classList.add('gridContainer');
    container.append(div);
    for (let i = 0;i < num * num; i++) {
        
        let divI = document.createElement('div');
        
        divI.classList.add('box');
        div.append(divI);
        div.style
        .setProperty('--repeatNumber', num);  
        div.style
        .gridTemplateColumns = `repeat(${num}, ${700 / num}px)`;  
        div.style
        .gridTemplateRows = `repeat(${num}, ${600 / num}px)`;  
        }
                
    }


    
        

    




