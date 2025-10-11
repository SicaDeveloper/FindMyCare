const mongoose = require('mongoose');
const CareSeekerJson = require("../../schema/entities/app_CareSeeker.json");
const citizenshipJson = require("../../schema/entities/app_citizenship.json");

// Create schemas
const citizenshipSchema = new mongoose.Schema(citizenshipJson);
const CareSeekerSchema = new mongoose.Schema({
    ...CareSeekerJson,
    citizenship: citizenshipSchema,
});

const CareSeekerModel = mongoose.model("CareSeeker", CareSeekerSchema);
module.exports = { CareSeekerModel };