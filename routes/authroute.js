import { Express } from "express";
import  {registerController}  from "../controllers/authcontroller.js";

// router object 
const router = express.Router()

// routing 
router.post('/register',registerController)

export default router