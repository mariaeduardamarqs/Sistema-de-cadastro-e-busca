export class ValidadorUtil {
    
    static validarCpf(cpf){
        return cpf.length === 11 && !isNaN(cpf);
    }
     static validarEmail(email){
        if(!email || typeof email !== "string") {return false; }
        return email.includes("@");
     }
    }
   
