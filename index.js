let colorPicker = "colorPicker";
let colorBtn = document.getElementById("colorBtn");
let rainbowBtn = document.getElementById("rainbowBtn");
let eraserBtn = document.getElementById("eraserBtn");
let clearBtn = document.getElementById("clearBtn");
let slider = document.getElementById("sizeSlider");
let sizeValue = document.getElementById("sizeValue");
let sizeSlider = document.getElementById("sizeSlider")
let button = document.getElementsByTagName("button");
let grid = document.getElementById("grid");
const gridBoxes = document.createElement('div');


//making slider functional
slider.addEventListener("input", function setupGrid(){
    sizeValue.textContent = `${this.value} x ${this.value}`; 
    grid.style.gridTemplateColumns = `repeat(${this.value},1fr)`;
    grid.style.gridTemplateRows = `repeat(${this.value}, 1fr)`;
    let a = this.value * this.value;
 
//using slider to add blocks to grid
    for(let i = 0; i < a; i++){   
        const gridBoxes = document.createElement('div');
         gridBoxes.className = "gridDivs";
          grid.append(gridBoxes);
        };
    });

//making modes clicked recognizable to host
colorBtn.onclick = function colorHighlighted(){ 
    colorBtn.classList.add("clicked");
    rainbowBtn.classList.remove("clicked");
    eraserBtn.classList.remove("clicked");}

rainbowBtn.onclick = function rainbowHighlighted(){
    colorBtn.classList.remove("clicked");
    rainbowBtn.classList.add("clicked");
    eraserBtn.classList.remove("clicked");
}

eraserBtn.onclick = function eraserHighlighted(){
    colorBtn.classList.remove("clicked");
    rainbowBtn.classList.remove("clicked");
    eraserBtn.classList.add("clicked")
}
//making boxes clicked recognizeable to host
