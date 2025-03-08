import express from "express";
import { verifyPatientToken,verifyDoctorToken } from "../Utils/Token.middleware.js";
import { setFirstReport, getReport, getReportbyUser } from "../Controllers/Report.Controller.js"; // Fixed function name

const router = express.Router();

router.get("/getreportbyuser",verifyPatientToken, getReportbyUser);

// Correctly define the POST route
router.post("/setFirstreport", verifyPatientToken, setFirstReport);
router.get("/getreport/:reportId", verifyPatientToken, getReport);
router.get("/getreportdoctor/:reportId", verifyDoctorToken, getReport);

// (Optional) Define a GET route if needed
// router.get("/getalldoctors", getAllDoctors);

export default router;
