import express from "express";
import {
  getAllDoctors,
  getAllDomainDoctors,
} from "../Controllers/Doctor.Controller.js";

const router = express.Router();

router.route("/getalldoctors").get(getAllDoctors);
router.route("/getallDomaindoctors").get(getAllDomainDoctors);
export default router;
