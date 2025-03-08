import express from "express";
import { setFirstReport } from "../Controllers/Report.Controller.js"; // Fixed function name
import { verifyToken } from "../Utils/Token.middleware.js";

const router = express.Router();

// Correctly define the POST route
router.post("/setFirstreport", verifyToken, setFirstReport);

// (Optional) Define a GET route if needed
// router.get("/getalldoctors", getAllDoctors);

export default router;
