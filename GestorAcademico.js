import { Aluno } from './Aluno.js';
import { Professor } from './Professor.js';

export class GestorAcademico {

    aluno = [];
    professor= [];

    cadastrarAluno(nome, cpf, email, idade, curso) {
        try {
            console.log(`\n[ATENDIMENTO VIRTUAL] Iniciando comunicação com o servidor...`);

            const alunoA = new Aluno(nome, cpf, email, idade, curso);
            alunoA.verificarIdade();

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
            console.log(`\n[ATENDIMENTO VIRTUAL] Iniciando comunicação com o servidor...`);

            const professorP = new Professor(nome, cpf, email, salario, titulacao);
            professorP.verificarSalario

            console.log(" Seu cadastro foi confirmado e gerado com sucesso!");
       
       
        }catch(excecaoCapturada) {
            console.log("[ERRO IDENTIFICADO] A operação não pode ser concluída.");
            this.traduzirCodigoDeErro(excecaoCapturada.message);
        
        }finally {
            console.log(" Operação de cadastro finalizada. Guichê liberado para o próximo usuário da fila.")
        }
    }
   

        buscarPorCpf(cpf) {
            for(const aluno of this.aluno) {
                if(aluno.cpf === cpf) {

                    console.log("\nALUNO ENCONTRADO");
                    console.log("Nome:", aluno.nome)
                    console.log("CPF:", aluno.cpf);
                    console.log("Email:", aluno.email);
                    console.log("Salario:", aluno.salario);
                    console.log("Curso:", aluno.curso);
                    return;
                }
            }
           
            
            for(const professor of this.professor) {
                if(professor.cpf === cpf) {

                    console.log("\nPROFESSOR ENCONTRADO");
                    console.log("Nome:", professor.nome);
                    console.log("CPF:", professor.cpf);
                    console.log("Email:", professor.email);
                    console.log("Salário:", professor.salario);
                    console.log("Titulação:", professor.titulacao);
                    return;
                }
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
    



    








