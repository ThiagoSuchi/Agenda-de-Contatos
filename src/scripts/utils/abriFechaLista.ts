const btnAbrirListaContatos = document.querySelector('.contatos') as HTMLDivElement;
const menuContatos = document.querySelector('.menu-contatos') as HTMLDivElement;
const btnFechar = document.querySelector('.btn-fechar') as HTMLButtonElement;

export function listaContatosToggle() {
    btnAbrirListaContatos.addEventListener('click', () => {
        menuContatos.classList.add('ativo');
        btnFechar.classList.add('ativo');
    })
    
    btnFechar.addEventListener('click', () => {
        menuContatos.classList.remove('ativo');
        btnFechar.classList.remove('ativo');
    })
}