import { Patient } from "../Models/Patient.Model.js";
import jwt from "jsonwebtoken"

export async function verifyToken(req,res,next){
    
    const currAccessToken = req.cookies?.accessToken;

    if (!currAccessToken) {
        return res.status(400).json({
            msg: "User is not logged in"
        });
    }
    
    try {
        const dataFromToken = jwt.verify(currAccessToken, process.env.A_SECRET_TOKEN);
    
        const userFromToken = await Patient.findById(dataFromToken?._id).select("-password -refreshToken");
    
        if (!userFromToken) {
            return res.status(400).json({
                msg: "Access token is fake"
            });
        }
    
        req.user = userFromToken;
        next();
    
    } catch (error) {

        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                msg: "Access token has expired"
            });
        }
    
        return res.status(401).json({
            msg: "Invalid token"
        });
    }
    
}