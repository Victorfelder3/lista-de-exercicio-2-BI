function calcularTurmas() {
    // Obtém o número total de alunos e o número de turmas desejadas
    var totalAlunos = parseInt(document.getElementById("totalAlunos").value);
    var totalTurmas = parseInt(document.getElementById("totalTurmas").value);
    
    // Verifica se os valores inseridos são válidos
    if (isNaN(totalAlunos) || isNaN(totalTurmas) || totalAlunos <= 0 || totalTurmas <= 0) {
        alert("Por favor, digite valores válidos para o número de alunos e turmas.");
        return;
    }
    
    // Calcula a quantidade de alunos por turma e quantos alunos ficarão "sem turma"
    var alunosPorTurma = Math.floor(totalAlunos / totalTurmas);
    var alunosSemTurma = totalAlunos % totalTurmas;
    
    // Exibe os resultados
    document.getElementById("resultado").innerHTML = "Cada turma terá " + alunosPorTurma + " aluno(s).";
    document.getElementById("alunosSemTurma").innerHTML = "Alunos sem turma: " + alunosSemTurma;
}