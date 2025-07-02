import React from "react";

const CurrentBooking = ({ booking }) => {
    if (!booking) {
        return (
            <div className="current-booking">
                <p>No current booking.</p>
            </div>
        );
    }

    return (
        <div className="current-booking">
            <h2>Current Booking</h2>
            <div>
                <strong>Patient:</strong> {booking.patientName}
            </div>
            <div>
                <strong>Date:</strong> {booking.date}
            </div>
            <div>
                <strong>Time:</strong> {booking.time}
            </div>
            <div>
                <strong>Location:</strong> {booking.location}
            </div>
            <div>
                <strong>Status:</strong> {booking.status}
            </div>
        </div>
    );
};

export default CurrentBooking;