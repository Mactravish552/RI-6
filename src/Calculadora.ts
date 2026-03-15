import * as readline from 'readline';
import Mensagens from './Mensagens';
import Multiplicacao from './Multiplicacao';
import Soma from './Soma';
import Subtracao from './Subtracao';
import Divisao from './Divisao';
import Potenciacao from './Potenciacao';
import Radiciacao from './Radiciacao';
import Bhaskara from './Bhaskara';

let mensagens = new Mensagens()

let iniciar = () => {
  let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
    let instrucoes = valor.split(' ')
    let operacao = instrucoes[instrucoes.length - 1]; //Meu cerebro
    let numero1 = Number(instrucoes[0])
    let numero2 = Number(instrucoes[1])
    let numero3 = Number(instrucoes[2])
    if(instrucoes.length == 1){
      operacao = instrucoes[0]
    }
    console.log(`Estas foram suas instruções: ${instrucoes}\n`)

    switch (operacao) {
        case 'Somar':
            let calculo = new Soma()
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
            break;
        case 'Subtrair':
            calculo = new Subtracao()
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
            break;
        case 'Multiplicar':
            calculo = new Multiplicacao()
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
            break;
        case 'Dividir':
            calculo = new Divisao()
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
            break;
        case 'Potencia':
            calculo = new Potenciacao(); 
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
            break;
        case 'Raiz':
            calculo = new Radiciacao(); 
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
            break;
        case 'Bhaskara':
            let calculoBhaskara = new Bhaskara(); 
            console.log(`O resultado da operação é: ${calculoBhaskara.calcular(numero1, numero2, numero3)}\n`);
            break;

        case 'Sair':
            console.log(`Até uma próxima, p-p-pessoal...`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
    leitor.close()
    if (operacao != 'Sair') {
      mensagens.comoUsar()
      iniciar()
    }
  });
}
mensagens.boasVindas()
mensagens.listarOpcoes()
mensagens.comoUsar()
iniciar()