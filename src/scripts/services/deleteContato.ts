import { Contatos } from "../models/contato";
import { abrirModal, fecharModal } from "../utils/msgConfirmacao";
import { toggleForm } from "./editar";

export function deletContatos(opcao: 'unico' | 'varios') {
    const contatosSalvos: Contatos[] = JSON.parse(localStorage.getItem('contatos') || '[]');
    const contatoSelecionado = document.querySelector('.contato-salvo.ativo') as HTMLLIElement;
    const divApagarEstilo = document.querySelector('.apagar-estilo') as HTMLDivElement;
    const divApagarEstilo2 = document.querySelector('.apagar-estilo2') as HTMLDivElement;
    const ul = document.querySelector('.cnt-pessoa') as HTMLUListElement;

    // Alterna a visibilidade das caixas de opções
    divApagarEstilo.classList.toggle('ativo', opcao === 'unico');
    divApagarEstilo2.classList.toggle('ativo', opcao === 'varios');

    const btnConfirmar = document.getElementById("btn-confirmar-exclusao") as HTMLButtonElement;
    const btnCancelar = document.getElementById("btn-cancelar-exclusao") as HTMLButtonElement;

    // Se for slecionado a opção para deletar apenas um contato
    if (opcao === 'unico') {
        if (!contatoSelecionado) {
            alert('Nenhum contato foi selecionado para excluir.');
            divApagarEstilo.classList.remove('ativo');
            return;
        }

        abrirModal()

        btnConfirmar.addEventListener('click', () => {
            // Puxei o nome da li que esta com a class 'ativo', ou seja, é o contato que está selecionado
            const nomeSelecionado = contatoSelecionado.querySelector('.nome-cnt')?.textContent;

            // Aqui eu removo o contato que está selecionado
            const contatosAtualizados = contatosSalvos.filter((contato) => contato.nome !== nomeSelecionado);

            // Salvei as alterações no localStorage
            localStorage.setItem('contatos', JSON.stringify(contatosAtualizados));

            divApagarEstilo.classList.remove('ativo');

            if (!contatosSalvos || contatosSalvos.length === 0) {
                ul.innerHTML = '<li class="sem-contato">Nenhum contato salvo.</li>';
            }

            // Removi o contato do DOM
            contatoSelecionado.remove();

            fecharModal();
        })

        btnCancelar.addEventListener('click', fecharModal);
    }

    // Aqui se caso for selecionado a opção para deletar vários contatos simultâneamente
    if (opcao === "varios") {
        const checkBoxs = Array.from(document.querySelectorAll('.checkbox'));
        const btnApagarContatos = divApagarEstilo2.querySelector('.apagar-contato') as HTMLButtonElement;

        checkBoxs.forEach((contato) => contato.classList.add('ativo'));

        btnApagarContatos.addEventListener('click', () => {
            const checkMarcado = checkBoxs.some((contato) => (contato as HTMLInputElement).checked);
            let contatosAtualizados = [...contatosSalvos];

            abrirModal();
            divApagarEstilo2.classList.remove('ativo');

            btnConfirmar.addEventListener('click', () => {
                if (!checkMarcado) {
                    alert('Porfavor selecione ao menos um contato, para poder excluir.');
                    fecharModal();
                    checkBoxs.forEach((contato) => contato.classList.remove('ativo'));
                    return;
                }

                checkBoxs.forEach((contato) => {
                    if ((contato as HTMLInputElement).checked) {
                        const contatoSelecionado = contato.closest('.contato-salvo') as HTMLLIElement;
                        const nomeSelecionado = contatoSelecionado.querySelector('.nome-cnt')?.textContent;

                        if (nomeSelecionado) {
                            contatosAtualizados = contatosAtualizados.filter((contato) => contato.nome !== nomeSelecionado);
                        }

                        localStorage.setItem('contatos', JSON.stringify(contatosAtualizados));
                        contatoSelecionado.remove();
                    }
                    contato.classList.remove('ativo');
                })
                fecharModal();
            })

            btnCancelar.addEventListener('click', () => {
                fecharModal();
                checkBoxs.forEach((contato) => contato.classList.remove('ativo'));
            })
        })
    }
}