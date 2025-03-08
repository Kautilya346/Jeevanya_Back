import { Report } from "../Models/Report.model.js";

export const getReportbyUser = async (req, res) => {
    try {
        const reports = await Report.find({ patient: req.user._id });
        res.status(200).json(reports);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};
