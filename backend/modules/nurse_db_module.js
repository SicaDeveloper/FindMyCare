const mongoose = require('mongoose');

const nurseLoginSchema = new mongoose.Schema("");
const nurseLoginModel = mongoose.model("nurse_login", nurseLoginSchema);

const nurseRegisterSchema = new mongoose.Schema("../schemas/app_nurse");
const nurseRegisterModel = mongoose.model("nurse_register", nurseRegisterSchema);

module.exports = {nurseLoginModel};