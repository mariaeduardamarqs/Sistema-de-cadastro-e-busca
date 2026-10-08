import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { GestorAcademico } from './GestorAcademico.js';
import { TitulacaoEnum } from './Dominio.js';



const rl = readline.createInterface({ input, output });

const gestor = new GestorAcademico();
let sistemaRodando = true;

console.log("===========================");
console.log("Sistema de Gestão Acadêmica");
console.log("===========================");

while (sistemaRodando) {
        
console.log("\n Qual opção deseja utilizar?");
console.log("1- Matricular Aluno.");
console.log("2- Contratar Professor.");
console.log("3- Buscar Cadastro(por CPF).");
console.log("4- Sair do Sistema.");

const escolha = parseInt(await rl.question("Digite a opção escolhida: "));
//gestor.traduzirCodigoDeErro();




switch (escolha) {
    case 1:
        const nome = await rl.question("Digite seu nome: ");
        const cpf = parseInt(await rl.question("Digite seu CPF: "));
        const email = await rl.question("Digite seu E-mail: ");
        const idade = parseInt(await rl.question("Digite sua idade: "));
        const curso = await rl.question("Digite o curso desejado: ");
        gestor.cadastrarAluno(nome, cpf, email, idade, curso);
        break;
      
        
    case 2:
        const nomeP = await rl.question("Digite seu nome: ");
        const cpfP = parseInt(await rl.question("Digite seu CPF: "));
        const emailP = await rl.question("Digite seu E-mail: ");
        const salario = parseFloat(await rl.question("Digite o valor do salário: "));
        console.log(`Escolha a titulação: ${Object.values(TitulacaoEnum).join(', ')}`);
        
        const titulacao = await rl.question("Digite a opção:");
        gestor.cadastrarProfessor(nomeP, cpfP, emailP, salario, titulacao);
        break;
    case 3: {
        console.log("======Buscar Cadastro======")
        const cpf= await rl.question("Digite o CPF da pessoa: ");
        gestor.buscarPorCpf(cpf);
        break;
    }
    case 4: {
        console.log("[SAINDO DO SISTEMA] Sistema encerrado com sucesso!");
        sistemaRodando = false;
          
          break;
        rl.close();
}
        
    
        default:
            console.log("Opção inválida. Tente novamente.");
}         
}