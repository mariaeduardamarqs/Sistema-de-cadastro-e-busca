import { Aluno } from './Aluno.js';
import { Professor } from './Professor.js';

export class GestorAcademico {

    aluno = [];
    professor= [];

    cadastrarAluno(nome, cpf, email, idade, curso) {
        try {
            const alunoA = new Aluno(nome, cpf, email, idade, curso);
            this.aluno.push(alunoA);//pq push
           // alunoA.verificarIdade();
            console.log(" Seu cadastro foi confirmado e gerado com sucesso!");

       }catch(excecaoCapturada) {
            console.log("[ERRO IDENTIFICADO] A operação não pode ser concluída.");
            this.traduzirCodigoDeErro(excecaoCapturada.message);
        
        }finally {
            console.log(" Operação de cadastro finalizada. Guichê liberado para o próximo usuário da fila.")
        }
}

    cadastrarProfessor(nome, cpf, email, salario, titulacao) {
        try {
            const professorP = new Professor(nome, cpf, email, salario, titulacao);
            this.professor.push(professorP);
            //professorP.verificarSalario
            console.log(" Seu cadastro foi confirmado e gerado com sucesso!");
       
       
        }catch(excecaoCapturada) {
            console.log("[ERRO IDENTIFICADO] A operação não pode ser concluída.");
            this.traduzirCodigoDeErro(excecaoCapturada.message);
        
        }finally {
            console.log(" Operação de cadastro finalizada. Guichê liberado para o próximo usuário da fila.")
        }
    }
   

        buscarPorCpf(cpf) {
            const pessoaEncontrada = 
            this.aluno.find(a => a.cpf === cpf) || 
            this.professor.find(p => p.cpf === cpf);

                if(!pessoaEncontrada ) {
                    console.log("\nNenhum cadastro encontrado!");
                    return;
                }

                console.log("\n--- DADOS DO CADASTRO ---");
                console.log(`Nome: ${pessoaEncontrada.nome}`);
                console.log(`CPF: ${pessoaEncontrada.cpf}`);
                console.log(`E-mail: ${pessoaEncontrada.email}`);
        
                
                if(pessoaEncontrada instanceof Aluno){
                    console.log(`Tipo: Aluno`);                  
                    console.log(`CPF: ${pessoaEncontrada.cpf}`);
                    console.log(`Email: ${pessoaEncontrada.email}`);
                    console.log(`Curso: ${pessoaEncontrada.curso}`);
                    console.log(`Status: ${pessoaEncontrada.status}`);
                
                } else if (pessoaEncontrada instanceof Professor) {
                    console.log(`Tipo: Professor`);
                    console.log(`Salário: R$ ${pessoaEncontrada.salario.toFixed(2)}`);
                    console.log(`Titulação: ${pessoaEncontrada.titulacao}`);
                }
            
                }
            
        
    
        traduzirCodigoDeErro(codigoTecnicoDoErro) {
        switch (codigoTecnicoDoErro) {
            case "ERR_CLASSE_ABSTRATA":
                console.log("AVISO: Não é possível cadastrar uma pessoa genérica no sistema.");
                break;
                
            case "ERR_NOME_VAZIO":
                console.log(" AVISO: O campo de nome é obrigatório e não pode ficar em branco.");
                break;

            case "ERR_CPF_INVALIDO":
                console.log("AVISO: O CPF informado é inválido. Digite exatamente 11 números sem formatação.");
                break;

            case "ERR_EMAIL_INVALIDO":
                console.log("O endereço de e-mail deve conter um formato válido(ex.:nome@dominio.com.");
                break;

            case "ERR_SALARIO_BASE":
                console.log("AVISO: O salário registrado não pode ser inferior ao piso da categoria (R$ 1500,00).");

            default:
                console.log(" AVISO SISTÊMICO: Falha no processamento dos dados. Tente novamente.");
        }
    }
}
    

    



    








