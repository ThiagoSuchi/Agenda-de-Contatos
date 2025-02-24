export const erro = 'error-message-borda';

export function msgErro(input: HTMLInputElement, msg: string): void {
   const divInput = input.parentElement as HTMLDivElement;
   const errorMessage = divInput.querySelector('.error-message') as HTMLSpanElement;

   errorMessage.innerText = msg
   divInput.classList.add(erro)
}

// Remove o erro de campo vazio ao digitar no input
export function removeErroAoDigita(input: HTMLInputElement): void {
   const divInput = input.parentElement as HTMLDivElement;
   const errorMessage = divInput.querySelector('.error-message') as HTMLSpanElement;

   // Removi a msg de erro
   if (errorMessage) {
      errorMessage.innerText = '';
   }

   // Removi a borda de erro
   divInput.classList.remove(erro);
}