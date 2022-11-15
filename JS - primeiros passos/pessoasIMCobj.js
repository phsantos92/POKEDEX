/* 2 - Crie uma classe para representar pessoas.
Para cada pessoa temos os atributos NOME, PESO e ALTURA.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70 kg e 1,75 de altura. E peça a José para dizer o valor do seu IMC

*/

class Pessoa1 {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    classificarIMC() {
        const imc = this.calcularIMC();

        if (imc < 18.5){
            return ('Abaixo do peso');
        } else if(imc >= 18.5 && imc <= 25){
            return ('No peso');
        } else if(imc >= 25 && imc <= 30){
            return ('Obeso');
        } else {
            return ('Obesidade mórbida');
        }
        
}
    calcularIMC() {
        return this.peso / (this.altura * this.altura);

    }
}

const jose = new Pessoa1('José', 70, 1.75);
console.log(jose.calcularIMC());
console.log(jose.classificarIMC());

const pedro = new Pessoa1('Pedro', 88, 1.84);
console.log(pedro.calcularIMC());
console.log(pedro.classificarIMC());




