function calculate() {
    const numPeople = parseInt(document.getElementById('numPeople').value);

    if (isNaN(numPeople) || numPeople <= 0) {
        alert('Por favor, insira um número válido de pessoas.');
        return;
    }

    const eggsPerPerson = 2;
    const cheesePerPerson = 50; // em gramas

    const totalEggs = numPeople * eggsPerPerson;
    const totalCheese = numPeople * cheesePerPerson;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Para ${numPeople} pessoas, você precisará de:</p>
        <ul>
            <li>${totalEggs} ovos</li>
            <li>${totalCheese} gramas de queijo</li>
        </ul>
    `;
}