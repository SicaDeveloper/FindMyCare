
const express = require("express");
const router = express.Router();
// Import both the handler and the middleware
const { registerNurse, uploadMiddleware } = require('./register');

router.post("/", (req, res) => {
    res.send("HelloWorld");
});

// Authentication routes
router.post("/login", (req, res) => {
    res.json({ login: true, token: "1234567890", tokenType: "Bearer", expiresIn: 3600 });
});

// Registration routes
router.post("/register", (req, res) => {
    res.json({ register: true, user: { email: req.body.email, password: req.body.password, role: req.body.role } });
});

// Apply multer middleware before the registerNurse handler for this specific route
router.post("/register/nurse", uploadMiddleware, registerNurse);

// Profile route
router.get("/profile", (req, res) => {
    res.json({ profile: true });
});

module.exports = router;