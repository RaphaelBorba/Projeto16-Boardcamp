import { Router } from 'express';
import { getRentals, postRentals, postReturnDate } from '../controllers/rentals.controllers.js';
import { addPostInfos, validatePostRentals, handleReturnDate } from '../middlewares/postRentals.middleswares.js';

const router = Router()

router.get('/rentals', getRentals)

router.post('/rentals',validatePostRentals, addPostInfos, postRentals)

router.post('/rentals/:id/return',handleReturnDate,  postReturnDate)


export default router