import { Router } from 'express';
import { deleteRental, getRentals, postRentals, postReturnDate } from '../controllers/rentals.controllers.js';
import { addPostInfos, validatePostRentals, handleReturnDate, validateId } from '../middlewares/postRentals.middleswares.js';

const router = Router()

router.get('/rentals', getRentals)

router.post('/rentals',validatePostRentals, addPostInfos, postRentals)

router.post('/rentals/:id/return',handleReturnDate,  postReturnDate)

router.delete('/rentals/:id', validateId, deleteRental)


export default router