const mongoose = require('mongoose');
const NurseJson = require("../../schema/entities/app_nurse.json");
const citizenshipJson = require("../../schema/entities/app_citizenship.json");

// Create schemas
const citizenshipSchema = new mongoose.Schema(citizenshipJson);
const NurseSchema = new mongoose.Schema({
    ...NurseJson,
    citizenship: citizenshipSchema,
});

const NurseModel = mongoose.model("Nurse", NurseSchema);
module.exports = { NurseModel };