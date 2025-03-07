import express from "express";
import bodyParser from "body-parser";
import connectDB from "./Utils/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./Routes/User.Routes.js";

const app = express();
dotenv.config();
connectDB();
const PORT = 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

const allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);
app.options("*", cors());

app.use("/api/auth",authRoutes)

// Middleware
app.use(bodyParser.json());
// Server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
