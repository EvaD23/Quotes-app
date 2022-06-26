
function changeColor() {
    let firstColor = new Color();
    let secondColor = new Color();
    document.body.style = `background: linear-gradient(${firstColor.getRGB()}, ${secondColor.getRGB()});`;
    let buttonArr = document.querySelectorAll("button");

    buttonArr.forEach(button => {
        button.style.background = firstColor.getRGB();
        if (firstColor.isDark()) {
            button.style.color = "white";
        }
        else {
            button.style.color = "black";
        }

    });    // documen.query... вернет массив кнопок. forEach перебирает массив и для каждого элемента выполняет  переданную функцию.

}

function changeQuote() {
    let indexRandom = generateNumber(QUOTES.length - 1);
    let { q: quote, a: author } = QUOTES[indexRandom];
    document.querySelector("q").innerText = quote;
    document.querySelector("cite").innerText = author;
}



function generateNumber(num) {
    return Math.round(Math.random() * num); // сгенерить число от 0 до num.  
}

class Color {
    constructor() {
        this.red = generateNumber(255);
        this.green = generateNumber(255);
        this.blue = generateNumber(255);
    }
    getRGB() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }
    isDark() {
        const LIMIT = 100;
        return this.red < LIMIT && this.green < LIMIT && this.blue < LIMIT;

    }
}

// TODO: Описать как создавать класы и объекты: 
 // TODO: Описать fetch
 //TODO: Описать promise - цепочка действий 