/* Faça um algoritmo que dado as 3 notas tiradas por um aluno, calcule
 * e imprima sua média e sua classificação conforme a tabela:
 * 
 * Classificação:
 * - Média menor que 5 --> reprovação;
 * - Média entre 5 e 7 --> recuperação;
 * - Média acima de 7 --> passou;
 * */

const n1 = 4;
const n2 = 7;
const n3 = 10;

const media = (n1 + n2 + n3) / 3;

if (media < 5) {
    console.log("reprovação!");
} else if (media >= 5 && media > 7) {
    consol.log("recuperação!");
} else {
    console.log("passou!");
}