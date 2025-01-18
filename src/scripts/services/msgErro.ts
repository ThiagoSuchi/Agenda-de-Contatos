export const bordaError = 'error-message-borda';
export const span = document.querySelector('.error-message') as HTMLSpanElement;

export function msgErro(input: HTMLInputElement, msg: string): void {
   const divInput = input.parentElement as HTMLDivElement;
   const errorMessage = divInput.querySelector('.error-message') as HTMLSpanElement;

   errorMessage.innerText = msg
   divInput.classList.add(bordaError)
}
