import React from 'react';
import { Card, CardContent, Typography, Button, Paper } from '@mui/material';

const Patient = ({ patient, onSelect }) => {
    if (!patient) {
        return (
            <Paper sx={{px:5, py: 4, borderRadius: 8, height:300, width:400, bgcolor:'white'}}>
                <Typography>No patient selected.</Typography>
            </Paper>
        );
    }

    return (
        <Card className="patient-card" sx={{ maxWidth: 345, margin: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {patient.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Age:</strong> {patient.age}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Gender:</strong> {patient.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Condition:</strong> {patient.condition}
                </Typography>
                <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => onSelect(patient.id)}
                >
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
};

export default Patient;