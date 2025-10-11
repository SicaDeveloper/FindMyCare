const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

/**
 * @openapi
 * /api/auth/verify:
 *   post:
 *     tags: [Authentication]
 *     summary: Verify JWT token from cookie
 *     description: Verifies a JWT token extracted from httpOnly cookie. This endpoint expects the token to be automatically sent by the browser in the Cookie header.
 *     responses:
 *       200:
 *         description: Token is valid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 valid:
 *                   type: boolean
 *                   example: true
 *                 decoded:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                       example: "12345"
 *                     role:
 *                       type: string
 *                       example: "user"
 *                     iat:
 *                       type: integer
 *                       example: 1633276800
 *                     exp:
 *                       type: integer
 *                       example: 1633363200
 *       400:
 *         description: Token is required
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Token is required"
 *       401:
 *         description: Invalid or expired token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 valid:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Invalid or expired token"
 */
router.post('/verify', async (req, res) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(400).json({ message: 'Token is required' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded);
        return res.status(200).json({ valid: true, decoded });
    }
    catch (error) {
        return res.status(401).json({ valid: false, message: 'Invalid or expired token' });
    }
});

/**
 * @openapi
 * /api/auth/me:
 *   post:
 *     tags: [Authentication]
 *     summary: Get current user information from Authorization header
 *     description: Retrieves user information from JWT token sent in Authorization header. The token should be prefixed with 'Bearer '.
 *     responses:
 *       200:
 *         description: User information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                       example: "12345"
 *                     username:
 *                       type: string
 *                       example: "john_doe"
 *                     role:
 *                       type: string
 *                       example: "admin"
 *                     iat:
 *                       type: integer
 *                       example: 1633276800
 *                     exp:
 *                       type: integer
 *                       example: 1633363200
 *       401:
 *         description: Token is required or invalid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   examples:
 *                     missingToken:
 *                       value: "Token is required"
 *                     invalidToken:
 *                       value: "Invalid or expired token"
 */
router.post('/me', async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return res.status(200).json({ user: decoded });
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
    }
    );
    return res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;