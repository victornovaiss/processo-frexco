
export class Produto{
    constructor(nome,preco,cod,estoque = 'SEM ESTOQUE'){
        this.nome = nome
        this.preco = preco
        this.cod = cod
        this.estoque = estoque
    }

}

