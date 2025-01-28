import { Contatos } from "../models/contato"

let idUnico = 1

export function novoContato(nome: string, email: string, telefone: string): Contatos {

    const gerarId = () => {
        return idUnico++
    }

    const contato: Contatos = {
        id: gerarId(),
        nome,
        email,
        telefone
    }

    return contato
}