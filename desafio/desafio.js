const readline = require('readline-sync');
const Forca = require('./forca');

const jogo = new Forca('abacaxi');//criação do objeto "jogo"

while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {//enquanto  o estado não for "perdeu" ou "ganhou"
   
    const chuteMm = readline.question("Aguardando chute: \n");//leitura de dados, uma linha por vez
    
    const chute = chuteMm.toLowerCase();//transforma todas as letras em minúsculas
    if(chute.length === 1 && chute.match(/[a-z]/i)){//só aceita uma letra por vez
    jogo.chutar(chute);//acessando o método chutar e passando o parâmetro chute 
    console.log(jogo.buscarDadosDoJogo());//mostra os dados do jogo
    }
}

console.log("você " + jogo.buscarEstado());

