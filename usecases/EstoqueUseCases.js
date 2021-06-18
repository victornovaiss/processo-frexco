import { Estoque } from "../entities/Estoque.js"

export class EstoqueUseCase {
    constructor(estoque = new Estoque()) {
        this.estoque = new Estoque(estoque.nomeDoEstoque, estoque.usuario)
    }

    // Criação do Estoque 

    cadastrarEstoque() {
        return this.estoque
    }

    // Edição do Estoque

    removerProdutos() {

        this.estoque.produtos = this.estoque.produtos.map(el => {
            el.estoque = 'SEM ESTOQUE'
        })

        return this.estoque.produtos

    }

    alterar({ cod = '', nomeDoEstoque = '', produtos = [] }) {



        let estoqueAlterado = {
            cod: cod,
            nomeDoEstoque: nomeDoEstoque,
            usuario: this.usuario,
            produtos: produtos
        }

        for (let key in estoqueAlterado) {

            if (!estoqueAlterado[key]) {
                estoqueAlterado[key] = this.estoque[key]
            }
        }

        this.estoque = new Estoque(estoqueAlterado.cod, estoqueAlterado.nomeDoEstoque, estoqueAlterado.usuario, estoqueAlterado.produtos)
    }

    // Deletar produto x estoque

    removerProdutoPorCod(cod) {

        let produtoDeletado = this.estoque.produtos.forEach(el => {
            if (el.cod == cod) {
                return el
            } else {
                return 'Não encontrado'
            }
        })


        this.estoque.produtos = this.estoque.produtos.filter(el => el.cod != cod)

        return produtoDeletado

    }

    // Vizualizar produtos x estoque

    listarProdutos() {
        return this.estoque.produtos
    }

}


