import { connection } from "../database/db.js";

export async function getCustomers(req, res){

    const { cpf } = req.query

    try {

        if (cpf) {

            const games = await connection.query("SELECT * FROM customers WHERE name LIKE ($1 || '%');", [cpf])

            return res.send(games.rows).status(200);
        }

        const games = await connection.query(`SELECT * FROM customers;`)

        res.send(games.rows).status(200)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function getCustomersById(req,res){

    const {id} = req.params

    
    try {
        
        const userId = await connection.query('SELECT * FROM customers WHERE id=$1', [id])
    
        if(!userId.rows[0]){
            return res.sendStatus(404)
        }

        res.status(200).send(userId.rows[0]);
        

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function postCustomers(req,res){

    const body = req.body

    try {

        await connection.query('INSERT INTO customers(name, cpf, birthday, phone) VALUES ($1,$2,$3,$4);',
         [body.name, body.cpf, body.birthday, body.phone])

         res.sendStatus(201)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}

export async function putCustomers(req, res){

    const body = req.body

    const {id} = req.params

    const user = await connection.query('SELECT * FROM customers WHERE id=$1;', [id])

    if(!user){
        return res.sendStatus(404)
    }

    try {
        await connection.query('UPDATE customers SET cpf=$1, name=$2, phone=$3, birthday=$4 WHERE id = $5;',
         [body.cpf, body.name, body.phone, body.birthday, id])

         res.sendStatus(200)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}