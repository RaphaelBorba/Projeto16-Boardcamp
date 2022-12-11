import { connection } from "../database/db.js";

export async function validatePostRentals(req, res, next) {

    const body = req.body

    const gameId = await connection.query(`SELECT * FROM games WHERE id=$1;`, [body.gameId])

    const stock = gameId.rows[0].stockTotal

    const totalGameRentals = await connection.query(`SELECT * FROM rentals WHERE "gameId" = $1;`, [body.gameId])


    if ( totalGameRentals.rows.length === stock){

        return res.sendStatus(400)
    }

    const customerId = await connection.query(`SELECT * FROM customers WHERE id = $1;`, [body.customerId])

    if (!gameId.rows[0] || !customerId.rows[0] || body.daysRented <= 0) {
        return res.sendStatus(400);
    }

    next()
}

export async function addPostInfos(req, res, next) {

    const body = req.body
    const date = new Date()

    const game = await connection.query(`SELECT * FROM games WHERE id=$1;`, [body.gameId])

    const originalPrice = body.daysRented * game.rows[0].pricePerDay

    const localsBody = { ...body, rentDate: date, originalPrice, delayFee: null, returnDate: null }

    res.locals.localsBody = localsBody

    next()
}