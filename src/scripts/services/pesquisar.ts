const divBuscar = document.querySelector('.buscar') as HTMLDivElement;
const lupa = document.querySelector('.lupa') as HTMLDivElement;
const inputBuscar = document.getElementById('buscar-contato') as HTMLInputElement;
const semContato = document.querySelector('.sem-contato') as HTMLParagraphElement;

export function pesquisarContato() {
    // Aqui eu fiz uma animação para o input
    lupa.addEventListener('click', () => {
        divBuscar.classList.toggle('ativar')
    })

    

    // Filtrando o contato específicado
    inputBuscar.addEventListener('input', () => {
        const value = inputFormatado(inputBuscar.value);
        const contatos = document.querySelectorAll('ul li');

        let contatoEncontrado = false

        contatos.forEach((item) => {
            const contato = inputFormatado(item.textContent as string);

            if (contato.indexOf(value) !== -1) {
                (item as HTMLElement).style.display = 'flex';
                contatoEncontrado = true;
            } else {
                (item as HTMLElement).style.display = 'none';
            }
            
        })
        
        
        if (!contatoEncontrado) {
            semContato.style.display = 'flex';
        } 
        
        // Se o input estiver vazio, o comentario é removido
        if (inputBuscar.value === '') {
            semContato.style.display = 'none';
        }

    })
}

// Formatando o valor recebido do input
function inputFormatado(value: string): string {
    return value
        .toLowerCase()
        .trim()
}