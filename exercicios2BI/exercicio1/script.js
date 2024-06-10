
function calculate() {
    const dollarRate = parseFloat(document.getElementById('dollarRate').value);

    if (isNaN(dollarRate) || dollarRate <= 0) {
        alert('Por favor, insira um valor válido para a cotação do dólar.');
        return;
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const rates = [1, 2, 5, 10];
    rates.forEach(rate => {
        const increasedRate = dollarRate * (1 + rate / 100);
        const result = document.createElement('p');
        result.textContent = `Se a cotação subisse ${rate}%: R$ ${increasedRate.toFixed(2)}`;
        resultsDiv.appendChild(result);
    });
}