import { novoContato } from "./services/cadastrarContato";
import { editarContatos } from "./services/editar";
import { removeErroAoDigita } from "./services/msgErro";
import { pesquisarContato } from "./services/pesquisar";
import { exibirContatosLista, localStorageFunc } from "./services/storage";
import { listaContatosToggle } from "./utils/abriFechaLista";
import { opcoesApagarContato } from "./utils/funcApagar";
import { camposVazios, validEmail, validFormulario, validNome, validTelefone } from "./utils/validacoes";

// Formulário
export const form = document.querySelector('.form') as HTMLFormElement;
export const inputNome = document.querySelector('#nome') as HTMLInputElement;
export const inputEmail = document.querySelector('#email') as HTMLInputElement;
export const inputTelefone = document.querySelector('#telefone') as HTMLInputElement;

inputNome.addEventListener('input', () => removeErroAoDigita(inputNome))
inputEmail.addEventListener('input', () => removeErroAoDigita(inputEmail))
inputTelefone.addEventListener('input', () => removeErroAoDigita(inputTelefone))

// Formulário
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!camposVazios(inputNome, inputEmail, inputTelefone)) return;

    validNome(inputNome);
    validEmail(inputEmail);
    validTelefone(inputTelefone);

    // Se o formulário estiver com todos o campos válidos, ai ele é enviado
    if (validFormulario(this)) {
        const nome = inputNome.value.trim();
        const email = inputEmail.value.trim();
        const telefone = inputTelefone.value.trim();

        const contato = novoContato(nome, email, telefone);
        
        localStorageFunc(contato);
    }

    let input = form.querySelectorAll('input');
    input.forEach((inp) => {
        inp.value = '';
    })

    exibirContatosLista()
})

// Abrindo e fechando a lista de contatos
listaContatosToggle()

// Buscar contato
pesquisarContato()

// Adicionando os contatos
exibirContatosLista();

// Editar o contato
editarContatos()

// Apagar contatos
opcoesApagarContato()