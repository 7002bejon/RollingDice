function rollDice() {
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    num1 = parseInt((Math.random() * 6) + 1);
    num2 = parseInt((Math.random() * 6) + 1);
    num3 = num1 + num2
    para.textContent = "Num 1 = " + num1;
    para1.textContent = "Num 2 = " + num2;
    para2.textContent = "Result = " + num3;
    document.body.appendChild(para);
    document.body.appendChild(para1);
    document.body.appendChild(para2);
}
const button = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener("click", rollDice);
}

