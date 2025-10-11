const express = require('express');
const nurseController = require('../controller/nurseController');

const router = express.Router();

// POST /add-certification
router.post('/add-certification', (req, res) => {
    res.json({ message: 'Certification added (template response)' });
});

// POST /set-rates
router.post('/set-rates', (req, res) => {
    res.json({ message: 'Rates set (template response)' });
});

// POST /add-services
router.post('/add-services', (req, res) => {
    res.json({ message: 'Services added (template response)' });
});

// POST /verify
router.post('/verify', (req, res) => {
    res.json({ message: 'Nurse verification initiated (template response)' });
});

// GET /show-verify-status
router.get('/show-verify-status', (req, res) => {
    res.json({ message: 'Verification status shown (template response)' });
});

// GET /search-by-name
router.get('/search-by-name', (req, res) => {
    res.json({ message: 'Nurse search results (template response)' });
});

// GET /get-details
router.get('/get-details', (req, res) => {
    res.json({ message: 'Nurse details (template response)' });
});

// GET /get-booking-requests
router.get('/get-booking-requests', (req, res) => {
    res.json({ message: 'Booking requests (template response)' });
});

/**
 * @openapi
 * /api/nurse/login:
 *   post:
 *     tags: [Nurse]
 *     summary: Authenticate a nurse
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: nurse@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: securepassword123
 *     responses:
 *       200:
 *         description: Successfully authenticated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }
    nurseController.LoginNurse(req, res);
});

/**
 * @openapi
 * /api/nurse/register:
 *   post:
 *     tags: [Nurse]
 *     summary: Register a new nurse
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: 
 *               - name
 *               - email
 *               - password
 *               - phone
 *               - gender
 *               - panNumber
 *               - dateOfBirth
 *               - citizenship
 *               - experience
 *               - rate
 *               - address
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Jane Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: nurse@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: securepassword123
 *               phone:
 *                 type: string
 *                 example: "+977-9841234567"
 *               gender:
 *                 type: string
 *                 enum: [male, female, other]
 *               panNumber:
 *                 type: string
 *                 example: "ABCDE1234F"
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *                 example: "1990-01-01"
 *               citizenship:
 *                 type: object
 *                 required: [number, issuedDate]
 *                 properties:
 *                   number:
 *                     type: string
 *                     example: "123-456-789"
 *                   issuedDate:
 *                     type: string
 *                     format: date
 *                     example: "2010-05-15"
 *                   frontPath:
 *                     type: string
 *                     format: uri
 *                     example: "http://example.com/front.jpg"
 *                   backPath:
 *                     type: string
 *                     format: uri
 *                     example: "http://example.com/back.jpg"  
 *               experience:
 *                 type: integer
 *                 minimum: 0
 *                 example: 5
 *               rate:
 *                 type: number
 *                 minimum: 0
 *                 example: 1500
 *               address:
 *                 type: string
 *                 example: "Kathmandu, Nepal"
 *     responses:
 *       201:
 *         description: Nurse registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Nurse'
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */

router.post('/register', (req, res) => {

    // In the register route validation
    const { name, email, password, phone, gender, panNumber, dateOfBirth, citizenship, experience, rate, address } = req.body;

    if (!name || !email || !password || !phone || !gender || !panNumber || !dateOfBirth || !citizenship || !experience || !rate || !address) {
        console.log("Missing fields in nurse registration:", req.body);
        return res.status(400).json({ message: 'Please fill all required fields' });
    }

    nurseController.RegisterNurse(req, res);
});


module.exports = router;