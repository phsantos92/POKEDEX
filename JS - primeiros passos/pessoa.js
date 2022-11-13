class Pessoa{
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é: ${this.nome}, e minha idade é: ${this.idade}`);

    }

}

const pessoa = {
    nome: "pedro",
    idade: 30,

    descrever: function(){

        // demorei bastante para notar que nesse caso usamos ASPAS INVERTIDAS
        console.log(`Meu nome é: ${this.nome}, e minha idade é: ${this.idade}`);

    }
};

pessoa.descrever();

