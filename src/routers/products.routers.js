import { Router } from "express";

import { getProducts } from "../controllers/products.controllers.js";

const router = Router();

router.get("/products", getProducts );
router.post("")

export default router;