const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema("../../schema/app_review.json");
const reviewModel = mongoose.model("review", reviewSchema);

module.exports = {reviewModel};
