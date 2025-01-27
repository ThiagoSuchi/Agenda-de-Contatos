// Validações do Form
import { erro, msgErro, removeErroAoDigita } from "../services/msgErro";
import validator from 'validator';

// Função para validar se os campos estão preenchidos
export function camposVazios(...inputs: HTMLInputElement[]): boolean {
    let campoValid = true

    inputs.forEach((input) => {
        if (!input.value) {
            msgErro(input, 'Porfavor, preencha o campo.')
            campoValid = false
        }
    })

    return campoValid
}

// Validando nome formulário de adicionar contato
export function validNome(nome: HTMLInputElement): void {
    const nomeRegex = /^[a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ0-9\p{Emoji_Presentation}]+(?: [a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ0-9\p{Emoji_Presentation}]+)*$/u
    const nomesSalvos = JSON.parse(localStorage.getItem('contatos') || '[]');

    removeErroAoDigita(nome);

    for (let contato of nomesSalvos) {
        if (contato.nome === nome.value) {
            msgErro(nome, 'O nome inserido já esta sendo usado, porfavor digite outro nome.')
            return
        }
    }

    if (nome.value.length < 4) {
        msgErro(nome, 'O nome deve possuir no mínimo 4 caracteres!');
    }

    if (!nomeRegex.test(nome.value)) {
        msgErro(nome, 'Nome inválido! Por favor, não use caracteres especiais como !, @, #, $, %, etc. Exemplos inválidos: João!, Ana$, Carlos@123.');
    }
}

// Validando nome formulário de editar contato
export function validEditNome(nome: HTMLInputElement): void {
    const nomeRegex = /^[a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ0-9\p{Emoji_Presentation}]+(?: [a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ0-9\p{Emoji_Presentation}]+)*$/u

    removeErroAoDigita(nome);

    if (nome.value.length < 4) {
        msgErro(nome, 'O nome deve possuir no mínimo 4 caracteres!');
    }

    if (!nomeRegex.test(nome.value)) {
        msgErro(nome, 'Nome inválido! Por favor, não use caracteres especiais como !, @, #, $, %, etc. Exemplos inválidos: João!, Ana$, Carlos@123.');
    }
}


// Validando email
export function validEmail(email: HTMLInputElement): void {
    const validandoEmail = validator.isEmail(email.value);

    removeErroAoDigita(email);

    if (!validandoEmail) {
        msgErro(email, 'formato de email inválido! Exemplo de um email válido: exemple@gmail.com');
    }
}

// Validando telefone
export function validTelefone(telefone: HTMLInputElement): void {
    removeErroAoDigita(telefone);

    if (!validator.isMobilePhone(telefone.value, 'pt-BR')) {
        msgErro(telefone, 'Número de telefone inválido! digite (xx) xxxxx-xxxx');
    }
}

// Validação de formulário
export function validFormulario(form: HTMLFormElement): boolean {
    let valid = true;
    form
        .querySelectorAll('.' + erro)
        .forEach(() => valid = false);
    return valid;
}