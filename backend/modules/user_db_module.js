const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema("");
const userLoginModel = mongoose.model("user_login", userLoginSchema);

const userRegisterSchema = new mongoose.Schema("../schemas/app_user");
const userRegisterModel = mongoose.model("user_register", userRegisterSchema);

module.exports = {userLoginModel, userRegisterModel};
