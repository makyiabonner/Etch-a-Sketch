let colorPicker = "colorPicker";
let colorBtn = document.getElementById("colorBtn");
let sizeValue = document.getElementById("sizeValue")
let slider = document.getElementById("sizeSlider").oninput = function(){
    let value = (this.value-this.min)/(this.max-this.min)*64;
    sizeValue.textContent = `${this.value} x ${this.value}`;
}