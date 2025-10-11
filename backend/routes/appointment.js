const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentController');

// --- Start of OpenAPI Definitions ---

/**
 * @openapi
 * components:
 *   schemas:
 *     Appointment:
 *       type: object
 *       properties:
 *         patientId:
 *           type: string
 *           description: Reference to the patient
 *         doctorId:
 *           type: string
 *           description: Reference to the doctor
 *         dateTime:
 *           type: string
 *           format: date-time
 *           description: Date and time of the appointment
 *         status:
 *           type: string
 *           enum: [scheduled, completed, cancelled, no-show]
 *           description: Current status of the appointment
 *         type:
 *           type: string
 *           enum: [consultation, follow-up, emergency, routine-checkup]
 *           description: Type of appointment
 *         notes:
 *           type: string
 *           description: Additional notes about the appointment
 *         duration:
 *           type: number
 *           minimum: 0
 *           description: Duration of appointment in minutes
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the appointment was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the appointment was last updated
 *       required:
 *         - duration
 */

/**
 * @openapi
 * /api/appointment:
 *   get:
 *     tags: [Appointment]
 *     summary: View all appointments
 *     description: Retrieve a list of all appointments in the system.
 *     responses:
 *       200:
 *         description: A list of appointments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Appointment'
 *       500:
 *         description: Server error
 */

router.get('/:id?', (req, res) => {
    appointmentController.getAppointments(req, res);
}
)

/**
 * @openapi
 * /api/appointment:
 *   get:
 *     tags: [Appointment]
 *     summary: View all appointments
 *     description: Retrieve a list of all appointments in the system.
 *     responses:
 *       200:
 *         description: A list of appointments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Appointment'
 *       500:
 *         description: Server error
 */
router.get('/', (req, res) => {
    appointmentController.getAppointments(req, res);
});

/**
 * @openapi
 * /api/appointment:
 *   post:
 *     tags: [Appointment]
 *     summary: Create a new appointment
 *     description: Create a new appointment record.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: string
 *               doctorId:
 *                 type: string
 *               dateTime:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *                 enum: [scheduled, completed, cancelled, no-show]
 *               type:
 *                 type: string
 *                 enum: [consultation, follow-up, emergency, routine-checkup]
 *               notes:
 *                 type: string
 *               duration:
 *                 type: number
 *                 minimum: 0
 *             required:
 *               - duration
 *           example:
 *             patientId: 60d0fe4f1a23c3001f3f982e
 *             doctorId: 60d0fe4f1a23c3001f3f982f
 *             dateTime: 2025-10-20T10:00:00Z
 *             status: scheduled
 *             type: consultation
 *             duration: 30
 *     responses:
 *       201:
 *         description: Appointment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment'
 *       400:
 *         description: Invalid input or validation error
 */
router.post('/', (req, res) => {
    appointmentController.createAppointment(req, res);
});

/**
 * @openapi
 * /api/appointment/{id}:
 *   get:
 *     tags: [Appointment]
 *     summary: Get appointment by ID
 *     description: Retrieve a single appointment by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 60d0fe4f1a23c3001f3f982d
 *         description: The ID of the appointment to retrieve.
 *     responses:
 *       200:
 *         description: Appointment details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment'
 *       404:
 *         description: Appointment not found
 *       500:
 *         description: Server error
 */
router.get('/:id', (req, res) => {
    appointmentController.getAppointmentById(req, res);
});

/**
 * @openapi
 * /api/appointment/{id}:
 *   put:
 *     tags: [Appointment]
 *     summary: Update an appointment
 *     description: Update an existing appointment by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 60d0fe4f1a23c3001f3f982d
 *         description: The ID of the appointment to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: string
 *               doctorId:
 *                 type: string
 *               dateTime:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *                 enum: [scheduled, completed, cancelled, no-show]
 *               type:
 *                 type: string
 *                 enum: [consultation, follow-up, emergency, routine-checkup]
 *               notes:
 *                 type: string
 *               duration:
 *                 type: number
 *                 minimum: 0
 *           example:
 *             status: completed
 *             notes: Patient arrived and left on time.
 *             duration: 45
 *     responses:
 *       200:
 *         description: Appointment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment'
 *       400:
 *         description: Invalid input or validation error
 *       404:
 *         description: Appointment not found
 */
router.put('/:id', (req, res) => {
    appointmentController.updateAppointment(req, res);
});

/**
 * @openapi
 * /api/appointment/{id}:
 *   delete:
 *     tags: [Appointment]
 *     summary: Delete an appointment
 *     description: Delete an appointment record by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 60d0fe4f1a23c3001f3f982d
 *         description: The ID of the appointment to delete.
 *     responses:
 *       200:
 *         description: Appointment deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Appointment deleted successfully
 *       404:
 *         description: Appointment not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', (req, res) => {
    appointmentController.deleteAppointment(req, res);
});

module.exports = router;