import React, { useState } from 'react';
import {
  Box,
  Container,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Paper,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Stack
} from '@mui/material';

import backgroundImage from '../../../media/workflow-background.jpg';

const WorkflowContent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({
    fullName: false,
    dateOfBirth: false,
    appointmentType: false,
    location: false,
    preferredTime: false
  });
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    appointmentType: '',
    location: '',
    preferredTime: ''
  });

  const radioAndCheckboxStyle = {
    '& .MuiRadio-root': {
      color: 'grey.500',
      '&.Mui-checked': {
        color: 'primary.main',
      },
    },
    '& .MuiCheckbox-root': {
      color: 'grey.500',
      '&.Mui-checked': {
        color: 'primary.main',
      },
    },
    '& .MuiFormControlLabel-label': {
      color: 'text.primary',
    },
  };

  const validateStep = (step) => {
    let newErrors = { ...errors };
    let isValid = true;

    if (step === 0) {
      newErrors.fullName = formData.fullName.trim() === '';
      newErrors.dateOfBirth = formData.dateOfBirth === '';
      newErrors.appointmentType = formData.appointmentType === '';
      isValid = !newErrors.fullName && !newErrors.dateOfBirth && !newErrors.appointmentType;
    } else if (step === 1) {
      newErrors.location = formData.location.trim() === '';
      newErrors.preferredTime = formData.preferredTime === '';
      isValid = !newErrors.location && !newErrors.preferredTime;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      fullName: '',
      dateOfBirth: '',
      appointmentType: '',
      location: '',
      preferredTime: ''
    });
  };

  const handleLocation = async () => {
    const location = formData.location;
  }

  const steps = [
    {
      label: 'Personal Information',
      content: (
        <Stack spacing={3} >
          <Typography variant="h6">Patient Information</Typography>
          <TextField
            fullWidth
            label="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({
              ...formData,
              fullName: e.target.value
            })}
            error={errors.fullName}
            helperText={errors.fullName ? 'Please enter your full name' : ''}
          />
          <TextField
            fullWidth
            type="date"
            label="Date of Birth"
            InputLabelProps={{ shrink: true }}
            value={formData.dateOfBirth}
            onChange={(e) => setFormData({
              ...formData,
              dateOfBirth: e.target.value
            })}
            error={errors.dateOfBirth}
            helperText={errors.dateOfBirth ? 'Please select your date of birth' : ''}
          />
          <FormControl error={errors.appointmentType}>
            <Typography variant="subtitle1" gutterBottom>
              Appointment Type
            </Typography>
            <RadioGroup
              value={formData.appointmentType}
              onChange={(e) => setFormData({
                ...formData,
                appointmentType: e.target.value
              })}
              sx={radioAndCheckboxStyle}
            >
              <FormControlLabel 
                value="newPatient" 
                control={<Radio />} 
                label="New Patient Consultation" 
              />
              <FormControlLabel 
                value="followUp" 
                control={<Radio />} 
                label="Follow-up Visit" 
              />
              <FormControlLabel 
                value="urgent" 
                control={<Radio />} 
                label="Urgent Care" 
              />
            </RadioGroup>
            {errors.appointmentType && (
              <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                Please select an appointment type
              </Typography>
            )}
          </FormControl>
        </Stack>
      )
    },
    {
      label: 'Location & Preferences',
      content: (
        <Stack spacing={3}>
          <Typography variant="h6">Location & Appointment Preferences</Typography>
          <TextField
            fullWidth
            label="Your Location"
            value={formData.location}
            onChange={(e) => setFormData({
              ...formData,
              location: e.target.value
            })}
            error={errors.location}
            helperText={errors.location ? 'Please enter your location' : ''}
            placeholder="Enter your address"
          />
          <FormControl error={errors.preferredTime}>
            <Typography variant="subtitle1" gutterBottom>
              Preferred Appointment Time
            </Typography>
            <RadioGroup
              value={formData.preferredTime}
              onChange={(e) => setFormData({
                ...formData,
                preferredTime: e.target.value
              })}
              sx={radioAndCheckboxStyle}
            >
              <FormControlLabel 
                value="morning" 
                control={<Radio />} 
                label="Morning (9AM - 12PM)" 
              />
              <FormControlLabel 
                value="afternoon" 
                control={<Radio />} 
                label="Afternoon (12PM - 5PM)" 
              />
              <FormControlLabel 
                value="evening" 
                control={<Radio />} 
                label="Evening (5PM - 8PM)" 
              />
            </RadioGroup>
            {errors.preferredTime && (
              <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                Please select a preferred time
              </Typography>
            )}
          </FormControl>
        </Stack>
      )
    },
    {
      label: 'Review & Submit',
      content: (
        <Stack spacing={3}>
          <Typography variant="h6">Review Your Application</Typography>
          <Box>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Full Name:
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ pl: 2 }}>
              {formData.fullName}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Date of Birth:
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ pl: 2 }}>
              {formData.dateOfBirth}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Appointment Type:
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ pl: 2 }}>
              {formData.appointmentType === 'newPatient' && 'New Patient Consultation'}
              {formData.appointmentType === 'followUp' && 'Follow-up Visit'}
              {formData.appointmentType === 'urgent' && 'Urgent Care'}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Location:
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ pl: 2 }}>
              {formData.location || 'Not provided'}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Preferred Time:
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ pl: 2 }}>
              {formData.preferredTime === 'morning' && 'Morning (9AM - 12PM)'}
              {formData.preferredTime === 'afternoon' && 'Afternoon (12PM - 5PM)'}
              {formData.preferredTime === 'evening' && 'Evening (5PM - 8PM)'}
            </Typography>
          </Box>
        </Stack>
      )
    }
  ];

  return (
      <Box style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }} fullWidth sx={{ paddingY: 12, margin:0 }} >
        <Paper elevation={3} sx={{ p: 4, borderRadius: 4, bgcolor: 'background.paper', width: { xs: '90%', md: '55%' }, margin: '0 auto' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Patient Application Form
          </Typography>

					<Stepper
						activeStep={activeStep}
						alternativeLabel
						sx={{ mb: 4 }}
					>
						{steps.map((step) => (
							<Step key={step.label}>
								<StepLabel>{step.label}</StepLabel>
							</Step>
						))}
          </Stepper>

          <Box>
            {activeStep === steps.length ? (
              <Stack spacing={2} alignItems="center">
                <Typography>
                  All steps completed - you're finished!
                </Typography>
                <Button 
                  onClick={handleReset}
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  
                </Button>
              </Stack>
            ) : (
              <Box>
                {steps[activeStep].content}
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  mt: 4 
                }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Paper>
      </Box>
  );
};

export default WorkflowContent; 