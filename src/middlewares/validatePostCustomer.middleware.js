import { customerSchema } from "../models/customers.model.js";
import { connection } from "../database/db.js";

export async function validatePostCustomer(req, res, next){

    const body = req.body

    const validation = customerSchema.validate(body, {abortEarly:false})

    if(validation.error){

        return res.status(400).send(validation.error.message)
    }

    const existCustomer = await connection.query('SELECT * FROM customers WHERE cpf=$1', [body.cpf])

    if(existCustomer.rows[0]){

        return res.status(409).send('CPF já registrado!')
    }

    next()
}