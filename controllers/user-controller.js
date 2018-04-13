
module.exports = { //module export est un objet donc il doit avoir une affectation avec =

    getUsers(req,res){
        res.send({user:'users'})
    },
    getUser(req,res){
        res.send({user:'user'+req.params.id})
    }
}