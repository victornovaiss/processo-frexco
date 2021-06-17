class User{
    constructor(email,senha, meusEstoques = []){
        this.email = email,
        this.senha = senha,
        this.meusEstoques = meusEstoques
    }

    getEmail(){
        return this.email
    }

    setSenha(senha){
        if (senha == this.senha){
            console.log('Senha igual a atual')
        }else{
            this.senha = senha
        }
    }
}

module.exports = User