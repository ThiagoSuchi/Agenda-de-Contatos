export const span = document.querySelector('.error-message') as HTMLSpanElement;
export function msgErro(msg: string): void {
    if (span) {
        span.innerText = msg
        span.style.display = 'block';
    }
}
// AVISO: O browser está quebrando após span receber uma msg muito grande!