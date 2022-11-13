/* IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

IMC em adultos:
- Abaixo de 18.5 = abaixo do peso;
- Entre 18 e 25  = peso normal;
- Entre 25 e 30 = acima do peso;
- Entre 30 e 40 = obeso
- Acima de 40 = obsesidade grave;
*/

function calculaIMC(peso, altura) {  // os parâmetros são aquilo que você vai precisar passar pra função ser operacionalizada

    return peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {   // para classificar, só preciso da informação do imc e jogar nos condicionais
    if (imc < 18.5) {
        return 'Abaixo do peso'
    } else if (imc <= 18 && imc < 25) {
        return 'Peso normal'
    } else if (imc <= 30 && imc <= 40) {
        return 'Obeso'
    } else {
        return 'Obesidade grave'
    }
}


function main() {
    const peso = 100;
    const altura = 1.80;

    const imc = calculaIMC(peso, altura);
    console.log(classificarIMC(imc));

}

main(); // quando se usa a função main, é necessário invocá-la para usar o programa. 