import {Estoque} from "../entities/Estoque.js"
import {ProdutoUseCase} from "../usecases/ProdutoUseCase.js"
import { Produto } from "../entities/Produto.js"

export class EstoqueUseCase{
    constructor(estoque = new Estoque()){
        this.estoque = new Estoque(estoque.nomeDoEstoque, estoque.usuario)
    }

    listarEstoque(){
        this.estoque.produtos = produtos.filter(el=> el.estoque == this.estoque.nomeDoEstoque)

        return this.estoque.produtos
    }
}


