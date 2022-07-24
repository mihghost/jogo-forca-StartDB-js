
let palavraSecreta = 'abacaxi';
let palavraAux = Array(palavraSecreta.length);
let letrasChutadas = [];
let status = "";
let contFalhas = 0;
let vidas = 0;

const forcaImg = [
  ` 
    +---+
    |   |
        |
        |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
        |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
    |   |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  =========`]

  class Forca {
    //Recebe como parâmetro as letras digitadas pelo usuário
    chutar(letra) {
        let tick;
        for(let i = 0; i < palavraSecreta.length; i++) {
          if(palavraSecreta[i].toLowerCase() === letra) {
            palavraAux[i] = palavraSecreta[i];
            tick = true;
          } else if(palavraAux[i] === undefined) {
            palavraAux[i] = '_';
          }
        }
        if(!letrasChutadas.includes(letra)) {
          letrasChutadas.push(letra);
          tick ? tick = false : contFalhas++;
        }
        vidas = (6 - contFalhas);

        if(contFalhas === 6) {
          console.log(forcaImg[contFalhas]);
          status = "perdeu";
          console.log('A palavra é:', palavraSecreta);
          return;
        } else {
          console.log(forcaImg[contFalhas]);
        }
        if(!palavraAux.includes('_')) {
          status = "ganhou";
        }
      }
    //Retorna o status do jogo
    buscarEstado() {
        return status;
      } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
    buscarDadosDoJogo() {
      return {
        letrasChutadas: letrasChutadas, // Deve conter todas as letras chutadas
        vidas: vidas, // Quantidade de vidas restantes
        palavra: [palavraAux.join(' ')], // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
    }
  }
  module.exports = Forca;