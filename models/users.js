const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user:'root',
    password:'root',
    database:'proyecto-1'
});

function query(sql, data) {
    return new Promise((resolve, reject) => {
        connection.query(sql, data, (err, result)=>{
            if(err){
                reject(err.sqlMessage)
            }else{
                resolve(result)
            }
        })
    })
}

// CRUD operations

const create = async (data) => {
    try {
        var sql = `INSERT INTO users (??) VALUES (?)`;
        var results = await query(sql, [Object.keys(data),Object.values(data)])
        return {results, success:true}
    } catch (err) {
        return {err, success:false}
    }
}

const read = async () => {
    var sql = 'SELECT * FROM users';
    var results = await query(sql);
    return results
}

const update = async (data, id) => {
    try {
        var sql = `UPDATE users SET ? WHERE id=?`;
        var results = await query(sql, [data, id])     // data=object/dictionary ; id=int
        return {results, success:true}
    } catch (err) {
        return {err, success:false}
    }
}

const del = async (id) => {
    try {
        var sql = `DELETE FROM users WHERE id=?`;
        var results = await query(sql, id);
        return {results, success:true}
    } catch (err) {
        return {err, success:false}
    }
}

module.exports = {create, read, update, del}