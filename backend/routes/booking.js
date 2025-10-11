const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');

/**
 * @openapi
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       required:
 *         - patientId
 *         - nurseId
 *         - startDate
 *         - endDate
 *       properties:
 *         patientId:
 *           type: string
 *           description: Reference to the patient
 *         nurseId:
 *           type: string
 *           description: Reference to the nurse
 *         status:
 *           type: string
 *           enum: [pending, confirmed, completed, cancelled]
 *           description: Current status of the booking
 *         paymentStatus:
 *           type: string
 *           enum: [pending, paid, failed]
 *           description: Payment status of the booking
 *         fee:
 *           type: number
 *           description: Fee for the booking
 *         notes:
 *           type: string
 *           description: Additional notes about the booking
 *         startDate:
 *           type: string
 *           format: date-time
 *           description: Start date and time of the booking
 *         endDate:
 *           type: string
 *           format: date-time
 *           description: End date and time of the booking
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the booking was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the booking was last updated
 */

/**
 * @openapi
 * /api/booking/book-nurse:
 *   post:
 *     tags: [Booking]
 *     summary: Create a new booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - patientId
 *               - nurseId
 *               - startDate
 *               - endDate
 *             properties:
 *               patientId:
 *                 type: string
 *               nurseId:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *                 enum: [pending, confirmed, completed, cancelled]
 *               paymentStatus:
 *                 type: string
 *                 enum: [pending, paid, failed]
 *               fee:
 *                 type: number
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       400:
 *         description: Bad request - validation error
 *       500:
 *         description: Internal server error
 */
router.post('/book-nurse', (req, res) => {
    bookingController.createBooking(req, res);    
});

/**
 * @openapi
 * /api/booking/view-booking:
 *   get:
 *     tags: [Booking]
 *     summary: Get all bookings
 *     responses:
 *       200:
 *         description: List of all bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 *       500:
 *         description: Internal server error
 */
router.get('/view-booking', (req, res) => {
    bookingController.getBookings(req, res);
});

/**
 * @openapi
 * /api/booking/view-booking/{id}:
 *   get:
 *     tags: [Booking]
 *     summary: Get a specific booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       400:
 *         description: Invalid booking ID format
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
router.get('/view-booking/:id?', (req, res) => {
    bookingController.getBookingById(req, res);
});

/**
 * @openapi
 * /api/booking/view-past-booking:
 *   get:
 *     tags: [Booking]
 *     summary: Get all past bookings (endDate before current time)
 *     responses:
 *       200:
 *         description: Successfully retrieved past bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 *       500:
 *         description: Internal server error
 */
router.get('/view-past-booking', (req, res) => {
    bookingController.getPastBookings(req, res);
});

/**
 * @openapi
 * /api/booking/cancel-booking:
 *   post:
 *     tags: [Booking]
 *     summary: Cancel/delete a booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookingId:
 *                 type: string
 *                 description: Booking ID to cancel
 *     responses:
 *       200:
 *         description: Booking cancelled successfully
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
router.post('/cancel-booking', (req, res) => {
    bookingController.deleteBooking(req, res);
});

/**
 * @openapi
 * /api/booking/update-booking:
 *   post:
 *     tags: [Booking]
 *     summary: Update a booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - patientId
 *               - nurseId
 *               - startDate
 *               - endDate
 *             properties:
 *               bookingId:
 *                 type: string
 *                 description: Booking ID to update
 *               patientId:
 *                 type: string
 *               nurseId:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *                 enum: [pending, confirmed, completed, cancelled]
 *               paymentStatus:
 *                 type: string
 *                 enum: [pending, paid, failed]
 *               fee:
 *                 type: number
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Booking updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       400:
 *         description: Bad request - validation error
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
router.post('/update-booking', (req, res) => {
    bookingController.updateBooking(req, res);
});

/**
 * @openapi
 * /api/booking/complete-booking:
 *   post:
 *     tags: [Booking]
 *     summary: Complete a booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookingId:
 *                 type: string
 *                 description: Booking ID to complete
 *     responses:
 *       200:
 *         description: Booking completed successfully
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
router.post('/complete-booking', (req, res) => {
    bookingController.completeBooking(req, res);
});

/**
 * @openapi
 * /api/booking/reschedule-booking-request:
 *   post:
 *     tags: [Booking]
 *     summary: Request to reschedule a booking
 *     responses:
 *       200:
 *         description: Reschedule request submitted
 */
router.post('/reschedule-booking-request', (req, res) => {
    res.json({ message: 'Reschedule request submitted.' });
});

module.exports = router;