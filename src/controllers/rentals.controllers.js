import { connection } from "../database/db.js";

export async function getRentals(req, res) {

    const { customerId } = req.query
    const { gameId } = req.query

    try {

        if (customerId && gameId) {

            const game_customerID = await connection.query('SELECT * FROM rentals WHERE "customerId" = $1 AND "gameId" = $2;',
                [customerId, gameId]);

            res.status(200).send(game_customerID.rows);

        } else if (customerId) {

            const custumer = await connection.query('SELECT * FROM rentals WHERE "customerId" = $1;', [customerId]);

            res.status(200).send(custumer.rows)

        } else if (gameId) {

            const game = await connection.query('SELECT * FROM rentals WHERE "gameId" = $1;', [gameId]);

            res.status(200).send(game.rows)

        } else {

            const rentals = await connection.query(`SELECT * FROM rentals
             JOIN customers ON rentals."customerId" = customers."id"
             JOIN games ON rentals."gameId" = games."id";`)

            res.status(200).send(rentals.rows)
        }

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function postRentals(req, res) {

    const { customerId, gameId, rentDate, daysRented, returnDate, originalPrice, delayFee } = res.locals.localsBody

    try {

        await connection.query(`INSERT INTO 
        rentals("customerId","gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") 
        VALUES ($1,$2,$3,$4,$5,$6,$7)`,
            [customerId, gameId, rentDate, daysRented, returnDate, originalPrice, delayFee])


        res.sendStatus(201)

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
}