import { ClientesInterface } from "./clientes-interface";

export interface PeticionInterface {
    "page":number,
    "per_page":number,
    "total":number,
    "total_pages":number,
    "results": ClientesInterface[]
}
