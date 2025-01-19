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
export function validNome(nome: HTMLInputElement): void {
    const nomeRegex = /^[a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ0-9]+(?: [a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ0-9]+)*$/

    if (nome.value.length < 4) {
        msgErro(nome , 'O nome deve possuir no mínimo 4 caracteres!')
    }

    if (!nomeRegex.test(nome.value)) {
        msgErro(nome, 'Nome inválido! Por favor, não use caracteres especiais como !, @, #, $, %, etc. Exemplos inválidos: João!, Ana$, Carlos@123.')
    }
}

// Validando email
export function validEmail(email: HTMLInputElement): void {
    const validandoEmail = validator.isEmail(email.value)

    if (!validandoEmail) {
        msgErro(email, 'formato de email inválido! Exemplo de um email válido: exemple@gmail.com')
    }
}

// Validando telefone
export function validTelefone(telefone: HTMLInputElement): void {
    if(!validator.isMobilePhone(telefone.value, 'pt-BR')) {
        msgErro(telefone, 'Número de telefone inválido! digite (xx) xxxxx-xxxx')
    }
}