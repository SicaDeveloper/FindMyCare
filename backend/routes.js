
const express = require("express");
const router = express.Router();
const authenticationFilter = require("./middleware/authenticationFilter");

// Import route handlers
const bookingRoutes = require("./routes/booking");
const nurseRoutes = require("./routes/nurses");
const paymentRoutes = require("./routes/payment");
const searchRoutes = require("./routes/search");
const ratingRoutes = require("./routes/ratings");
const messageRoutes = require("./routes/messages");
const careSeekerRoutes = require("./routes/careseeker");
const appointmentRoutes = require("./routes/appointment");
const authRoutes = require("./routes/auth");

// All routes are now public (no authentication required)
router.use("/nurse", nurseRoutes);
router.use("/careseeker", careSeekerRoutes);
router.use("/auth", authRoutes)
router.use("/booking", authenticationFilter, bookingRoutes);
router.use("/payment", authenticationFilter, paymentRoutes);
router.use("/rating", authenticationFilter, ratingRoutes);
router.use("/message", authenticationFilter, messageRoutes);
router.use("/appointment", authenticationFilter, appointmentRoutes);
router.use("/search", authenticationFilter, searchRoutes);

module.exports = router;