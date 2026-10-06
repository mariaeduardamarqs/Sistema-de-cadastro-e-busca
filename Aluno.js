import { PessoaBase} from './PessoaBase.js'; //certo
import { StatusMatriculaEnum } from './Dominio.js';

export class Aluno extends PessoaBase {
    #idade

    constructor(nome, cpf, email, idade, curso){
        super(nome, cpf, email);
        this.#idade = idade;
        this.curso = curso;
        this.status = StatusMatriculaEnum.ATIVA;
}

    get idade() {return this.#idade};

    verificarIdade(idadeAluno) {
        if(typeof idadeAluno !== "number" || isNaN(idadeAluno)){
            throw new Error("ERR_TIPO_INVALIDO");
        }
        if(idadeAluno < 14 || idadeAluno > 120) {
            throw new Error("ERR_IDADE_MINIMA");
        }
        this.#idade = idadeAluno;
    }
}