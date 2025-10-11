const mongoose = require('mongoose');
const appointmentJson = require("../../schema/entities/app_appointment.json");

// Create schemas
const appointmentSchema = new mongoose.Schema(appointmentJson);

const appointmentModel = mongoose.model("appointmentModel", appointmentSchema);
module.exports = { appointmentModel };