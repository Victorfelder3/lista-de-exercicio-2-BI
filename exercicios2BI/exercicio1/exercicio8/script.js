function verificarParOuImpar() {
    // Obtém o número digitado pelo usuário
    var numero = document.getElementById("numero").value;
    
    // Verifica se o número é válido
    if (numero === "" || isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }
    
    // Verifica se o número é par ou ímpar usando o operador %
    if (numero % 2 === 0) {
        alert(numero + " é um número PAR.");
    } else {
        alert(numero + " é um número ÍMPAR.");
    }
}