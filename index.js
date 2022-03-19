const custonExpress = require('./config/customExpress')

const conexao = require('./infraestrutura/conexao')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log("Conectado com sucesso.")
        const app = custonExpress()
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})



