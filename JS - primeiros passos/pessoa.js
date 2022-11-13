class Pessoa{
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é: ${this.nome}, e minha idade é: ${this.idade}`);

    }

}

    const pedro = new Pessoa();
    pedro.nome = 'Pedro Henrique Pereira dos Santos';
    pedro.idade = 31;

    const joao = new Pessoa();
    joao.nome = 'João da Silva';
    joao.idade = 23;

pedro.descrever();      //imprimindo apenas o resultado do método
joao.descrever();

console.log(pedro);    
console.log(joao);
