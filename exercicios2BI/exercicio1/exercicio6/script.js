function checkGrade() {
    const finalGrade = parseFloat(document.getElementById('finalGrade').value);

    if (isNaN(finalGrade) || finalGrade < 0 || finalGrade > 10) {
        alert('Por favor, insira uma nota válida entre 0 e 10.');
        return;
    }

    let message = '';

    if (finalGrade > 6) {
        message = 'Aprovado';
    } else if (finalGrade >= 4 && finalGrade <= 6) {
        message = 'Precisa fazer prova substitutiva';
    } else {
        message = 'Reprovado';
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = message;
}