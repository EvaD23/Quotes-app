function changeColor() {
    document.body.style = `background: linear-gradient(${generateRGB()}, ${generateRGB()});`;

}

function generateNumber() {
    return Math.round(Math.random() * 255); // сгенерить число от 0 до 255.  
}

function generateRGB() {
    return `rgb(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`;
}
