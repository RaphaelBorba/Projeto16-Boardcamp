import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import categoriesRouter from './routes/categories.route.js'
import gamesRouter from './routes/games.route.js'
import customersRouter from './routes/customers.route.js'
import rentalsRouter from './routes/rentals.route.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

/* FALTA FAZER O UPDATE DE CUSTOMERS */

app.use(categoriesRouter)
app.use(gamesRouter)
app.use(customersRouter)
app.use(rentalsRouter)

const port = process.env.PORT || 4000;

app.listen(port,()=>console.log(`Server on ${port}:`));