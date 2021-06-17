export class Estoque{
   
    constructor(nomeDoEstque,usuario, produtos = []){
        this.nomeDoEstoque = nomeDoEstque
        this.usuario = usuario
        this.produtos = produtos
    }

    QtdEmEstoque(){
        return this.produtos.length
    }

    produtosDisponiveis(){
        return this.produtos
    }
}
