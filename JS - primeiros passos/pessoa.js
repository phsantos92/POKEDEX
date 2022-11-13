class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade, anoDeNascimento){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;

    }
    
    descrever(){
        console.log(`Meu nome é: ${this.nome}, e minha idade é: ${this.idade} e eu nasci em:
        ${this.anoDeNascimento}`);

    }

}
    const pedro = new Pessoa('Pedro', 31, 1992);
    const carlos = new Pessoa('Carlos', 23, 1987);

pedro.descrever();      //imprimindo apenas o resultado do método
carlos.descrever();

console.log(pedro);    
console.log(carlos);
