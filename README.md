# Exercício RI6

Repositório com a resolução do exercício de Técnicas de Programação RI5, utilizando TypeScript e JavaScript.

*P.S.: Em um dos arquivos do RI6 existe um easter egg.*

## 📋 Pré-requisitos

Para rodar o projeto, você precisará do Node.js instalado na sua máquina.

### 1. Instalar o Node.js (Windows)
```bash
winget install OpenJS.NodeJS.LTS
```
### 2. Instalar o módulo do Node
Necessário para o funcionamento do módulo readline no TypeScript (não obrigatório se a pasta node_modules já estiver no repositório).
```Bash
npm install -D @types/node
```

### 3. Como inicializar os projetos
Para Projetos TypeScript RI6
Primeiro é necessário compilar o código para JavaScript e depois executá-lo:

```Bash
tsc nomeDoArquivo.ts
node nomeDoArquivo.js
```
(Exemplo: tsc Calculadora.ts seguido de node Calculadora.js)

### 4. Descrição dos Exercícios
RI6: Calculadora Polimórfica (TypeScript)

É uma calculadora baseada no terminal utilizando o módulo nativo readline.

Capaz de calcular somas, divisões, multiplicações, subtrações, raízes, potenciação e Bhaskara.

### 5. Como usar a Calculadora (RI6)
Ao iniciar o programa, ele pedirá a entrada dos números e da operação desejada. As entradas devem ser separadas por espaço. Para operações normais, digite 2 números. No caso de Bhaskara, são necessários 3 números.

Operações disponíveis:
Somar / Subtrair / Multiplicar / Dividir / Potencia / Raiz / Bhaskara / Sair

### 6. Exemplos de uso:

```text
1 2 Somar        → Resultado da soma
2 1 Subtrair     → Resultado da subtração
2 2 Multiplicar  → Resultado da multiplicação
6 2 Dividir      → Resultado da divisão
4 2 Potencia     → 4 elevado a 2
9 2 Raiz         → Raiz quadrada de 9
1 -5 6 Bhaskara  → Calcula as raízes da equação
Sair             → Encerra a aplicação
```