import { connection } from "../database/db.js";


export async function getCategories(req, res){

    try {
        const categories = await connection.query("SELECT * FROM categories;");
    
        res.send(categories.rows)
    
    } catch (error) {
        res.sendStatus(400)
    }
}