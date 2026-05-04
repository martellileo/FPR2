import { ItemVenda } from "./item-venda.modelo";

export interface Venda {
    id: number,
    data: string,
    cliente: string,
    itens: ItemVenda[]
}