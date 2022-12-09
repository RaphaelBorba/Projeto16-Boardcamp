import { Router } from "express";
import { getCategories, postCategories } from "../controllers/categories.controllers.js";
import { validatePostNameCategorieMiddleware } from "../middlewares/validatePostNameCategorie.middleware.js";

const router = Router()

router.get('/categories', getCategories)

router.post('/categories',validatePostNameCategorieMiddleware, postCategories)



export default router
