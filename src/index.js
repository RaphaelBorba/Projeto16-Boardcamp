import express from "express";
import cors from 'cors';
import { connection } from "./database/db.js";
import dotenv from 'dotenv';

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.get('/produtos', async (req,res)=>{
    const produtos = await connection.query("SELECT * FROM produtos")

    res.send(produtos.rows)
})

const port = process.env.PORT || 4000;

app.listen(port,()=>console.log(`Server on ${port}:`));