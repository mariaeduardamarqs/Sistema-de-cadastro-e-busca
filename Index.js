import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { GestorAcademico } from './GestorAcademico.js';
import { TitulacaoEnum } from './Dominio.js';
import { Aluno} from './Aluno.js';
import { Professor} from './Professor.js';
import { PessoaBase } from './PessoaBase.js';




const rl = readline.createInterface({ input, output });

const gestor = new GestorAcademico();





let sistemaRodando = true;

console.log("===========================");
console.log("Sistema de Gestão Acadêmica");
console.log("===========================");

while (sistemaRodando) {
        
//const validacaoIdade = new Aluno();
//validacaoIdade.validarIdade();
console.log("\n Qual opção deseja utilizar?");
console.log("1- Matricular Aluno.");
console.log("2- Contratar Professor.");
console.log("3- Buscar Cadastro(por CPF).");
console.log("4- Sair do Sistema.");
const escolha = parseInt(await rl.question("Digite a opção escolhida: "));



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
        console.log("\nEscolha a titulação: ");
        console.log("1.Especialista");
        console.log("2.Mestre");
        console.log("3.Doutor");
        const escolhaTitulacao = parseInt(await rl.question("Digite a opção:"))
         
        gestor.cadastrarProfessor();
        gestor.cadastrarAluno();
       
        

        
        let titulacao;

        switch(escolhaTitulacao) {
            case 1:
                titulacao = TitulacaoEnum.ESPECIALISTA;
                break;
            case 2:
                titulacao = TitulacaoEnum.MESTRE;
                break;
            case 3:
                titulacao = TitulacaoEnum.DOUTOR;
                break;
            default:
                console.log("Titulação inválida.");
                break;
        }
        if(titulacao) {
            gestor.cadastrarProfessor(nomeP, cpfP, emailP, salario, titulacao);
        }
        break;

    case 3: {
        gestor.buscarPorCpf(cpf);
        const cpf = await rl.question("Digite o CPF da pessoa: ");
        break;
    }
    case 4:
        sistemaRodando = false;
        console.log("[SAINDO DO SISTEMA] Sistema encerrado com sucesso!");
        rl.close();
        break;
        default:
            console.log("Opção inválida. Tente novamente.");
}
}




 
