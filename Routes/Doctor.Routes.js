import express from "express";
import { verifyPatientToken } from "../Utils/Token.middleware.js";
import {
  getAllDoctors,
  getAllDomainDoctors,
  getdocprofile,
} from "../Controllers/Doctor.Controller.js";

const router = express.Router();

router.route("/getalldoctors").get(getAllDoctors);
router.route("/getallDomaindoctors").get(getAllDomainDoctors);
router.route("/getdocprofile").get(verifyPatientToken,getdocprofile);
export default router;
