import { Router } from "express";
import { authorization } from "../middleware/authorization.middleware.js"
import { getProducts, postCarts, getCarts, deleteCarts, postBuys } from "../controllers/products.controllers.js";

const router = Router();

router.get("/products", getProducts );
router.post("/cartspost", authorization, postCarts );
router.get("/cartsget", authorization, getCarts );
router.delete("/cartsdelete", authorization, deleteCarts);
router.post('/buys', authorization, postBuys)


export default router;