/* 2 - Crie uma classe para representar pessoas.
Para cada pessoa temos os atributos NOME, PESO e ALTURA.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70 kg e 1,75 de altura. E peça a José para dizer o valor do seu IMC

*/

class Pessoa1{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC(peso, altura){          // ERRO --> NÃO PRECISA RECEBER NADA EXTERNO, tudo já vai ser informado através do this.
        return this.peso / (this.altura * this.altura);

    }
}

    const jose = new Pessoa1('José', 78, 100);



}