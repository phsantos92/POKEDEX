/* Fa�a um algoritmo que dado as 3 notas tiradas por um aluno, calcule
 * e imprima sua m�dia e sua classifica��o conforme a tabela:
 * 
 * Classifica��o:
 * - M�dia menor que 5 --> reprova��o;
 * - M�dia entre 5 e 7 --> recupera��o;
 * - M�dia acima de 7 --> passou;
 * */

const n1 = 4;
const n2 = 7;
const n3 = 10;

const media = (n1 + n2 + n3) / 3;

if (media < 5) {
    console.log("reprova��o!");
} else if (media >= 5 && media > 7) {
    consol.log("recupera��o!");
} else {
    console.log("passou!");
}