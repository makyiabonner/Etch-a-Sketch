let colorPicker = "colorPicker";
let colorBtn = document.getElementById("colorBtn");
let rainbowBtn = document.getElementById("rainbowBtn");
let eraserBtn = document.getElementById("eraserBtn");
let clearBtn = document.getElementById("clearBtn");
let slider = document.getElementById("sizeSlider");
let sizeValue = document.getElementById("sizeValue");
let sizeSlider = document.getElementById("sizeSlider")
let grid = document.getElementById("grid");
const divSpace = document.createElement('div');


//making slider functional
slider.addEventListener("input", function setupGrid(){
    sizeValue.textContent = `${this.value} x ${this.value}`; 
    grid.style.gridTemplateColumns = `repeat(${this.value},1fr)`;
    grid.style.gridTemplateRows = `repeat(${this.value}, 1fr)`;
    let a = this.value * this.value;
    
    for(let i = 0; i < a; i++){   
        const divSpace = document.createElement('div');
         divSpace.className = "gridDivs";
          grid.append(divSpace);
        };
        console.log(a);
    });
    
//using slider to add blocks to grid

//making modes clicked recognizeable to host