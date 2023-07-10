const { request } = require('express')
const conexion = require('../../../../config/conexion')
const bcrypt = require('bcrypt')

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

exports.createUser = async (req, res) => {
    const {full_name, phone, address, email, password, rol} = req.body;
    const passwordHash = await bcrypt.hash(password, 10)
    const sql = `INSERT INTO users (full_name, phone, address, email, password, rol) VALUES ('${full_name}', '${phone}', '${address}', '${email}', '${passwordHash}', '${rol}')`
    conexion.query(sql, (error, rows)=>{
        if (error){
            res.send(error)
        } else {
            res.send('Se insertaron los datos')
        }
    })
}

exports.updateUser = (req, res) => {
    const {full_name, phone, address, email, password, rol} = req.body;
    const {id} = req.params;
    const sql = `UPDATE users SET full_name = '${full_name}', phone = '${phone}', address = '${address}', email = '${email}', password = '${password}', rol = '${rol}' WHERE id = '${id}'`
    conexion.query(sql, (error, rows)=>{
        if (error){
            res.send(error)
        } else {
            res.send('Se actualizaron los datos')
        }
    })
}

exports.deleteUser = (req, res) => {
    const {id} = req.params;

    const sql = `DELETE FROM users WHERE id = '${id}'`
    conexion.query(sql, (error, rows)=>{
        if (error){
            res.send(error)
        } else {
            res.send('Se eliminaron los datos')
        }
    })
}