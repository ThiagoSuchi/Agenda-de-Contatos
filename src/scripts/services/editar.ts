export function editarContatos() {
    document.addEventListener('click', (e) => {
        const target = (e.target as HTMLElement)

        if (target.classList.contains('editar') || target.classList.contains('edit')) {
            toggleForm()
        }
    })
}

function toggleForm() {
    const formulario = document.querySelector('.formulario') as HTMLDivElement;
    const editForm = document.querySelector('.editar-form') as HTMLDivElement;
    const cancelar = document.querySelector('.btn-add.cancel') as HTMLButtonElement;

    formulario.style.display = 'none';
    editForm.style.display = 'flex';

    if (cancelar) {
        cancelar.addEventListener('click', () => {
            formulario.style.display = 'flex';
            editForm.style.display = 'none';
        })
    }
}