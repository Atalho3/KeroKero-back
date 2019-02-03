const kweet = require('../models').kweet

module.exports = {
    list(req,res){
        return kweet
        .findAll()
        .then(users => res.status(200).send(users))
        .catch(error => res.status(400).send(error))
    },
    post(req,res){
        if (req.body.content.length < 140 ){
            return kweet
            .create({
                content: req.body.content
            })
            .then(kweet => res.status(201).send(kweet))
            .catch((error) => res.status(400).send(error))
        }else{
            return res.status(400).send({message: 'too many character'})
        }

    },

    delete(req,res){
        return kweet
            .findById(req.params.id)
            .then(kweet => {
                if(!kweet) return res.status(400).send({message: 'kweet not found'})
                return kweet
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },
    
    edit(req,res){
        return kweet
        .findById(req.params.id)
        .then(kweet => {
            if(!kweet) return res.status(400).send({message: "kweet not found"})
            return kweet
            .update({
                content: req.body.content || kweet.content
            }) 
            .then((kweet) => res.status(200).send(kweet))
            .catch((error => res.status(400).send(error)))
        })
        .catch((error) => res.status(400).send(error))
    },

    rekweet(req,res){
        return kweet
        .findById(req.params.id)
        .then(rekweet => {
            if(!rekweet) return res.status(400).send({message: "kweet not found"})
            return kweet
            .create({
                content: req.body.content, 
                rk_id: req.params.id
            })
            .then(kweet => res.status(201).send(kweet))
            .catch((error => {
                console.log(error)
                return res.status(400).send(error)
            }))
        })
        .catch((error => {
            console.log(error)
            return res.status(400).send(error)
        }))
    }

}