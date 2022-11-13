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


function comparaPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome} !`);
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome} !`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm o mesmo nome!`);
    }
}

const pedro = new Pessoa('Pedro', 30);
const ana = new Pessoa('Ana', 45);

(comparaPessoas(pedro, ana));