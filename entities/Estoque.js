export class Estoque{
   
    constructor(cod,nomeDoEstque,usuario, produtos = []){
        this.cod = cod
        this.nomeDoEstoque = nomeDoEstque
        this.usuario = usuario
        this.produtos = produtos
    }

}
