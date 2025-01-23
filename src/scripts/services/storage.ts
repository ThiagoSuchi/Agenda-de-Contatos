import { Contatos } from "../models/contato"

// Esta função cria um array de contatos salvos no localStorage, e se um novo contato for cadastrado a função salva tmbm
export function localStorageFunc(contato: Contatos): Contatos[] {
    const contatosExistentes = JSON.parse(localStorage.getItem('contatos') || '[]');

    contatosExistentes.push(contato);

    localStorage.setItem('contatos', JSON.stringify(contatosExistentes));

    return contatosExistentes;
}

// Está função irá exibir na lista de contatos todos os contatos salvos no localStorage
export function exibirContatosLista() {
    const contatoSalvo = JSON.parse(localStorage.getItem('contatos') || '[]');
    const ul = document.querySelector('.cnt-pessoa');

    if (ul) {
        ul.innerHTML = ''; // garante que a ul estara vazia, para enviar o novo contato sem mandar outros contatos antigos

        contatoSalvo.forEach((contato: Contatos) => {
            const li = document.createElement('li');
            li.innerHTML = `<svg width="23" height="24" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2 8.16002C23.2 12.6667 19.3049 16.32 14.5 16.32C9.69514 16.32 5.8 12.6667 5.8 8.16002C5.8 3.65338 9.69514 0 14.5 0C19.3049 0 23.2 3.65338 23.2 8.16002ZM14.5 19.04C6.49188 19.04 0 25.129 0 32.64C0 33.391 0.649188 34 1.45 34H27.55C28.3508 34 29 33.391 29 32.64C29 25.129 22.5081 19.04 14.5 19.04Z" fill="white"/>
                        </svg>
                        <span class="traco">-</span>    
                        <span class="nome-cnt">${contato.nome}</span>
                        <button class="editar">
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 21.625H21M14.125 3.5L18.5 7.25M2.875 14.75L15.1993 1.99524C16.5263 0.668257 18.6778 0.668254 20.0048 1.99523C21.3317 3.32221 21.3317 5.47367 20.0048 6.80065L7.25 19.125L1 21L2.875 14.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    `;
            ul.appendChild(li)
        })
    }
}