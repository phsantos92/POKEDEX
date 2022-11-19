/* 

1 - Crie uma classe para representar carros.
Os carros possuem marca, uma cor, e um gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais.

*/

class Carros{
    cor;
    marca;
    gastoMedio;

    constructor(cor, marca, gastoMedio){
        this.cor = cor;
        this.marca = marca;
        this.gastoMedio = gastoMedio;
    }

    calculaGasto(distanciaEmKm, precoCombustivel){       //distancia e preço são os parâmetros que vou receber como método
        return distanciaEmKm * this.gastoMedio * precoCombustivel;      //this para acessar o atributo do objeto

    }


}

const focus = new Carros('preto', 'fiesta', 10);
const gol = new Carros('branco', 'volks', 20);

console.log(focus.calculaGasto(100, 5.65));
console.log(gol.calculaGasto(80, 5.89));