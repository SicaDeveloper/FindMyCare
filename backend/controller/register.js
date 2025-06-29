const Nurse = require('../modules/nurse_db_module');
const encryptPassword = require('../modules/encrypt_password');
const createToken = require('../modules/create_token');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure Multer for file uploads
// For now, using diskStorage to save files temporarily.
// Ensure 'uploads/' directory exists at the root of your backend or adjust path.
const UPLOAD_DIR = path.join(__dirname, '..', 'uploads'); // Example: backend/uploads/
if (!fs.existsSync(UPLOAD_DIR)){
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_DIR);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files (jpeg, png, gif, bmp, webp) are allowed!'), false);
        }
    }
}).fields([
    { name: 'citizenshipFront', maxCount: 1 },
    { name: 'citizenshipBack', maxCount: 1 }
]);


// Handler for nurse registration
async function registerNurse(req, res) {
    try {
        const {
            name, email, password, phone, gender, experience,
            panNumber, dateOfBirth, citizenshipNumber, citizenshipIssuedDate
        } = req.body;

        const requiredTextFields = { name, email, password, phone, gender, panNumber, dateOfBirth, citizenshipNumber, citizenshipIssuedDate, experience };
        for (const [field, value] of Object.entries(requiredTextFields)) {
            // Allow experience to be "0"
            if (String(value).trim() === '' && !(field === 'experience' && String(value) === '0') ) {
                 return res.status(400).json({ message: `${field.replace(/([A-Z])/g, ' $1').trim()} is required.` });
            }
        }

        if (!req.files || !req.files.citizenshipFront || !req.files.citizenshipBack) {
            let missingFilesMessage = "Citizenship Front and Back images are required.";
            if (req.files) { // Clean up already uploaded files if one is missing
                if (req.files.citizenshipFront) fs.unlinkSync(req.files.citizenshipFront[0].path);
                if (req.files.citizenshipBack) fs.unlinkSync(req.files.citizenshipBack[0].path);
            }
            return res.status(400).json({ message: missingFilesMessage });
        }

        const existingNurse = await Nurse.findOne({ email: email });
        if (existingNurse) {
            // Clean up uploaded files if user already exists
            if (req.files.citizenshipFront) fs.unlinkSync(req.files.citizenshipFront[0].path);
            if (req.files.citizenshipBack) fs.unlinkSync(req.files.citizenshipBack[0].path);
            return res.status(409).json({ message: 'Nurse with this email already exists.' });
        }

        const hashedPassword = await encryptPassword(password);

        // Store relative paths to be served by a static file server or similar
        const citizenshipFrontPath = req.files.citizenshipFront ? path.join('uploads', req.files.citizenshipFront[0].filename) : null;
        const citizenshipBackPath = req.files.citizenshipBack ? path.join('uploads', req.files.citizenshipBack[0].filename) : null;

        const newNurse = new Nurse({
            name,
            email,
            password: hashedPassword,
            phone,
            gender,
            experience: Number(experience),
            panNumber,
            dateOfBirth,
            citizenshipNumber,
            citizenshipIssuedDate,
            citizenshipFrontPath,
            citizenshipBackPath,
            reviews: []
        });

        const savedNurse = await newNurse.save();

        const tokenPayload = {
            id: savedNurse._id,
            email: savedNurse.email,
            name: savedNurse.name,
            role: 'nurse'
        };
        const token = createToken(tokenPayload);

        res.status(201).json({
            message: 'Nurse registered successfully!',
            token: token,
            nurse: { // Send back some basic info, excluding sensitive details like password or full paths if not needed
                id: savedNurse._id,
                name: savedNurse.name,
                email: savedNurse.email,
                role: 'nurse'
            }
        });

    } catch (error) {
        console.error('Error during nurse registration:', error);
        // Clean up uploaded files in case of any other error during DB save etc.
        if (req.files) {
            if (req.files.citizenshipFront && req.files.citizenshipFront[0] && fs.existsSync(req.files.citizenshipFront[0].path)) {
                fs.unlinkSync(req.files.citizenshipFront[0].path);
            }
            if (req.files.citizenshipBack && req.files.citizenshipBack[0] && fs.existsSync(req.files.citizenshipBack[0].path)) {
                fs.unlinkSync(req.files.citizenshipBack[0].path);
            }
        }

        if (error.code === 11000) {
            return res.status(409).json({ message: 'Email already registered.' });
        }
        if (error instanceof multer.MulterError) {
            return res.status(400).json({ message: `File upload error: ${error.message}.` });
        }
        // Check for the custom error message from fileFilter
        if (error.message && error.message.includes('Only image files')) {
             return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Server error during registration.', error: error.message });
    }
}

module.exports = {
    registerNurse,
    uploadMiddleware: upload
};
