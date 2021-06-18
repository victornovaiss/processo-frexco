import { Produto } from "../entities/Produto.js"

export class ProdutoUseCase{
    constructor(produto = new Produto){
       
        this.produto = new Produto(produto.nome,produto.preco,produto.cod,produto.estoque)
    }

    //Criação do produto
    
    cadastrarProduto(){
        return this.produto
    }

    //Edição de produto

    removerDoEstoque(){
        this.produto.estoque = 'SEM ESTOQUE'
    }

    alterar({nome = '',preco = '',cod = '',estoque = ''}){
        
        

        let produtoAlterado = {
            nome:nome,
            preco:preco,
            cod:cod,
            estoque:estoque
        }

        for (let key in produtoAlterado){
            
            if(!produtoAlterado[key]){
                produtoAlterado[key] = this.produto[key]
            }
        }

        this.produto = new Produto(produtoAlterado.nome,produtoAlterado.preco,produtoAlterado.cod,produtoAlterado.estoque)
    }

    estocar(estoque){
        this.estoque = estoque
    }
}


