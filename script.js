function rollDice() {
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const num1 = (Math.random() * 6) + 1;
    const num2 = (Math.random() * 6) + 1;
    para.textContent = num1;
    para1.textContent = num2;
    para2.textContent = num1 + num2;
}
const button = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener("click", rollDice);
}
