// Validações do Form
import { msgErro } from "../services/msgErro";

// Validando nome
export function validNome(nome: string): boolean {
    const nomeRegex = /^[a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ]+(?: [a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ]+)*$/


    if (nome.trim() === '') {
        msgErro('Porfavor, preencha o campo.')
        return false
    }

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
// export function validEmail(email: string): string {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email)
// }

// // Validando telefone
// export function validTelefone(telefone: string): string {
//     const telRegex = /^\(?\d{2}\)?[\s-]?(9\d{4}|\d{4})[\s-]?\d{4}$/;
//     return telRegex.test(telefone)
// }