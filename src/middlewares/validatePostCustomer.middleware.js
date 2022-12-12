import { customerSchema } from "../models/customers.model.js";
import { connection } from "../database/db.js";

export async function validatePostCustomer(req, res, next){

    const body = req.body
    
    const {id} = req.params

    const validation = customerSchema.validate(body, {abortEarly:false})

    if(validation.error){

        return res.status(400).send(validation.error.message)
    }

    const user = await connection.query('SELECT * FROM customers WHERE id=$1;', [id])

    if(!user){
        return res.sendStatus(404)
    }


    next()
}