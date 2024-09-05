//este modulo ejecuta todo el servidor y lo inicializa
const express = require('express')
const mysql = require('mysql');
const cors = require('cors');
const port = 8080;
const app = express()

app.use(cors());
app.use(express.json());

//middlewares - funciones
const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_sanisidro',
    port: '3306'
})
app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})

app.get('/', (req,res)=>{
    const sql="SELECT * FROM tb_paciente";
    db.query(sql, (err,data)=>{
        if(err) return res.json();
        return res.json(data);
    })
})