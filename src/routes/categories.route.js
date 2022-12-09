import { Router } from "express";
import { getCategories, postCategories } from "../controllers/categories.controllers.js";
import { validatePostNameCategoryMiddleware } from "../middlewares/validatePostNameCategory.middleware.js";

const router = Router()

router.get('/categories', getCategories)

router.post('/categories',validatePostNameCategoryMiddleware, postCategories)



export default router
