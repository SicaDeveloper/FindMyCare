const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    // Get token from Authorization header or cookies
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    const cookieToken = req.cookies?.token;
    const authToken = token || cookieToken;
    if (!authToken) {
        return res.status(401).json({ 
            message: 'Access denied. No token provided.',
            code: 'NO_TOKEN'
        });
    }
    try {
        // Verify the token
        const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
        // Add user info to request object
        req.user = {
            id: decoded.id,
            token: authToken
        };
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ 
                message: 'Token expired. Please login again.',
                code: 'TOKEN_EXPIRED'
            });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ 
                message: 'Invalid token.',
                code: 'INVALID_TOKEN'
            });
        } else {
            return res.status(500).json({ 
                message: 'Token verification failed.',
                code: 'TOKEN_ERROR'
            });
        }
    }
}

module.exports = authenticateToken;