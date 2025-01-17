import { span } from "./services/msgErro";
import { validNome } from "./utils/validacoes";

const addBtn = document.querySelector('.btn-add') as HTMLButtonElement;
export const form = document.querySelector('.form') as HTMLFormElement;

addBtn.addEventListener('click', function (e: Event) {
    e.preventDefault()

    const inputs = form.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
    const nome = document.querySelector('#nome') as HTMLInputElement

    inputs.forEach((inp) => {
        if(inp.id === 'nome') validNome(nome.value)
    })

    if (validNome(nome.value) === true) {
        span.style.display = 'none';
    }
    
})



