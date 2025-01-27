import { Contatos } from "../models/contato";
import { camposVazios, validEditNome, validEmail, validFormulario, validTelefone } from "../utils/validacoes";
import { removeErroAoDigita } from "./msgErro";
import { exibirContatosLista } from "./storage";

export function editarContatos() {
    let contatosSalvos: Contatos[] = JSON.parse(localStorage.getItem('contatos') || '[]');

    document.addEventListener('click', (e) => {
        const target = (e.target as HTMLElement)

        if (target.classList.contains('editar') || target.classList.contains('edit')) {
            const nomeSelecionadoElement = target.closest('li')?.querySelector('.nome-cnt') as HTMLSpanElement;

            if (nomeSelecionadoElement) {
                const nomeSelecionado = nomeSelecionadoElement.textContent?.trim()

                // Está me retornando o nome, da li que cliquei
                const contatoSelecionado = contatosSalvos.find(contato => contato.nome.trim() === nomeSelecionado)

                if (contatoSelecionado) {
                    const formEditar = document.querySelector('.editar-form') as HTMLFormElement;
                    const inputEditNome = formEditar.querySelector('#nome') as HTMLInputElement;
                    const inputEditEmail = formEditar.querySelector('#email') as HTMLInputElement;
                    const inputEditTelefone = formEditar.querySelector('#telefone') as HTMLInputElement;

                    if (!formEditar || !inputEditNome || !inputEditEmail || !inputEditTelefone) {
                        console.log('Elemento não encontrado');
                        return;
                    };

                    inputEditNome.value = contatoSelecionado.nome
                    inputEditEmail.value = contatoSelecionado.email
                    inputEditTelefone.value = contatoSelecionado.telefone

                    inputEditNome.addEventListener('input', () => removeErroAoDigita(inputEditNome))
                    inputEditEmail.addEventListener('input', () => removeErroAoDigita(inputEditEmail))
                    inputEditTelefone.addEventListener('input', () => removeErroAoDigita(inputEditTelefone))

                    if (!formEditar.onsubmit) {
                        formEditar.onsubmit = function (e) {
                            e.preventDefault();

                            if (!camposVazios(inputEditNome, inputEditEmail, inputEditTelefone)) return;

                            validEditNome(inputEditNome);
                            validEmail(inputEditEmail);
                            validTelefone(inputEditTelefone);

                            // Se o formulário estiver com todos o campos válidos, ai ele é enviado
                            if (validFormulario((this as HTMLFormElement))) {
                                const nome = inputEditNome.value.trim();
                                const email = inputEditEmail.value.trim();
                                const telefone = inputEditTelefone.value.trim();

                                const contaIndex = contatosSalvos.findIndex(contato => contato.nome === contatoSelecionado.nome)

                                if (contaIndex !== -1) {
                                    contatosSalvos[contaIndex] = {
                                        nome: nome,
                                        email: email,
                                        telefone: telefone
                                    }
                                }

                                localStorage.setItem('contatos', JSON.stringify(contatosSalvos));
                                exibirContatosLista()
                            }
                        }
                    }
                }
            }
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

    // Remove eventos duplicados
    if (cancelar) {
        cancelar.removeEventListener('click', cancelarEdicao);
        cancelar.addEventListener('click', cancelarEdicao);
    }

    function cancelarEdicao() {
        formulario.style.display = 'flex';
        editForm.style.display = 'none';
        return
    }
}
