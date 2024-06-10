function verificarMeta() {
    // Obtém os valores inseridos pelo usuário
    var valorVendido = parseFloat(document.getElementById("valorVendido").value);
    var meta = parseFloat(document.getElementById("meta").value);
    var metaMinima = parseFloat(document.getElementById("metaMinima").value);
    
    // Verifica se os valores inseridos são válidos
    if (isNaN(valorVendido) || isNaN(meta) || isNaN(metaMinima) || valorVendido < 0 || meta < 0 || metaMinima < 0) {
        alert("Por favor, digite valores válidos para os campos.");
        return;
    }
    
    // Calcula os percentuais de atingimento da meta e da meta mínima
    var percentualMeta = (valorVendido / meta) * 100;
    var percentualMetaMinima = (valorVendido / metaMinima) * 100;
    
    // Exibe os resultados
    var resultado = document.getElementById("resultado");
    if (valorVendido >= meta) {
        resultado.innerHTML = "Parabéns! Você atingiu a meta.";
    } else if (valorVendido >= metaMinima) {
        resultado.innerHTML = "Você atingiu a meta mínima.";
    } else {
        resultado.innerHTML = "Você não atingiu nenhuma das metas.";
    }
    
    document.getElementById("percentualMeta").innerHTML = "Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%";
    document.getElementById("percentualMetaMinima").innerHTML = "Percentual de atingimento da meta mínima: " + percentualMetaMinima.toFixed(2) + "%";
}