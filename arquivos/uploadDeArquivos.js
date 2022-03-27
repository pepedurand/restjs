const fs = require('fs')

fs.createReadStream('./images/salsicha.jpg')
    .pipe(fs.createWriteStream('./images/salsicha-stream.jpg'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))