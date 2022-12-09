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