import { Router } from "express";
import { getGames, postGames } from "../controllers/games.controllers.js";
import { validatePostGame } from "../middlewares/validatePostGame.middleware.js";

const router = Router();

router.get('/games', getGames);

router.post('/games', validatePostGame, postGames);


export default router;