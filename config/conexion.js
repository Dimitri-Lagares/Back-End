const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'hospital-pets'
})

conexion.connect((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Database running succesfully');
    }
})

module.exports = conexion