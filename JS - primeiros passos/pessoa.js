const pessoa = {
    nome: pedro,
    idade: 30,

    descrever: function(){

        console.log('Meu nome é: ${this.nome}');

    }
};

pessoa.descrever();

