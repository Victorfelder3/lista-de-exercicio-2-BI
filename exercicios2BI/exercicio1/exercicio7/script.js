function compareNumbers() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira dois números inteiros válidos.');
        return;
    }

    let message = '';

    if (num1 > num2) {
        message = 'O primeiro número é maior que o segundo.';
    } else if (num1 < num2) {
        message = 'O primeiro número é menor que o segundo.';
    } else {
        message = 'Os dois números são iguais.';
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = message;
}