const sequelize = require("sequelize");
const connection = require("../database/database");

const usuarios = connection.define("usuarios",{
    email:{
        type: sequelize.STRING,
        allowNull: false
    },senha:{
        type:sequelize.STRING,
        allowNull: false
    },nome:{
        type:sequelize.STRING,
        allowNull: false
    },matricula:{
        type:sequelize.INTEGER,
        allowNull: false
    },nascimento:{
        type:sequelize.STRING,
        allowNull: false
    }

});

usuarios.sync({force: false}).then(()=>{
    console.log("sincronização realizada com sucesso!")
})

module.exports = usuarios;