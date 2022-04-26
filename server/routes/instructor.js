import express from "express";

const router = express.Router();

//middleware
import { requireSignin } from "../middlewares";
//controller
import {makeInstructor,currentInstructor,instructorCourses} from "../controllers/instructor";
 
router.post('/make-instructor',makeInstructor);
router.get("/current-instructor", currentInstructor);
// router.post("/get-account-status", requireSignin, getAccountStatus);
router.get('/instructor-courses',requireSignin,instructorCourses);
module.exports = router;