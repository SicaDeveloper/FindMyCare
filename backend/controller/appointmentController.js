const AppointmentModel = require('../modules/entities/appointment_db_module').appointmentModel;

// Create a new appointment
createAppointment = async (req, res) => {
    try {
        const appointment = await AppointmentModel.create(req.body);
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

getUserAppointments = async (req, res) => {
    try {
        const { userId } = req.params;
        const appointments = await AppointmentModel.find({ patientId: userId });
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all appointments
getAppointments = async (req, res) => {
    try {
        const appointments = await AppointmentModel.find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single appointment by ID
getAppointmentById = async (req, res) => {
    try {
        const appointment = await AppointmentModel.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an appointment
updateAppointment = async (req, res) => {
    try {
        const appointment = await AppointmentModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an appointment
deleteAppointment = async (req, res) => {
    try {
        const appointment = await AppointmentModel.findByIdAndDelete(req.params.id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
};