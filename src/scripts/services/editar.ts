export function editarContatos() {
    document.addEventListener('click', (e) => {
        const target = (e.target as HTMLElement)

        if (target.classList.contains('editar') || target.classList.contains('edit')) {
            console.log('opaaa');

            toggleForm()
        }
    })
}

function toggleForm() {
    const formulario = document.querySelector('.formulario') as HTMLDivElement;
    const editForm = document.querySelector('.editar-form') as HTMLDivElement;

    formulario.style.display = 'none';
    editForm.style.display = 'flex';
}