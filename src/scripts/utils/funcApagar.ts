import { deletContatos } from "../services/deleteContato";

const btnDelete = document.querySelector('.apagar') as HTMLButtonElement;
const divOpcoes = document.querySelector('.apagar-estilo') as HTMLDivElement;

export function opcoesApagarContato() {
    btnDelete.addEventListener('click', () => {
        divOpcoes.classList.toggle('ativo')
    })
    
    document.querySelector('.apagar-contato')?.addEventListener('click', () => {
        deletContatos('unico')
    })
    
    document.querySelector('.apagar-varios')?.addEventListener('click', () => {
        deletContatos('varios')
    })
}