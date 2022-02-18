const express = require('express')
const UserController = require('../controllers/users')

const router = express.Router()
const userController = new UserController()

router.post('/api/users', async (req, res) => {
    const data = req.body
    const results = await userController.create(data)
    console.log(results)
    return res.redirect('/admin')
})

router.get('/api/users', async (req, res) => {
    const results = await userController.read()
    return res.json(results)
})

router.post('/api/user/edit', async (req, res) => {
    const data = req.body
    const id = data.id
    var newData = {}
    for (let element in data) {
        if (element !== 'id') {
            newData[element] = data[element]
        }
    }
    const results = await userController.update(newData, id)
    return res.redirect('/admin')
})

router.delete('/api/users/:id', async (req, res) => {
    const id = req.params.id
    const results = await userController.delete(id)
    return res.json(results)
})


module.exports = router