import { Router } from 'express';
import { getRentals, postRentals } from '../controllers/rentals.controllers.js';
import { validatePostRentals } from '../middlewares/postRentals.middleswares.js';

const router = Router()

router.get('/rentals', getRentals)

router.post('/rentals',validatePostRentals, postRentals)


export default router