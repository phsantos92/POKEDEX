/* Dado um conjunto de números, imprima-os na tela e determine qual é o maior valor
    números: 5, 18, 78, 65, 90. Qual é o maior?
*/

const { gets, print } = require('./funcoes-auxiliares');    // objeto funcoes recebe o arquivo a ser importado.

const numerosSorteados = [];      //Inicializando uma lista vazia

let maiorValor = 0      //Variável iniciando com 0 para ser atribuída ao maior valor no resultado da comparação

for (let i = 0; i < 5; i++) {       //enquanto i for menor que os 5 números
    const numeroSorteado = gets();     //variável número sorteado recebe o objeto gets, que tem tem como retorno o número
    numerosSorteados.push(numeroSorteado);

    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}


print(maiorValor);

//preciso receber 5 números...

print(gets());