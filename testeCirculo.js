let circulo = document.getElementById('circulo');
circulo.style.width = '100px';
circulo.style.height = '100px';
showCalculations();

function clickRaio() {   
    var raioInput = document.getElementById('raio');
    var raio = raioInput.value + 'px';
    circulo.style.width = raio;
    circulo.style.height = raio;
    showCalculations(); // Mostra os cálculos dentro do círculo
    // Adicione a lógica para processar o raio aqui
    console.log('Raio:', raio);
}

function showCalculations() {
    var raio = parseInt(circulo.style.width);
    var area = Math.PI * raio * raio;
    var circunferencia = 2 * Math.PI * raio;
    circulo.innerHTML = `Área: ${area.toFixed(2)}px²<br>Circunferência: ${circunferencia.toFixed(2)}px`;
}
