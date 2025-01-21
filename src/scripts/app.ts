import { novoContato } from "./services/cadastrarContato";
import { removeErroAoDigita } from "./services/msgErro";
import { camposVazios, validEmail, validFormulario, validNome, validTelefone } from "./utils/validacoes";

// Formulário
export const form = document.querySelector('.form') as HTMLFormElement;
const inputNome = document.querySelector('#nome') as HTMLInputElement;
const inputEmail = document.querySelector('#email') as HTMLInputElement;
const inputTelefone = document.querySelector('#telefone') as HTMLInputElement;

// Buscar contatos
const divBuscar = document.querySelector('.buscar') as HTMLDivElement;
const lupa = document.querySelector('.lupa') as HTMLDivElement;

inputNome.addEventListener('input', () => removeErroAoDigita(inputNome))
inputEmail.addEventListener('input', () => removeErroAoDigita(inputEmail))
inputTelefone.addEventListener('input', () => removeErroAoDigita(inputTelefone))

// Formulário
form.addEventListener('submit', function (e: Event) {
    e.preventDefault();

    if (!camposVazios(inputNome, inputEmail, inputTelefone)) return;

    validNome(inputNome);
    validEmail(inputEmail);
    validTelefone(inputTelefone);

    // Se o formulário estiver com todos o campos válidos, ai ele é enviado
    if (validFormulario(this)) {
        const nome = inputNome.value.trim();
        const email = inputEmail.value.trim();
        const telefone = inputTelefone.value.trim();

        const contato = novoContato(nome, email, telefone);
        console.log(contato);

        const li = document.createElement('li')
        const ul = document.querySelector('.cnt-pessoa')
    
        li.innerHTML = `<svg width="23" height="24" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2 8.16002C23.2 12.6667 19.3049 16.32 14.5 16.32C9.69514 16.32 5.8 12.6667 5.8 8.16002C5.8 3.65338 9.69514 0 14.5 0C19.3049 0 23.2 3.65338 23.2 8.16002ZM14.5 19.04C6.49188 19.04 0 25.129 0 32.64C0 33.391 0.649188 34 1.45 34H27.55C28.3508 34 29 33.391 29 32.64C29 25.129 22.5081 19.04 14.5 19.04Z" fill="white"/>
            </svg>
            <span class="traco">-</span>    
            <span class="nome-cnt">${inputNome.value}</span>
        `;
    
        ul?.appendChild(li)
    }

    let input = form.querySelectorAll('input');
    input.forEach((inp) => {
        inp.value = '';
    })
})





// Pesquisar
lupa.addEventListener('click', () => {
    divBuscar.classList.toggle('ativar')
})

// Adicionadno os contatos

