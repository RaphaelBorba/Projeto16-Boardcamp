import { Router } from "express";
import { getCustomers, getCustomersById, postCustomers, putCustomers } from "../controllers/customers.controllers.js";
import { validatePostCustomer } from "../middlewares/validatePostCustomer.middleware.js";

const router = Router()

router.get('/customers', getCustomers)

router.get('/customers/:id', getCustomersById)

router.post('/customers',validatePostCustomer, postCustomers)

router.put('/customers/:id',validatePostCustomer, putCustomers)

export default router