const funcoes = require('./funcoes-auxiliares');    // objeto funcoes recebe o arquivo a ser importado.

console.log(funcoes);

const pessoa = {

    nome: "vitor"
}

//códigos equivalentes !!
const {nome} = pessoa;

const nome = pessoa.nome;