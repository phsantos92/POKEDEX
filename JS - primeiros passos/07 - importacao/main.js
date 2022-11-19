/* Dado um conjunto de números, imprima-os na tela e determine qual é o maior valor
    números: 5, 18, 78, 65, 90. Qual é o maior?
*/

const { gets, print } = require('./funcoes-auxiliares');    // objeto funcoes recebe o arquivo a ser importado.


const quantidadeDeNumeros = gets();     //quantidade de números vai receber 5 números
let maiorNota = 0;

for (let i = 0; i < quantidadeDeNumeros; i++) {        //para cada número recebido, será feita a comparação.

    const notas = gets();
    if(notas > maiorNota){
        maiorNota = notas;
    }
}

print(maiorNota);