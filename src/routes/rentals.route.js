import { Router } from 'express';
import { getRentals, postRentals } from '../controllers/rentals.controllers.js';
import { addPostInfos, validatePostRentals } from '../middlewares/postRentals.middleswares.js';

const router = Router()

router.get('/rentals', getRentals)

router.post('/rentals',validatePostRentals, addPostInfos, postRentals)


export default router