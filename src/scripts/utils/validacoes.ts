// Validações do Form

export function validTelefone(telefone: any):string {
    const telRegex = /^\(?\d{2}\)?[\s-]?9?\d{4}[\s-]?\d{4}$/;

    if(telRegex.test(telefone)) {
        return "Número de telefone válido!";
    } else {
        return "Número de telefone inválido! Certifique-se de incluir o DDD e os 8 ou 9 dígitos.";
    }
    
}