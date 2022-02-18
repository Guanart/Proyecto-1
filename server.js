const express = require('express')
const path = require('path')
const adminPanel = require('./routes/admin-panel')
const api = require('./routes/api')
const users = require('./routes/users')

const app = express()

// Middleware
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"static")))
app.use(adminPanel)
app.use(api)
app.use(users)

app.listen(4000,function(){
    console.log("Funcionando... http://localhost:4000")
})
