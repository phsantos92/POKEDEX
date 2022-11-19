const entradas = [5, 18, 78, 65, 90];   //criando uma lista com os números informados
let i = 0;

function gets(){    //é aqui que será resolvida a lógica para determinar o maior número
    const numero = entradas[i];     //atribui à variável número, cada posição do array entradas
    i++
    return numero;
}

function print(texto){
    console.log(texto);
}


module.exports = {gets, print};
/*ao final da execução desse código, o modulo.exports vai 
preparar os objetos criados (gets, print) para serem exportados*/
