const notas = [];

notas.push[10];
notas.push[10];
notas.push[10];


let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];      //a variável nota vai receber quantas notas for o tamanho da array
    soma = soma + nota;         //a cada loop, as notas serão somadas
        
}

const media = soma / notas.length;
console.log(media);
