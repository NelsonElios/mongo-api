const User = require('../models/user');
module.exports = { //module export est un objet donc il doit avoir une affectation avec =

    readAll(req,res) {
        res.send({user:'users'})
    },
    read(req,res) {
        res.send({user:'user'+req.params.id})
    },
    create(req,res) {
        const body = req.body;
        const user = new User({name: body.name});
        user.save().then(
            () => {
               res.send({result : 'création de' +user})
            }
        )


    }
}


