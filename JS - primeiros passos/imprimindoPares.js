// 1 - Crie um programa que percorre uma lista e imprima os números pares.

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= lista.length; i++) {
    const numeroLista = lista[i];

    if(numeroLista % 2 == 0){
        const pares = numeroLista;
        console.log(pares);
    }
    
}