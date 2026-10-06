import { PessoaBase } from './PessoaBase.js';// certo

export class Professor extends PessoaBase {
    #salario

    constructor(nome, cpf, email, salario, titulacao){
        super(nome, cpf, email);
        this.#salario = salario;
        this.titulacao = titulacao;
    }
    get salario() {return this.#salario};

    verificarSalario(salarioProfessor) {
        if( typeof salarioProfessor !== 'number'|| isNaN(salarioProfessor)) {
            throw new Error("ERR_TIPO_INVALIDO");
        }
        if( salarioProfessor < 1500) {
            throw new Error("ERR_SALARIO_BASE");
        }
        this.#salario = salarioProfessor;
    } 
    }