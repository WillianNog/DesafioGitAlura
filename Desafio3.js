//1       Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function imc(peso, altura) {
    let calcImc = (peso / (altura * altura)).toFixed(2);
    console.log(`O IMC PARA UMA PESSOA QUE TEM ${peso} KG DE PESO E ${altura} M DE ALTURA É DE ${calcImc}`);
    console.log(`Isso é classificado como: ${
        calcImc < 18.5 ? 'Abaixo do peso' :
        calcImc >= 18.5 && calcImc <= 24.9 ? 'Peso normal' :
        calcImc >= 24.91 && calcImc <= 29.9 ? 'Sobrepeso' :
        calcImc >= 29.91 && calcImc <= 34.9 ? 'Obesidade grau I' :
        calcImc >= 34.91 && calcImc <= 39.9 ? 'Obesidade grau II (severa)' :
        'Obesidade grau III (mórbida)'}\n`);
}
let peso = 93.00;
let altura = 1.80;

imc(peso, altura);

//2       Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(fator) {
    if (fator === 0) {
        return 1; // O fatorial de 0 é 1
    } else {
        return fator * fatorial(fator - 1);
    }
}
let fator = 5;
let resultfatorial = fatorial(fator);
console.log("O fatorial de", fator, "é", resultfatorial, "\n");


//3       Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function convert(dolar, cotacao) {
    real = (dolar * cotacao).toFixed(2);
    return console.log(`${dolar.toFixed(2)} dólares equivalem a ${real} reais na cotação de ${cotacao.toFixed(2)} `)
}
convert(12, 4.80) 

//4       Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.




//5       Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.





//6       Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada(numero) {
    // Verifica se o número fornecido é válido
    if (typeof numero !== 'number') {
        console.log('Por favor, forneça um número válido.');
        return;
    }

    // Exibe o cabeçalho da tabuada
    console.log(`Tabuada do ${numero}:`);

    // Calcula e exibe a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
mostrarTabuada(7);

// Exemplo de uso: Mostrar a tabuada do número 7
