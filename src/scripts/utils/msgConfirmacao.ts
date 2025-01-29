
export function abrirModal() {
    const modal = document.getElementById("modal-confirm") as HTMLDivElement;
    const formulario = document.querySelector('.formulario') as HTMLDivElement;
    const editForm = document.querySelector('.editar-form') as HTMLDivElement;
    
    modal.classList.add("ativo");

    formulario.style.display = 'flex';
    editForm.style.display = 'none';
}

export function fecharModal() {
    const modal = document.getElementById("modal-confirm") as HTMLDivElement;
    modal.classList.remove("ativo");
}
