const express = require('express');
const router = express.Router();
const careSeekerController = require('../controller/careSeekerController');

// Controller functions (implement these in your controller file)

/**
 * @openapi
 * /api/careseeker/login:
 *   post:
 *     tags: [CareSeeker]
 *     summary: Care seeker login
 *     responses:
 *       200:
 *         description: OK
 */
router.post('/login', (req, res) => {
   careSeekerController.LoginCareSeeker(req, res);
});

/**
 * @openapi
 * /api/careseeker/logout:
 *   post:
 *     tags: [CareSeeker]
 *     summary: Care seeker logout
 *     responses:
 *       200:
 *         description: OK
 */
router.post('/logout', (req, res) => {
    cookieStore.remove('token');
    res.status(200).json({ message: 'Logged out successfully' });
});

/**
 * @openapi
 * /api/careseeker/forgot-password:
 *   post:
 *     tags: [CareSeeker]
 *     summary: Care seeker forgot password
 *     responses:
 *       200:
 *         description: OK
 */
router.post('/forgot-password', (req, res) => {
    careSeekerController.ForgotPassword(req, res);
});

/**
 * @openapi
 * /api/careseeker/register:
 *   post:
 *     tags: [CareSeeker]
 *     summary: Register a new care seeker
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name,email,password,phone,dateOfBirth,gender,blood_group,role]
 *             properties:
 *               name: { type: string }
 *               email: { type: string, format: email }
 *               password: { type: string, format: password }
 *               phone: { type: string }
 *               dateOfBirth: { type: string, format: date }
 *               gender: { type: string }
 *               blood_group: { type: string }
 *               role: { type: string }
 *     responses:
 *       200:
 *         description: Registered
 *       400:
 *         description: Bad Request
 */
router.post('/register', (req, res) => {
   const { 
  name, 
  email, 
  password, 
  phone, 
  dateOfBirth, 
  gender, 
  blood_group, 
  role 
} = req.body;

    if (!name || !email || !password || !phone || !gender || !dateOfBirth || !blood_group || !role ) {
        return res.status(400).json({ message: 'Please fill all required fields' });
    }

    // Call the controller function to handle registration
    careSeekerController.RegisterCareSeeker(req, res);
});

module.exports = router;