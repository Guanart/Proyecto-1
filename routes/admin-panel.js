const express = require('express')
const router = express.Router()
const views = require('../utilities')

router.get('/admin', function (req, res) {
    console.log(views("admin.html"))
    return res.sendFile(views("admin.html"))
})

module.exports = router