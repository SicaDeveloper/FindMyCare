const BookingModel = require('../modules/entities/booking_db_module').bookingModel;

// Create a new Booking
createBooking = async (req, res) => {
    try {

        if (!req.body.patientId || !req.body.nurseId) {
            return res.status(400).json({ error: 'patientId, nurseId, and appointmentDate are required' });
        }

        if (isNaN(Date.parse(req.body.startDate)) || isNaN(Date.parse(req.body.endDate))) {
            return res.status(400).json({ error: 'Invalid appointmentDate format' });
        }

        if (req.body.status && !['pending', 'confirmed', 'completed', 'cancelled'].includes(req.body.status)) {
            return res.status(400).json({ error: 'Invalid status value' });
        }

        if (req.body.type && !['single', 'follow-up', 'emergency', 'routine-checkup', 'recurring'].includes(req.body.type)) {
            return res.status(400).json({ error: 'Invalid booking type' });
        }

        if (req.body.paymentStatus && !['pending', 'paid', 'failed'].includes(req.body.paymentStatus)) {
            return res.status(400).json({ error: 'Invalid paymentStatus value' });
        }

        if (req.body.fee && typeof req.body.fee !== 'number') {
            return res.status(400).json({ error: 'Fee must be a number' });
        }

        if (req.body.notes && typeof req.body.notes !== 'string') {
            return res.status(400).json({ error: 'Notes must be a string' });
        }

        const Booking = await BookingModel.create(req.body);
        res.status(201).json(Booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all Bookings
getBookings = async (req, res) => {
    try {
        const Bookings = await BookingModel.find();
        res.status(200).json(Bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

getPastBookings = async (req, res) => {
    try {
        const now = new Date();
        const Bookings = await BookingModel.find({ endDate: { $lt: now } });
        res.status(200).json(Bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single Booking by ID
getBookingById = async (req, res) => {
    try {

        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ error: 'Invalid Booking ID format' });
        }

        const Booking = await BookingModel.findById(req.params.id);
        if (!Booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(200).json(Booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

rescheduleBooking = async (req, res) => {
    try {
        if (!req.body.startDate || !req.body.endDate) {
            return res.status(400).json({ error: 'startDate and endDate are required for rescheduling' });
        }
        if (isNaN(Date.parse(req.body.startDate)) || isNaN(Date.parse(req.body.endDate))) {
            return res.status(400).json({ error: 'Invalid date format' });
        }
        const Booking = await BookingModel.findByIdAndUpdate(
            req.params.id,
            { startDate: req.body.startDate, endDate: req.body.endDate, status: 'rescheduled' },
            { new: true }
        );
        if (!Booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(200).json(Booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

completeBooking = async (req, res) => {
    try {

        if (!id.req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ error: 'Invalid Booking ID format' });
        }

        const Booking = await BookingModel.findByIdAndUpdate(
            req.params.id,
            { status: 'completed' },
            { new: true }
        );

        if (!Booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(200).json(Booking);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Update an Booking
updateBooking = async (req, res) => {
    try {

        if (!req.body.patientId || !req.body.nurseId) {
            return res.status(400).json({ error: 'patientId, nurseId, and appointmentDate are required' });
        }

        if (isNaN(Date.parse(req.body.startDate)) || isNaN(Date.parse(req.body.endDate))) {
            return res.status(400).json({ error: 'Invalid appointmentDate format' });
        }

        if (req.body.status && !['pending', 'confirmed', 'completed', 'cancelled'].includes(req.body.status)) {
            return res.status(400).json({ error: 'Invalid status value' });
        }

        if (req.body.type && !['single', 'follow-up', 'emergency', 'routine-checkup', 'recurring'].includes(req.body.type)) {
            return res.status(400).json({ error: 'Invalid booking type' });
        }

        if (req.body.type && !['single', 'follow-up', 'emergency', 'routine-checkup', 'recurring'].includes(req.body.type)) {
            return res.status(400).json({ error: 'Invalid booking type' });
        }

        if (req.body.paymentStatus && !['pending', 'paid', 'failed'].includes(req.body.paymentStatus)) {
            return res.status(400).json({ error: 'Invalid paymentStatus value' });
        }

        if (req.body.fee && typeof req.body.fee !== 'number') {
            return res.status(400).json({ error: 'Fee must be a number' });
        }

        if (req.body.notes && typeof req.body.notes !== 'string') {
            return res.status(400).json({ error: 'Notes must be a string' });
        }

        const Booking = await BookingModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!Booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(200).json(Booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an Booking
deleteBooking = async (req, res) => {
    try {

        if (!id.req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ error: 'Invalid Booking ID format' });
        }

        const Booking = await BookingModel.findByIdAndDelete(req.params.id);
        if (!Booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createBooking,
    getBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
    rescheduleBooking,
    completeBooking,
    getPastBookings
};