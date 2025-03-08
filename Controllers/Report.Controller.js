import { Doctor } from "../Models/Doctor.Model.js";
import { Report } from "../Models/Report.model.js"; // Ensure Report model is imported
import { Patient } from "../Models/Patient.Model.js";
// Save first report (POST request)
async function setFirstReport(req, res) {
  try {
    const { doctorId, patientId, symptoms } = req.body;

    // Validate input
    if (!doctorId || !patientId || !symptoms) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if doctor exists
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    // Create a new report entry
    const report = new Report({
      doctorId,
      doctorName: doctor.name,
      speciality: doctor.speciality,
      patientId,
      symptoms,
      date: new Date(),
    });

    await report.save();
    res.status(201).json({ message: "Report saved successfully", report });
  } catch (error) {
    res.status(500).json({ error: "Error saving report", details: error });
  }
}

// Export the function correctly
export { setFirstReport };
