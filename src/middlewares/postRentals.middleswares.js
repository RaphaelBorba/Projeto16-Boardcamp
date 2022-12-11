import { connection } from "../database/db.js";

export async function validatePostRentals(req, res, next){

    const body = req.body

    const gameId = await connection.query(`SELECT * FROM games WHERE id=$1;`, [body.gameId])

    const customerId = await connection.query(`SELECT * FROM customers WHERE id = $1;`, [body.customerId])

    if ( !gameId.rows[0] || !customerId.rows[0] || body.daysRented <= 0){
        return res.sendStatus(400);
    }

    next()
}