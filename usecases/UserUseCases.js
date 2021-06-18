import { User } from "../entities/Users";

export class UserUseCases{
    constructor(user = new User()){
        this.user = user
    }

    // Mudar senha do usuário
    mudarSenha(senha){
        this.user.senha = senha
    }
   
    //Deleção de Estoque 
    
    removerEstoquePorNome(nome) {

        let estoqueDeletado = this.user.meusEstoques.forEach(el => {
            if (el.nome == nome) {
                return el
            } else {
                return 'Não encontrado'
            }
        })


        this.user.meusEstoques = this.user.meusEstoques.filter(el => el.nome != nome)

        return estoqueDeletado

    }

}