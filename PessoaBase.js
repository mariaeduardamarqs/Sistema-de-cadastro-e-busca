import { ValidadorUtil } from "./ValidadorUtil.js";
export class PessoaBase {
#nome;
#cpf;
#email;

    constructor(nome, cpf, email){
        if(new.target === PessoaBase){
            throw new Error("ERR_CLASSE_ABSTRATA");
        }
        this.#nome = nome;
        this.#cpf = cpf;
        this.#email = email;
    }
    get nome() {return this.#nome};

    validarNome(nome){
        if( typeof nome !== "string" || nome.trim() === ""){
            throw new Error("ERR_NOME_VAZIO");
        }
        this.#nome = nome;
    } 

    get cpf() {return this.#cpf};
        set cpf(cpf){
        if(!ValidadorUtil.validarCpf(cpf)) {
            throw new Error("ERR_CPF_INVALIDO");
        }
         this.#cpf = cpf;
    }
       
    
    get email() {return this.#email};
    validacaoEmail(email) {
        if(!ValidadorUtil.validarEmail(email)) {
            throw new Error("ERR_EMAIL_INVALIDO");
        }
        this.#email = email;
    }
}
    
