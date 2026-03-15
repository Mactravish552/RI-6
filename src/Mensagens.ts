export default class Mensagens {

    public listarOpcoes = () => {
        console.log(`Aqui você pode:`)
        console.log(`Somar, Subtrair, Multiplicar ou Dividir, Potencia, Raiz ou Bhaskara\n`)
    }

    public comoUsar = () => {
        console.log(`Para usar digite os números e a opção de cálculo separados por espaço como: "1.5 2.5 Soma"`)
        console.log(`O resultado será a soma dos números: 4`)
        console.log(`Para Radiciação, digite o número e o índice (ex: "9 2 Raiz" para raiz quadrada de 9)`)
        console.log(`Para Bhaskara, digite os valores de A, B, C e a opção (ex: "1 -5 6 Bhaskara")`)
        console.log(`Para encerrar digite "Sair"\n`)
    }

    public boasVindas = () => {
        console.log('\nBem-vindo a calculadora.\n')
    }

}