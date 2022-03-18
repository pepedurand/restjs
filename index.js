const custonExpress = require('./config/customExpress')

const app = custonExpress()
app.listen(3000, () => console.log('servidor rodando na porta 3000'))

