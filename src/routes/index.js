const express = require('express')
const router = express.Router()
const userController = require('../controllers').user
const kweetController = require('../controllers').kweet

//user routes
router.get('/user',userController.list)
router.post('/user',userController.createUser)
router.put('/user/:id',userController.edit)
router.delete('/user/:id',userController.delete)

//kweet routes
router.get('/kweet',kweetController.list)
router.post('/kweet',kweetController.post)
router.delete('/kweet/:id',kweetController.delete)
router.put('/kweet/:id',kweetController.edit)
router.post('/kweet/rekweet/:id',kweetController.rekweet)

module.exports = router;