// Validações do Form
import { msgErro } from "../services/msgErro";
import validator from 'validator';

// Função para validar se os campos estão preenchidos
export function camposVazios(...inputs: HTMLInputElement[]): boolean {
    let campoValid = true
    inputs.forEach((input) => {
        if(!input.value) {
            msgErro(input, 'Porfavor, preencha o campo.')
            campoValid = false
        }
    })

    return campoValid
}

// Validando nome
export function validNome(nome: HTMLInputElement): boolean {
    const nomeRegex = /^[a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ]+(?: [a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ]+)*$/

    if (nome.value.length < 4) {
        msgErro(nome , 'O nome deve possuir no mínimo 4 caracteres!')
        return false
    }

    if (!nomeRegex.test(nome.value)) {
        msgErro(nome, 'Nome inválido! Por favor, não use caracteres especiais como !, @, #, $, %, etc. Exemplos inválidos: João!, Ana$, Carlos@123.')
        return false
    }

    return true
}

// Validando email
export function validEmail(email: HTMLInputElement): boolean {
    const validandoEmail = validator.isEmail(email.value)

    if (!validandoEmail) {
        msgErro(email, 'formato de email inválido! Exemplo de um email válido: exemple@gmail.com')
        return false
    }

    return validandoEmail
}
// // Validando telefone
// export function validTelefone(telefone: string): string {
//     const telRegex = /^\(?\d{2}\)?[\s-]?(9\d{4}|\d{4})[\s-]?\d{4}$/;
//     return telRegex.test(telefone)
// }