export class ValidadorUtil {
    
    static validarCpf(cpf){
         if (!cpf || typeof cpf !== 'string') return false;
        const cpfLimpo = cpf.replace(/[^\d]+/g, '');
         return cpfLimpo.length === 11 && !isNaN(cpfLimpo);
        
    }
     static validarEmail(email){
        if(!email || typeof email !== "string") return false; 
        return email.includes('@');
     }
    }
   
