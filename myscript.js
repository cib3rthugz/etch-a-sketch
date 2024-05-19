const containerMain=document.querySelector(".container");
const buttonWrap = document.querySelector(".buttonWrapper");
let toggleRGB=false;
const buttonSetGrid = document.createElement("button");
buttonSetGrid.textContent = "Set Custom Grid Size";
let currentColor="red";
const buttonSetColor = document.createElement("button");
buttonSetColor.textContent = "Set Color";

let buttonToggleRGB = document.createElement("button");
buttonToggleRGB.textContent='RGB MODE OFF';

buttonToggleRGB.addEventListener("click", function()  {
    if (buttonToggleRGB.textContent=='RGB MODE OFF'){
        //alert
        console.log("RGB mode on!");
        toggleRGB=true;
        //console.log(toggleRGB);
        buttonToggleRGB.textContent='RGB MODE ON'
    }
    else{
        //alert
        //console.log("RGB mode off!");
        //console.log(toggleRGB);
        toggleRGB=false;
        buttonToggleRGB.textContent='RGB MODE OFF'
    }
});


let gridSize=16;

makeGrid(gridSize);


buttonSetGrid.addEventListener("click", (e) => {
    gridSize=prompt("Enter Grid size (<100):");
    
         containerMain.replaceChildren();
  
    makeGrid(gridSize);  
});

buttonSetColor.addEventListener("click", () =>{
    currentColor=prompt("Enter Color!");
});



buttonWrap.appendChild(buttonSetGrid);
buttonWrap.appendChild(buttonSetColor);
buttonWrap.appendChild(buttonToggleRGB);

function makeGrid(size){
    for(let i = 0; i<size; i++){
        let row = document.createElement("div");
        row.className = "row";
        row.style.cssText = "display: flex; flex: 1 1 auto; background-color: white;"
        for(let j = 0; j<size; j++){
            let column = document.createElement("div");
            column.className = "column";
            column.style.cssText = "flex: 1 1 auto; aspect-ratio: 1/1; background-color:white;"
            row.appendChild(column);
        }
        containerMain.appendChild(row);
    }
    let columns = document.querySelectorAll(".column");

    for(let i=0; i<columns.length; i++)
        columns[i].addEventListener("mouseover",(e) => {
       
            colorCell(e,currentColor,toggleRGB);
            
    });
}

function getRandomColor() {

    const letters = '0123456789ABCDEF';
  
    let color = '#';
  
  
    // Generate a random 6-digit hexadecimal color
  
    for (let i = 0; i < 6; i++) {
  
      color += letters[Math.floor(Math.random() * 16)];
  
    }
  
  
    return color;
  
  }


function colorCell(cell,color,toggleRGB){
    if(toggleRGB==false){
        if (cell.target.style.backgroundColor =="white" || cell.target.style.backgroundColor != currentColor){
            cell.target.style.opacity=  0.1;
            cell.target.style.backgroundColor = color;
        }
        else if (cell.target.style.opacity<1){
            cell.target.style.opacity = parseFloat(cell.target.style.opacity)+0.1;
        }
    }
    else{
        let tempColor = getRandomColor();
        if (cell.target.style.backgroundColor != tempColor){
            cell.target.style.backgroundColor = tempColor;
        }
    }

}
    
    
    
    