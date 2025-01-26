import { Contatos } from "../models/contato";
import { abrirModal, fecharModal } from "./msgConfirmacao";

export function deletContatos(opcao: 'unico' | 'varios') {
    const contatosSalvos: Contatos[] = JSON.parse(localStorage.getItem('contatos') || '[]');
    const contatoSelecionado = document.querySelector('.contato-salvo.ativo') as HTMLLIElement;
    const divApagarEstilo = document.querySelector('.apagar-estilo') as HTMLDivElement;
    const divApagarEstilo2 = document.querySelector('.apagar-estilo2') as HTMLDivElement;

    if (opcao === "varios") {
        divApagarEstilo.classList.remove('ativo')
        divApagarEstilo2.classList.add('ativo')
    } else if (opcao === "unico") {
        divApagarEstilo.classList.add('ativo')
        divApagarEstilo2.classList.remove('ativo')
    }

    if (!contatoSelecionado && opcao === "unico") {
        alert('Nenhum contato foi selecionado para excluir.');
        return;
    }

    const btnConfirmar = document.getElementById("btn-confirmar-exclusao") as HTMLButtonElement;
    const btnCancelar = document.getElementById("btn-cancelar-exclusao") as HTMLButtonElement;

    if (opcao === 'unico') {
        abrirModal()

        btnConfirmar.addEventListener('click', () => {
            // Puxei o nome da li que esta com a class 'ativo', ou seja, é o contato que está selecionado
            const nomeSelecionado = contatoSelecionado.querySelector('.nome-cnt')?.textContent;

            // Aqui eu removo o contato que está selecionado
            const contatosAtualizados = contatosSalvos.filter((contato) => {
                return contato.nome !== nomeSelecionado
            })

            // Salvei as alterações no localStorage
            localStorage.setItem('contatos', JSON.stringify(contatosAtualizados));

            // Removi o contato do DOM
            contatoSelecionado.remove()

            fecharModal()
        })
        btnCancelar.addEventListener('click', fecharModal)
    }


    if (opcao === "varios") {
        const inputCheck = Array.from(document.querySelectorAll('.contato-salvo .checkbox'));
        const checkBox = document.querySelector('.checkbox.ativo') as HTMLInputElement;

        inputCheck.map((contato) => {
            contato.classList.add('ativo')
        })

        const btnApagarContatos = divApagarEstilo2.querySelector('.apagar-contato') as HTMLButtonElement;

        btnApagarContatos.addEventListener('click', () => {
            abrirModal()
            divApagarEstilo2.classList.remove('ativo')

            btnConfirmar.addEventListener('click', () => {
                console.log('Opaa');
                
                checkBox.addEventListener('change', (event) => {
                    if ((event.target as HTMLInputElement).checked) {
                       console.log('OOW, boa chegou aqui pelo menos');
                    }
                })
            })

            btnCancelar.addEventListener('click', () => {
                fecharModal()
                checkBox.classList.remove('ativo')
            })
        })
    }
}