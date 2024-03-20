/* eslint-disable no-undef */
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

operation();

function operation() {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'action',
				message: 'O que você deseja fazer?',
				choices: [
					'Criar Conta',
					'Consultar Saldo',
					'Depositar',
					'Sacar',
					'Sair',
				],
			},
		])
		.then((answer) => {
			const action = answer['action'];

			if (action === 'Criar Conta') {
				createAccount();
			} else if (action === 'Consultar Saldo') {
				getAccountBalance();
			} else if (action === 'Depositar') {
				deposit();
			} else if (action === 'Sacar') {
				withdraw();
			} else if (action === 'Sair') {
				console.log(chalk.bgBlue.white('Obrigado por usar o Accounts!'));
				process.exit();
			}
		});
}
function createAccount() {
	console.log(chalk.bgGreen.black('Parabèns por escolher nosso banco!'));
	console.log(chalk.green('Defina as opções da sua conta:'));

	buildAccount();
}

function buildAccount() {
	inquirer
		.prompt([
			{
				name: 'accountName',
				message: 'Digite um nome para a sua conta:',
			},
		])
		.then((answer) => {
			const accountName = answer['accountName'];

			if (accountName.trim() === '') {
				console.log(chalk.bgRed.black('Este nome é inválido. Tente outro! :c'));
				buildAccount();
				return;
			}

			if (!fs.existsSync('accounts')) {
				fs.mkdirSync('accounts');
			}

			if (fs.existsSync(`accounts/${accountName}.json`)) {
				console.log(
					chalk.bgRed.black('Esta consta já existe, escolha outro nome!')
				);
				buildAccount();
				return;
			}

			fs.writeFileSync(
				`accounts/${accountName}.json`,
				'{"balance": 0}',
				function (err) {
					console.log(err);
				}

			);

			console.log(chalk.bgGreen.black(`Parabéns ${accountName}!!! Sua conta foi criada! $.$ `));
			operation();
		});
}

function deposit() {
	inquirer
		.prompt([
			{
				name: 'accountName',
				message: 'Qual o nome da sua conta?',
			},
		])
		.then((answer) => {
			const accountName = answer['accountName'];

			if (!checkAccount(accountName)) {
				return deposit();
			}

			inquirer
				.prompt([
					{
						name: 'balance',
						message: 'Qual o valor do depósito?',
					},
				])
				.then((answer) => {
					const amount = answer['balance'];

					console.log(chalk.bgGreen.black(`Você realizou um deposito de: R$${amount} !!!`));
					addAmount(accountName, amount);

					operation();
				});
		});
}

function checkAccount(accountName) {
	if (!fs.existsSync(`accounts/${accountName}.json`)) {
		console.log(
			chalk.bgRed.black('Esta conta não existe, escolha outro nome!')
		);
		return false;
	}

	return true;
}

function getAccount(accountName) {
	const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
		encoding: 'utf8',
		flag: 'r',
	});

	return JSON.parse(accountJSON);
}

function addAmount(accountName, amount) {
	const accountData = getAccount(accountName); // Obter dados da conta

	if (!amount) {
		console.log(
			chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!')
		);
		return;
	}
	accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

	fs.writeFileSync(
		`accounts/${accountName}.json`,
		JSON.stringify(accountData),
		function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log('Quantidade adicionada com sucesso!');
			}
		}
	);
}
function getAccountBalance() {
	inquirer
		.prompt([
			{
				name: 'accountName',
				message: 'Digite o nome da sua conta:',
			},
		])
		.then((answer) => {
			const accountName = answer['accountName'];

			if (!checkAccount(accountName)) {
				return getAccountBalance();
			}

			const accountData = getAccount(accountName);

			console.log(
				chalk.bgBlue.white(`Olá, seu saldo é R$${accountData.balance}!`)
			);
			operation();
		});
}

function withdraw() {
	inquirer
		.prompt([
			{
				name: 'accountName',
				message: 'Digite o nome da sua conta:',
			},
		])
		.then((answer) => {
			const accountName = answer['accountName'];

			if (!checkAccount(accountName)) {
				return withdraw();
			}

			inquirer
				.prompt([
					{
						name: 'amount',
						message: 'Qual valor você deseja sacar?',
					},
				])
				.then((answer) => {
					const amount = answer['amount'];

					removeAmount(accountName, amount);
					// operation();
				});
		});
}

function removeAmount(accountName, amount) {
	if (!amount) {
		console.log(
			chalk.bgRed.black('Houve um erro, tente novamente mais tarde! :C')
		);

		return withdraw();
	}

	const accountData = getAccount(accountName);

	if (amount > accountData.balance) {
		console.log(
			chalk.bgRed.black('Saldo insuficiente! Verifique o valor informado.')
		);

		return withdraw();
	}

	accountData.balance= parseFloat(accountData.balance) - parseFloat(amount);

	fs.writeFileSync(
		`accounts/${accountName}.json`,
		JSON.stringify(accountData),
		function (err) {
			console.log(err);
		}
	);

	console.log(chalk.green(`Você realizou um saque de R$${amount} da sua conta!`));
}
