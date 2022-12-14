import { connection } from "../database/db.js";

export async function getGames(req, res) {

    const { name } = req.query

    try {

        if (name) {

            const games = await connection.query("SELECT * FROM games WHERE name LIKE ($1 || '%');", [name])

            return res.send(games.rows).status(200);
        }

        const games = await connection.query(`SELECT games.*, categories.name AS "categoryName" 
                                                FROM games 
                                                JOIN categories ON "categoryId"=categories.id`)

        res.send(games.rows).status(200)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function postGames(req, res) {

    const { name, image, stockTotal, categoryId, pricePerDay } = req.body;

    try {

        await connection.query('INSERT INTO games(name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ($1,$2,$3,$4,$5);',
            [name, image, stockTotal, categoryId, pricePerDay])

        res.sendStatus(200)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}