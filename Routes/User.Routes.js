import express from "express";
import { registerPatient, loginPatient, logoutUser, regenerateAccessToken, changePassword, getME,registerDoctor,loginDoctor } from "../Controllers/Auth.Controller.js";
//import { verifyPatientToken } from "../Utils/Token.middleware.js";

const router = express.Router();

router.route("/registerpatient").post(registerPatient);
router.route("/loginpatient").post(loginPatient);
router.route("/registerdoctor").post(registerDoctor);
router.route("/logindoctor").post(loginDoctor); 


// router.route("/logout").get(verifyPatientToken, logoutUser);
// router.route("/changePassword").post(verifToken, changePassword);
// router.route("/regenerateAccessToken").post(regenerateAccessToken);
// router.route("/getMe").get(verifyToken, getME);

export default router;