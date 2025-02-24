const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema("../schemas/app_review");
const reviewModel = mongoose.model("review", reviewSchema);

module.exports = {reviewModel};
