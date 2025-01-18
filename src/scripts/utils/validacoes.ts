// Validações do Form
import { msgErro } from "../services/msgErro";
import validator from 'validator';

// Função para validar se os campos estão preenchidos
export function camposValidos(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
        if(!input.value) {
            msgErro('Porfavor, preencha o campo.')
        }
    })
}

// Validando nome
export function validNome(nome: string): boolean {
    const nomeRegex = /^[a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ]+(?: [a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ]+)*$/

    if (nome.length < 4) {
        msgErro('O nome deve possuir no mínimo 4 caracteres!')
        return false
    }

    if (!nomeRegex.test(nome)) {
        msgErro('Nome inválido! Por favor, não use caracteres especiais como !, @, #, $, %, etc. Exemplos inválidos: João!, Ana$, Carlos@123.')
        return false
    }
    return true
}

// Validando email
export function validEmail(email: string): boolean {
    const validandoEmail = validator.isEmail(email)

    if (!validandoEmail) {
        msgErro('formato de email inválido! Siga os parâmetros de um email exe: exemple@gmail.com')
        return false
    }

    return validandoEmail
}
// // Validando telefone
// export function validTelefone(telefone: string): string {
//     const telRegex = /^\(?\d{2}\)?[\s-]?(9\d{4}|\d{4})[\s-]?\d{4}$/;
//     return telRegex.test(telefone)
// }