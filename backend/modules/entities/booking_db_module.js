const mongoose = require('mongoose');
const bookingJson = require("../../schema/entities/app_booking.json");

// Create schemas
const bookingSchema = new mongoose.Schema(bookingJson);

const bookingModel = mongoose.model("bookingModel", bookingSchema);
module.exports = { bookingModel };