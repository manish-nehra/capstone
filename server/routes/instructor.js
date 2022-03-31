import express from "express";

const router = express.Router();

//middleware
import { requireSignin } from "../middlewares";
//controller
import {makeInstructor} from "../controllers/instructor";
 
router.post('/make-instructor', requireSignin,makeInstructor);
module.exports = router;