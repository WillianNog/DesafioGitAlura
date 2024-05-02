let ret = document.getElementById('retangulo');
ret.style.width = '100px';
ret.style.height = '100px';
showCalculations();

function clickLargura() {   
    var larguraInput = document.getElementById('largura');
    var largura = larguraInput.value + 'px';
    ret.style.width = largura;
    showCalculations(); // Mostra os cálculos dentro do retângulo
    // Adicione a lógica para processar a largura aqui
    console.log('Largura:', largura);
}

function clickComprimento() {
    var comprimentoInput = document.getElementById('comprimento');
    var comprimento = comprimentoInput.value + 'px';
    ret.style.height = comprimento;
    showCalculations(); // Mostra os cálculos dentro do retângulo
    // Adicione a lógica para processar o comprimento aqui
    console.log('Comprimento:', comprimento);
}

function showCalculations() {
    var largura = parseInt(ret.style.width);
    var comprimento = parseInt(ret.style.height);
    var area = largura * comprimento;
    var perimetro = 2 * (largura + comprimento);
    ret.innerHTML = `Área: ${area}px²<br>Perímetro: ${perimetro}px`;
}
