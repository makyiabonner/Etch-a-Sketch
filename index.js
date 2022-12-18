let colorPicker = document.getElementById("colorPicker");
let colorBtn = document.getElementById("colorBtn");
let rainbowBtn = document.getElementById("rainbowBtn");
let eraserBtn = document.getElementById("eraserBtn");
let clearBtn = document.getElementById("clearBtn");
let slider = document.getElementById("sizeSlider");
let sizeValue = document.getElementById("sizeValue");
let sizeSlider = document.getElementById("sizeSlider")
let button = document.getElementsByTagName("button");
let grid = document.getElementById("grid");
let gridBoxes = document.createElement('div');

let DEFAULT_SIZE = 16;
let currentMode
let currentSize = DEFAULT_SIZE;

function boxColor(mode){
    //making Color Button Grid boxes clicked recognizeable to host
    if (currentMode == "colorBtn"){
        mode.target.style.background = colorPicker.value;
    }
    //making Rainbow Button Grid boxes clicked recognizeable to host
    else if (currentMode == "rainbowBtn"){
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
            
        mode.target.style.background = `rgb(${r},${g},${b})`;
    }
    else if (currentMode == "eraserBtn"){
        mode.target.style.background = "white";
    }
}

//making modes clicked recognizable to host
function clickedMode(mode){
    currentMode = mode;
    if (currentMode == "colorBtn"){
        colorBtn.classList.add("clicked");
        rainbowBtn.classList.remove("clicked");
        eraserBtn.classList.remove("clicked");
    }
    else if (currentMode == "rainbowBtn"){
        colorBtn.classList.remove("clicked");
        rainbowBtn.classList.add("clicked");
        eraserBtn.classList.remove("clicked");
    }
    else if (currentMode == "eraserBtn"){
        colorBtn.classList.remove("clicked");
        rainbowBtn.classList.remove("clicked");
        eraserBtn.classList.add("clicked");
    }
/* Clear Mode isn't highlighted because of brief usage */
}

//making slider functional
slider.addEventListener("input", (sliderVal) => setupGrid(sliderVal.target.value));

function setupGrid(value){
    sizeValue.textContent = `${value} x ${value}`; 
    grid.style.gridTemplateColumns = `repeat(${value},1fr)`;
    grid.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    grid.innerHTML = ""
//using slider to add blocks to grid
    for(let i = 0; i < value * value; i++){   
        const gridBoxes = document.createElement('div');
         grid.style.background = "white";
         gridBoxes.addEventListener("mouseover", boxColor);
          grid.appendChild(gridBoxes).classList.add("gridDivs");
    }
}

//making Clear Button Clears Grid boxes for host
function clearGrid(){
    let boxes = grid.querySelectorAll(".gridDivs");
    boxes.forEach(boxes => clearBtn.addEventListener('click', ()=> {
        boxes.style.background = "white";
}))}

colorBtn.onclick = () => clickedMode("colorBtn");
rainbowBtn.onclick = () => clickedMode("rainbowBtn");
eraserBtn.onclick = () => clickedMode("eraserBtn");
clearBtn.onclick = () => clearGrid();

window.onload = setupGrid(DEFAULT_SIZE);