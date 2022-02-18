const express = require('express')
const views = require('../utilities')
const router = express.Router()


router.get('/user/add', (req, res) => {
    return res.sendFile(views('adduser.html'))
})

router.get('/edit/user/:id', (req, res) => {
    return res.sendFile(views('edituser.html'))
})

module.exports = router