const conexion = require('../../../../config/conexion')

exports.getAllPets = (req, res) => {
    const sql = 'SELECT * FROM pets'
    conexion.query(sql, (error, rows)=>{
        if (error) {
           res(error) 
        } else {
            res.json(rows)
        }
    })
}

exports.getPetsById = (req, res) => {
    const {id} = req.params;
    const sql = `SELECT * FROM pets WHERE id = ${id}`
    conexion.query(sql, (error, rows)=>{
        if (error) {
           res(error) 
        } else {
            res.json(rows)
        }
    })
}

exports.createPet = (req, res) => {
    const {name, type, race, age, weight} = req.body;
    const sql = `INSERT INTO pets (name, type, race, age, weight) VALUES ('${name}', '${type}', ${race}', '${age}', '${weight}')`
    conexion.query(sql, (error, rows)=>{
        if (error){
            res(error)
        } else {
            res.json('Se insertaron los datos')
        }
    })
}