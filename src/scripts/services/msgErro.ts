export const erro = 'error-message-borda';

export function msgErro(input: HTMLInputElement, msg: string): void {
   const divInput = input.parentElement as HTMLDivElement;
   const errorMessage = divInput.querySelector('.error-message') as HTMLSpanElement;

   errorMessage.innerText = msg
   divInput.classList.add(erro)
}
