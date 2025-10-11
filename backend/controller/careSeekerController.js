const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CareSeeker = require('../modules/entities/careseeker_db_module').CareSeekerModel;

const RegisterCareSeeker = async (req, res) => {
    try {
        const { name, email, password, phone, dateOfBirth, gender, bloodGroup, role } = req.body;

        const userExists = await CareSeeker.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'CareSeeker already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const careSeeker = await CareSeeker.create({
            name,
            email,
            password: hashedPassword,
            phone,
            dateOfBirth,
            gender, 
            bloodGroup, 
            role
        });

        const token = jwt.sign({ 
            id: careSeeker._id, 
            role: 'user',
            email: careSeeker.email 
        }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        res.status(201)
            .cookie('token', token, { 
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
            })
            .json({
                _id: careSeeker._id,
                name: careSeeker.name,
                email: careSeeker.email,
                token,
                role: "user"
            })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const LoginCareSeeker = async (req, res) => {
    try {
        const { email, password } = req.body;
        const careSeeker = await CareSeeker.findOne({ email });
        if (!careSeeker) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, careSeeker.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ 
            id: careSeeker._id, 
            role: 'user',
            email: careSeeker.email 
        }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        }); 
        res.status(200)
            .cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
            })
            .json({
                _id: careSeeker._id,
                name: careSeeker.name,
                email: careSeeker.email,
                token,
                role: "user"
            })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}   

const ForgotPassword = async (req, res) => {
    const { email } = req.body;

    const careSeeker = await CareSeeker.findOne({ email });
    if (!careSeeker) {
        return res.status(400).json({ message: 'CareSeeker not found' });
    }

}

const ResetPassword = async (req, res) => {
    res.end();
}

module.exports = {
    RegisterCareSeeker,
    LoginCareSeeker,
    ForgotPassword,
    ResetPassword
};