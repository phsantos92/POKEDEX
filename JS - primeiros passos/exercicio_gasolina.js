/* Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis, sendo elas:
1 - preço do etanol;
2 - preço da gasolina;
3 - tipo de combustível que está no seu carro;
4 - gasto médio de combustível do carro por km;
5 - distância em km da viagem
*/

const precoEtanol = 4.65;
const precoGasolina = 5.15;
const consumoMedio = 18;
const distancia = 500; 
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distancia / consumoMedio;

if(tipoCombustivel == 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto);

} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto);
}

