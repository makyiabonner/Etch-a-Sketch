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

//making slider functional
slider.addEventListener("input", function setupGrid(){
    sizeValue.textContent = `${this.value} x ${this.value}`; 
    grid.style.gridTemplateColumns = `repeat(${this.value},1fr)`;
    grid.style.gridTemplateRows = `repeat(${this.value}, 1fr)`;
    let valueSquared = this.value * this.value;
 
//using slider to add blocks to grid
    for(let i = 0; i < valueSquared; i++){   
        const gridBoxes = document.createElement('div');
         grid.style.background = "white";
          grid.appendChild(gridBoxes).classList.add("gridDivs");
    }

//making modes clicked recognizable to host
colorBtn.onclick = function colorHighlighted(){ 
    colorBtn.classList.add("clicked");
    rainbowBtn.classList.remove("clicked");
    eraserBtn.classList.remove("clicked");

//making Color Button Grid boxes clicked recognizeable to host
    if(colorBtn.classList.contains("clicked")){
        let boxes = grid.querySelectorAll(".gridDivs");
        boxes.forEach(boxes => boxes.addEventListener('mouseover', ()=> {
            boxes.style.background = colorPicker.value;
        }))}
}

rainbowBtn.onclick = function rainbowHighlighted(){
    colorBtn.classList.remove("clicked");
    rainbowBtn.classList.add("clicked");
    eraserBtn.classList.remove("clicked");

//making Rainbow Button Grid boxes clicked recognizeable to host
    if(rainbowBtn.classList.contains("clicked")){
        let boxes = grid.querySelectorAll(".gridDivs");
        boxes.forEach(boxes => boxes.addEventListener('mouseover', ()=> {
            let r = Math.floor(Math.random()*255);
            let g = Math.floor(Math.random()*255);
            let b = Math.floor(Math.random()*255);
            boxes.style.background = `rgb(${r},${g},${b})`;
    }))}
}

eraserBtn.onclick = function eraserHighlighted(){
    colorBtn.classList.remove("clicked");
    rainbowBtn.classList.remove("clicked");
    eraserBtn.classList.add("clicked");

//making Eraser Button Grid boxes clicked recognizeable to host
    if(eraserBtn.classList.contains("clicked")){
        let boxes = grid.querySelectorAll(".gridDivs");
        boxes.forEach(boxes => boxes.addEventListener('mouseover', ()=> {
            boxes.style.background = "white";
        }))}
}
//making Clear Button Clears Grid boxes  host
    let boxes = grid.querySelectorAll(".gridDivs");
    boxes.forEach(boxes => clearBtn.addEventListener('click', ()=> {
        boxes.style.background = "white";
}))})
        
/* Clear Mode isn't highlighted because of brief usage */




