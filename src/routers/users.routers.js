import { Router } from "express";

import { postSingUp, postSingIn, getUserInfo, deleteGoOut, putEditImg } from "../controllers/users.controller.js"
import { authorization } from "../middleware/authorization.middleware.js"
import { singUpMD } from "../middleware/singUp.middleware.js";
import { singInMD } from "../middleware/singIn.middleware.js";

const router = Router();

router.post("/sing-up", singUpMD, postSingUp);
router.post("/sing-in", singInMD, postSingIn);
router.get("/getUserInfo", authorization, getUserInfo);
router.delete( "/go-out", deleteGoOut );
router.put("/editImg", authorization, putEditImg  )

export default router;