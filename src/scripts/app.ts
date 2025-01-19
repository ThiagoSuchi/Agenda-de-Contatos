import { limparError } from "./services/limparErro";
import { camposVazios, validEmail, validNome, validTelefone } from "./utils/validacoes";

export const form = document.querySelector('.form') as HTMLFormElement;
const nome = document.querySelector('#nome') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const telefone = document.querySelector('#telefone') as HTMLInputElement;

form.addEventListener('submit', function (e: Event) {
    e.preventDefault();
    limparError(this)

    if (!camposVazios(nome, email, telefone)) return;
    
    validNome(nome);
    validEmail(email)
    validTelefone(telefone)
})



