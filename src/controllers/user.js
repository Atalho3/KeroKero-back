const user = require('../models').user

module.exports = {
    list(req,res){
        return user
            .findAll()
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },
    createUser(req,res){
       return user
            .create({
                 name: req.body.name,
                 email: req.body.email,
                 password_digest: req.body.password
            })
            .then(user => res.status(201).send(user))
            .catch((error) => res.status(400).send(error))
    },

    delete(req,res){
        return user
            .findById(req.params.id)
            .then(user => {
                if(!user) return res.status(400).send({message: 'user not found'})
                return user
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },

    edit(req,res){
        return user
        .findById(req.params.id)
        .then(user => {
            if(!user) return res.status(400).send({message: "user not found"})
            return user
            .update({
                name: req.body.name || user.name
            }) 
            .then((user) => res.status(200).send(user))
            .catch((error => res.status(400).send(error)))
        })
        .catch((error) => res.status(400).send(error))
    }
}