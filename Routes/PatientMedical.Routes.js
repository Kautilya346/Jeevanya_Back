import express from "express";
import { setMedicalRecord } from "../Controllers/PatientMedical.Controller.js";
import { verifyPatientToken } from "../Utils/Token.middleware.js";

const router = express.Router();
router.post("/setmedicalrecord", verifyPatientToken, setMedicalRecord);
export default router;
