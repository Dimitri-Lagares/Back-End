const express = require('express'); 
const conexion = require('./config/conexion')
const routers = require('./router/index')

const app = express();
const port = 3000


app.set('port', port)

// app.get('/param/:id', (req, res)=>{
//     const {id}= req.params;
//     res.send('esto envie por parametro: '+ id)
// })

app.get('/', (req, res) => {
    res.json({message:'Hola mundo'})
})

app.use(express.json())

routers(app)

app.listen(app.get('port'), (error) =>{
    if (error){
        console.error(error);
    } else {
        console.log('Server running on port:', port);
    }
})