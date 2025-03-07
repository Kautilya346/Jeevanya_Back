import express from "express";
import { getallDoctors } from "../Controllers/Doctor.Controller.js";

const router = express.Router();

router.route("/getalldoctors").get(getallDoctors);

export default router;