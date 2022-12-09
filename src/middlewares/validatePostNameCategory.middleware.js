import { connection } from "../database/db.js"


export async function validatePostNameCategoryMiddleware(req, res, next){

    const {name} = req.body

    if(!name){
        return res.sendStatus(400)
    }

    const categorie = await connection.query("SELECT * FROM categories WHERE name=$1",[name])

    if(categorie.rows[0]){
        return res.sendStatus(409)
    }

   res.locals.name = name

    next()
}