import { Doctor } from "../Models/Doctor.Model.js";

async function getallDoctors(req,res){

    const doctors = await Doctor.find({}).select("-password -refreshToken");

    res.status(200).json({
        doctors
    })
}

export {getallDoctors}
