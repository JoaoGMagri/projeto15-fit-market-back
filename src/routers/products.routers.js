import { Router } from "express";
import { authorization } from "../middleware/authorization.middleware.js"
import { getProducts, postCarts, getCarts, deleteCarts } from "../controllers/products.controllers.js";

const router = Router();

router.get("/products", getProducts );
router.post("/cartspost", authorization, postCarts );
router.get("/cartsget", authorization, getCarts );
router.delete("/cartsdelete", authorization, deleteCarts );


export default router;