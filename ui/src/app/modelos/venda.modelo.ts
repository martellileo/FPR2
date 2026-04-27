import { ItemVenda } from "./item-venda.modelo";

export interface Venda {
    codigo: number,
    data: string,
    cliente: string,
    itens: ItemVenda[]
}