import { novoContato } from "./services/cadastrarContato";
import { removeErroAoDigita } from "./services/msgErro";
import { exibirContatosLista, localStorageFunc } from "./services/storage";
import { camposVazios, validEmail, validFormulario, validNome, validTelefone } from "./utils/validacoes";

// Formulário
export const form = document.querySelector('.form') as HTMLFormElement;
const inputNome = document.querySelector('#nome') as HTMLInputElement;
const inputEmail = document.querySelector('#email') as HTMLInputElement;
const inputTelefone = document.querySelector('#telefone') as HTMLInputElement;

// Buscar contatos
const divBuscar = document.querySelector('.buscar') as HTMLDivElement;
const lupa = document.querySelector('.lupa') as HTMLDivElement;

// Abrir e fechar lista
const btnAbrirListaContatos = document.querySelector('.contatos') as HTMLDivElement;
const menuContatos = document.querySelector('.menu-contatos') as HTMLDivElement;
const btnFechar = document.querySelector('.btn-fechar') as HTMLButtonElement;

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


// Pesquisar
lupa.addEventListener('click', () => {
    divBuscar.classList.toggle('ativar')
})

//Abrindo e fechando a lista de contatos
btnAbrirListaContatos.addEventListener('click', () => {
    menuContatos.classList.add('ativo');
    btnFechar.classList.add('ativo');
})

btnFechar.addEventListener('click', () => {
    menuContatos.classList.remove('ativo');
    btnFechar.classList.remove('ativo');
})

// Adicionando os contatos
exibirContatosLista();
