# Controle de Contas Bancárias

Este script JavaScript permite a interação com contas bancárias através de um terminal, oferecendo funcionalidades como criar conta, consultar saldo, depositar, sacar e sair do sistema.

Neste projeto, foram utilizados os seguintes módulos:

## Inquirer , Chalk e File System (fs)

O módulo Inquirer é uma poderosa ferramenta que simplifica a interação com o usuário por meio de interfaces de linha de comando interativas. Ele foi fundamental para apresentar opções ao usuário, como criar conta, consultar saldo, depositar, sacar e sair do sistema.

Chalk é um módulo que permite adicionar estilos de cores ao texto impresso no terminal. Ele foi utilizado para melhorar a legibilidade das mensagens exibidas ao usuário, destacando informações importantes e fornecendo uma experiência visual mais agradável.

O módulo File System, ou fs, é um módulo nativo do Node.js que fornece funcionalidades para interagir com o sistema de arquivos do sistema operacional. Ele foi utilizado neste projeto para criar, ler e escrever arquivos JSON que armazenam as informações das contas bancárias, como saldo e histórico de transações.


## Funcionamento das Functions utilizadas

- `operation()`: Inicia a interação com o usuário, exibindo um menu de opções e chamando as funções correspondentes com base na escolha do usuário.
- `createAccount()`: Inicia o processo de criação de uma nova conta, solicitando um nome para a conta e verificando sua validade.
- `buildAccount()`: Constrói a conta com o nome fornecido pelo usuário, criando um arquivo JSON para armazenar o saldo da conta.
- `deposit()`: Permite ao usuário realizar um depósito em uma conta existente, solicitando o nome da conta e o valor a ser depositado.
- `checkAccount()`: Verifica se uma conta existe com base no nome fornecido.
- `getAccount()`: Obtém os dados de uma conta específica.
- `addAmount()`: Adiciona uma quantia ao saldo de uma conta específica.
- `getAccountBalance()`: Exibe o saldo de uma conta específica.
- `withdraw()`: Permite ao usuário sacar dinheiro de uma conta existente, solicitando o nome da conta e o valor a ser sacado.
- `removeAmount()`: Remove uma quantia do saldo de uma conta específica.

Cada função executa operações específicas de acordo com a interação do usuário, proporcionando um controle básico de contas bancárias através de um terminal.

# Clonando e Instalando o Projeto

Se você deseja clonar e instalar este projeto em sua máquina local, siga as etapas abaixo:

## Clonando o Repositório

1. Abra o terminal (Command Prompt no Windows, Terminal no macOS/Linux).
2. Navegue até o diretório onde deseja clonar o repositório.
3. Execute o seguinte comando: git clone 'github.com/meudeustadeu/MyAccounts'

## Instalando as Dependências

1. Após clonar o repositório, navegue até o diretório do projeto.
2. Execute o seguinte comando npm install para instalar as dependências listadas no arquivo `package.json`

Isso instalará todas as bibliotecas e módulos necessários para executar o projeto localmente.

## Executando o Projeto

1. Com todas as dependências instaladas, você poderá executar o projeto com npm start