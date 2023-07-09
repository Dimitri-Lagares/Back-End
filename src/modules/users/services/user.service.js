const { request } = require('express')
const conexion = require('../../../../config/conexion')

exports.getAllUsers = (req, res) => {
    const sql = 'SELECT * FROM users'
    conexion.query(sql, (error, rows)=>{
        if (error) {
           res(error) 
        } else {
            res.json(rows)
        }
    })
}

exports.getUsersById = (req, res) => {
    const {id} = req.params;
    const sql = `SELECT * FROM users WHERE id = ${id}`
    conexion.query(sql, (error, rows)=>{
        if (error) {
           res(error) 
        } else {
            res.json(rows)
        }
    })
}

exports.createUser = (req, res) => {
    const {full_name, phone, address, email, password, rol} = req.body;
    const sql = `INSERT INTO users (full_name, phone, address, email, password, rol) VALUES ('${full_name}', '${phone}', '${address}', '${email}', '${password}', '${rol}')`
    conexion.query(sql, (error, rows)=>{
        if (error){
            res.send(error)
        } else {
            res.send('Se insertaron los datos')
        }
    })
}