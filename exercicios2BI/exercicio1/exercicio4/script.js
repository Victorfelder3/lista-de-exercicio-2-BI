function calculate() {
    const sabor1 = document.getElementById('sabor1').value.trim();
    const sabor2 = document.getElementById('sabor2').value.trim();
    const sabor3 = document.getElementById('sabor3').value.trim();
    const sabor4 = document.getElementById('sabor4').value.trim();
    const refrigerantes = parseInt(document.getElementById('refrigerantes').value);

    if (!sabor1 || !sabor2 || !sabor3 || !sabor4) {
        alert('Por favor, preencha todos os sabores de pizza.');
        return;
    }

    if (isNaN(refrigerantes) || refrigerantes < 0) {
        alert('Por favor, insira uma quantidade válida de refrigerantes.');
        return;
    }

    const precoPizza = 12.00;
    const precoRefrigerante = 7.00;

    const totalPizzas = 4 * precoPizza;
    const totalRefrigerantes = refrigerantes * precoRefrigerante;
    const valorTotal = totalPizzas + totalRefrigerantes;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Sabores escolhidos:</p>
        <ul>
            <li>${sabor1}</li>
            <li>${sabor2}</li>
            <li>${sabor3}</li>
            <li>${sabor4}</li>
        </ul>
        <p>Total a pagar: R$ ${valorTotal.toFixed(2)}</p>
    `;
}