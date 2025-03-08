import express from "express";
import { verifyPatientToken } from "../Utils/Token.middleware.js";
import { setFirstReport, getReport, getReportbyUser, getpatients } from "../Controllers/Report.Controller.js"; // Fixed function name

const router = express.Router();

router.get("/getreportbyuser",verifyPatientToken, getReportbyUser);
router.get("/getpatients",verifyPatientToken, getpatients)

// Correctly define the POST route
router.post("/setFirstreport", verifyPatientToken, setFirstReport);
router.get("/getreport/:reportId", verifyPatientToken, getReport);

// (Optional) Define a GET route if needed
// router.get("/getalldoctors", getAllDoctors);

export default router;
