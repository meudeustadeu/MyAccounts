# Controle de Contas Bancárias

Este script JavaScript permite a interação com contas bancárias através de um terminal, oferecendo funcionalidades como criar conta, consultar saldo, depositar, sacar e sair do sistema.

## Funcionamento das Funções

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
3. Execute o seguinte comando: git clone # Controle de Contas Bancárias

## Instalando as Dependências

1. Após clonar o repositório, navegue até o diretório do projeto.
2. Execute o seguinte comando npm install para instalar as dependências listadas no arquivo `package.json`

Isso instalará todas as bibliotecas e módulos necessários para executar o projeto localmente.

## Executando o Projeto

1. Com todas as dependências instaladas, você poderá executar o projeto com npm start