import express from "express";
import { loginController, registerController } from "../controllers/authcontroller.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

router.post("/login", loginController);
export default router;
