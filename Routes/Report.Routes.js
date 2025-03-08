import express from "express";
import { getReportbyUser } from "../Controllers/Report.Controller.js";
import { verifyPatientToken } from "../Utils/Token.middleware.js";

const router = express.Router();

router.route("/getreportbyuser").get(verifyPatientToken, getReportbyUser);

export default router;