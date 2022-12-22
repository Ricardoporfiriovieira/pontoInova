const sequelize = require("sequelize")

/*
adicione aqui em baixo exatamente nessa ordem NOME-DA-TABELA, USUARIO-DO-BANCO-DE-DADOS, SENHA-DO-BANCO-DE-DADOS
*/

const conection = new sequelize("pontoinova", "root", "124551", {

    /*
        host: lugar onde o server está rodando,
        dialect: banco que será usado
    */

    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conection