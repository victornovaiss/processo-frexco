export class User{

    constructor(email,senha, meusEstoques = []){
        this.email = email,
        this.senha = senha,
        this.meusEstoques = meusEstoques
    }

}