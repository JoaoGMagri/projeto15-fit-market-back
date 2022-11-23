import { Router } from "express";

import { postSingUp, postSingIn, deleteGoOut, getProducts } from "../controllers/users.controller.js"
import { singUpMD } from "../middleware/singUp.middleware.js";
import { singInMD } from "../middleware/singIn.middleware.js";

const router = Router();

router.post("/sing-up", singUpMD, postSingUp);
router.post("/sing-in", singInMD, postSingIn);
router.delete( "/go-out", deleteGoOut );
router.get("/products", getProducts )

export default router;