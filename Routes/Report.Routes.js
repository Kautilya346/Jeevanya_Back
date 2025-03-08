import express from "express";
import { setFirstReport, getReport, getReportbyUser, getpatients } from "../Controllers/Report.Controller.js"; // Fixed function name
import { verifyPatientToken,verifyDoctorToken } from "../Utils/Token.middleware.js";

const router = express.Router();

router.get("/getreportbyuser",verifyPatientToken, getReportbyUser);
router.get("/getpatients",verifyPatientToken, getpatients)

// Correctly define the POST route
router.post("/setFirstreport", verifyPatientToken, setFirstReport);
router.get("/getreport/:reportId", verifyPatientToken, getReport);
router.get("/getreportdoctor/:reportId", verifyDoctorToken, getReport);

// (Optional) Define a GET route if needed
// router.get("/getalldoctors", getAllDoctors);

export default router;
