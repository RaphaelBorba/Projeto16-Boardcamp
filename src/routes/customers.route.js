import { Router } from "express";
import { getCustomers, getCustomersById, postCustomers } from "../controllers/customers.controllers.js";
import { validatePostCustomer } from "../middlewares/validatePostCustomer.middleware.js";

const router = Router()

router.get('/customers', getCustomers)

router.get('/customers/:id', getCustomersById)

router.post('/customers',validatePostCustomer, postCustomers)

export default router