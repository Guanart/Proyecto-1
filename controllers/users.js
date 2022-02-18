const users = require('../models/users')

class UserController{
    async create(data){
        const results = await users.create(data)
        return results
    }
    async read(){
        const results = await users.read()
        return results
    }
    async update(data, id){
        const results = await users.update(data, id)
        console.log(results)
        return results
    }
    async delete(id){
        const results = await users.del(id)
        return results
    }

}

module.exports = UserController