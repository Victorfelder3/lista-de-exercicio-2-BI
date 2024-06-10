function calculateAges() {
    const currentYear = new Date().getFullYear();

    const name1 = document.getElementById('name1').value.trim();
    const year1 = parseInt(document.getElementById('year1').value);
    const age1 = currentYear - year1;

    const name2 = document.getElementById('name2').value.trim();
    const year2 = parseInt(document.getElementById('year2').value);
    const age2 = currentYear - year2;

    const name3 = document.getElementById('name3').value.trim();
    const year3 = parseInt(document.getElementById('year3').value);
    const age3 = currentYear - year3;

    if (!name1 || isNaN(year1) || !name2 || isNaN(year2) || !name3 || isNaN(year3)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const people = [
        { name: name1, age: age1 },
        { name: name2, age: age2 },
        { name: name3, age: age3 }
    ];

    people.sort((a, b) => b.age - a.age);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Pessoa mais velha: ${people[0].name} - ${people[0].age} anos</p>
        <p>Segunda pessoa mais velha: ${people[1].name} - ${people[1].age} anos</p>
        <p>Terceira pessoa mais velha: ${people[2].name} - ${people[2].age} anos</p>
    `;
}