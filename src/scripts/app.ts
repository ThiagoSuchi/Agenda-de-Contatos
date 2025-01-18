import { msgErro, span } from "./services/msgErro";
import { camposValidos, validEmail, validNome } from "./utils/validacoes";

export const form = document.querySelector('.form') as HTMLFormElement;
const nome = document.querySelector('#nome') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const telefone = document.querySelector('#telefone') as HTMLInputElement;
const addBtn = document.querySelector('.btn-add') as HTMLButtonElement;

form.addEventListener('click', function (e: Event) {
    e.preventDefault();

    camposValidos(nome, email, telefone)
})



