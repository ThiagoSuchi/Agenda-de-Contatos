import { Contatos } from "../models/contato"

export function novoContato(nome: string, email: string, telefone: string): Contatos {

    const contato: Contatos = {
        nome,
        email,
        telefone
    }

    return contato
}