/*Vamor a importar */
import express from "express";
import {config} from "dotenv"
import pg from 'pg';

config()

const app = express()
const pool= new pg.Pool({
    connectionString: 'process.env.DATABASE_URL',
    ssl: true
})

app.get('/', (req, res)=>{
    res.send('hello people')
})

/*Creamos una ruta extra*/ 
app.get('/ping', async(req, res)=>{
    /**OBTENEMOS LA FECHA ACTUAL Y LO DEVUELVE*/
    const result= await pool.query('SELECT NOW()')
    return res.json(result.rows[0]);
})


app.listen(8080)
console.log('server on port', 8080);
