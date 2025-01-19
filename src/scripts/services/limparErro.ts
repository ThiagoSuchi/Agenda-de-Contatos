import { erro } from "./msgErro";


export function limparError(form: HTMLFormElement): void {
    form.querySelectorAll('.' + erro).forEach((item) => {
        item.classList.remove(erro)
    }) 
}