/* IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

IMC em adultos:
- Abaixo de 18.5 = abaixo do peso;
- Entre 18 e 25  = peso normal;
- Entre 25 e 30 = acima do peso;
- Entre 30 e 40 = obeso;
*/


const pesoEmKg = 56;
const altura = 1.80;
const imc = pesoEmKg / (altura * altura);

if (imc < 18.5) {
    console.log(imc);

} else if (imc >= 18 && imc <= 25) {
    console.log(imc);

} else {
    console.log(imc);

}
