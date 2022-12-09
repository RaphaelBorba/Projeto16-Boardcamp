import { connection } from "../database/db.js";


export async function validatePostGame(req, res, next){

    const {name, stockTotal, categoryId} = req.body;

    if(!name || stockTotal <=0 || categoryId <=0){

        res.status(400).send('Erro nas informações')
        return;
    }

    const game = await connection.query("SELECT * FROM games WHERE name=$1",[name])

    if(game.rows[0]){
        return res.status(409).send('Nome já existe!')
    }

    const idcategory = await connection.query("SELECT * FROM categories WHERE id = $1", [categoryId])

    console.log(idcategory.rows[0]);

    if(!idcategory.rows[0]){
        
        return res.status(400).send('Categoria não encontrada')
    }


    next()
}