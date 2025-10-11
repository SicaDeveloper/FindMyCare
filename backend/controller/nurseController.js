const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const NurseModel = require('../modules/entities/nurse_db_module').NurseModel;

// Register a new user
const RegisterNurse = async (req, res) => {
    try {
        // In RegisterNurse function
        const { name, email, password, phone, gender, panNumber, dateOfBirth, citizenship, experience, rate, address } = req.body;

        // Check if user exists
        const NurseExists = await NurseModel.findOne({ email });
        if (NurseExists) {
            return res.status(400).json({ message: 'Nurse already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create Nurse
        const Nurse = await NurseModel.create({
            name,
            email,
            password: hashedPassword,
            phone,
            gender,
            panNumber,
            dateOfBirth,
            citizenship,
            experience,
            rate,
            address
        });

        // Generate token
        const token = jwt.sign({ 
            id: Nurse._id, 
            role: 'nurse',
            email: Nurse.email 
        }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        res.cookie('token', token, { 
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        })
        .json({
            _id: Nurse._id,
            name: Nurse.name,
            email: Nurse.email,
            token,
            role: "nurse"
        });
            
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login user
const LoginNurse = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find Nurse
        const Nurse = await NurseModel.findOne({ email });
        if (!Nurse) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, Nurse.password); // Fixed: Nurse -> nurse
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign({ 
            id: Nurse._id, 
            role: 'nurse',
            email: Nurse.email 
        }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        })
        .json({
            _id: Nurse._id,
            name: Nurse.name,
            email: Nurse.email,
            token,
            role: "nurse"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    RegisterNurse,
    LoginNurse,
};