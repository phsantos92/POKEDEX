/* Faça um programa que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o cálculo adequeado

Código Condição de pagamento:
1 - à vista débito, recebe 10% de desconto;
2 - Á vista no dinheiro ou pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal da etiqueta sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

VAMOS USAR UMA "ESCOLHA DE OPÇÕES"
*/

const precoEtiqueta = 100;
const formaDePagamento = 2;

if(formaDePagamento == 1){
    console.log("O preço final foi:", precoEtiqueta - (precoEtiqueta * 0.1));

} else if(formaDePagamento == 2) {
    console.log("O preço final foi:", precoEtiqueta - (precoEtiqueta * 0.15));
} else if(formaDePagamento == 3){
    console.log("O preço final foi:", precoEtiqueta);
} else {
    console.log("O preço final foi:", precoEtiqueta + (precoEtiqueta * 0.1));
}
