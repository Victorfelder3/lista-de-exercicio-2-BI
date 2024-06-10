function calculate() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira dois números inteiros válidos.');
        return;
    }

    const sum = num1 + num2;
    const subtract = num1 - num2;
    const multiply = num1 * num2;
    const divide = num1 / num2;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Soma: ${num1} + ${num2} = ${sum}</p>
        <p>Subtração: ${num1} - ${num2} = ${subtract}</p>
        <p>Multiplicação: ${num1} * ${num2} = ${multiply}</p>
        <p>Divisão: ${num1} / ${num2} = ${divide}</p>
    `;
}