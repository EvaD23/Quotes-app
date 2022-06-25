function changeColor() {
    document.body.style = `background-color: rgb(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`;
}

function generateNumber() {
    return Math.round(Math.random() * 255); // сгенерить число от 0 до 255.  
}
