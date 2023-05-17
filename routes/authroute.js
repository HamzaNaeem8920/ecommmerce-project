import { Express } from "express";

// router object 
const router = express.Router()

// routing 
router.post('/register',registerController)

export default router