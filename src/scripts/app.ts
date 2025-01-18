import { msgErro, span } from "./services/msgErro";
import { camposVazios, validEmail, validNome } from "./utils/validacoes";

export const form = document.querySelector('.form') as HTMLFormElement;
const nome = document.querySelector('#nome') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const telefone = document.querySelector('#telefone') as HTMLInputElement;

form.addEventListener('submit', function (e: Event) {
    e.preventDefault();
    
    if (!camposVazios(nome, email)) return;
    validNome(nome);
    validEmail(email)
})



