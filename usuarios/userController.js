const express = require("express");
const router = express.Router();
const usuarios = require("./user")
const bcrypt = require('bcrypt');
const session = require('express-session');
const connection = require("../database/database")

router.get("/registrousuario", (req,res)=>{
    res.render("registrousuario")
})

router.post("/autenticar", (req, res)=>{
    var matricula = req.body.matricula;
    var senha = req.body.senha;

    usuarios.findOne({where:{matricula: matricula}}).then(usuario=>{
        
        if(usuario != undefined){
            var correto = bcrypt.compareSync(senha, usuario.senha);
            if(correto){
                req.session.usuario = {
                    id: usuario.id,
                    matricula: usuario.matricula
                }
                res.json(req.session.usuario);
            }else{
                res.redirect("/");
            }
        }else{
            res.redirect("/");
        }


    })
})

router.post("/usuario/criar", (req, res)=>{
    
    var nome = req.body.nome;
    var matricula = req.body.matricula;
    var senha = req.body.senha;
    var email = req.body.email;
    var nascimento = req.body.nascimento;

    usuarios.findOne({where:{matricula: matricula}}).then((user)=>{
        if(user == undefined){

            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(senha, salt);
        
        
            usuarios.create({
                nome: nome,
                matricula: matricula,
                senha: hash,
                email: email,
                nascimento: nascimento
            }).then(()=>{
                res.redirect("/")
            }).catch((erro)=>{
                res.redirect("/cu")
                console.log(erro);
            })

        }else{
            res.redirect("/registrousuario");
        }
    })



   
})



module.exports = router;