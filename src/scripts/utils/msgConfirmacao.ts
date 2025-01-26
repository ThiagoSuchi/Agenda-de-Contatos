export function abrirModal() {
    const modal = document.getElementById("modal-confirm") as HTMLDivElement;
    modal.classList.add("ativo");
}

export function fecharModal() {
    const modal = document.getElementById("modal-confirm") as HTMLDivElement;
    modal.classList.remove("ativo");
}
