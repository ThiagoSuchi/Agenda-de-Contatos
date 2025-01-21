import { limparError } from "./services/limparErro";
import { camposVazios, validEmail, validNome, validTelefone } from "./utils/validacoes";

// Formulário
export const form = document.querySelector('.form') as HTMLFormElement;
const nome = document.querySelector('#nome') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const telefone = document.querySelector('#telefone') as HTMLInputElement;

// Buscar contatos
const divBuscar = document.querySelector('.buscar') as HTMLDivElement;
const lupa = document.querySelector('.lupa') as HTMLDivElement;

// Formulário
form.addEventListener('submit', function (e: Event) {
    e.preventDefault();
    limparError(this)

    if (!camposVazios(nome, email, telefone)) return;

    validNome(nome);
    validEmail(email)
    validTelefone(telefone)
})

// Pesquisar
lupa.addEventListener('click', () => {
    divBuscar.classList.toggle('ativar')
})



