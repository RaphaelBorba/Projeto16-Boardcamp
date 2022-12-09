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

        res.status(200).send(userId);
        

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function postCustomers(req,res){

    
}