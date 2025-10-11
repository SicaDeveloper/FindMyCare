import { Box, FormHelperText, TextField } from '@mui/material'; // Added TextField for potentially better date input control
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import Input from '@mui/material/Input'; // Keep for file, but TextField might be better for text fields
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import { useOutletContext } from 'react-router-dom';


const PreviewImage = styled('img')({
    height: 400,
    width: 600
});

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
    padding: theme.spacing(1.5, 4),
    borderRadius: 12,
    boxShadow: theme.shadows[2],
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
    },
}));

function RegisterNurse() {
    const location = useLocation();
    const navigate = useNavigate();
    const { email: initialEmail, password: initialPassword } = location.state || {};
    const setErrorMessage= useOutletContext();


    const [formData, setFormData] = useState({
        fullName: '',
        panNumber: '',
        gender: 'male',
        phone: '',
        dateOfBirth: '',
        citizenshipNumber: '',
        citizenshipIssuedDate: '',
        experience: '',
        email: initialEmail || '',
        password: initialPassword || '',
    });

    const [citizenshipFront, setCitizenshipFront] = useState(null);
    const [citizenshipBack, setCitizenshipBack] = useState(null);
    const [avatarImage, setAvatarImage] = useState(null);
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');

    function handleRedirect(url) {
        navigate(url);
    }

    useEffect(() => {
        if (initialEmail) {
            setFormData(prevData => ({ ...prevData, email: initialEmail }));
        }
        if (initialPassword) {
            setFormData(prevData => ({ ...prevData, password: initialPassword }));
        }
    }, [initialEmail, initialPassword]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
        // Clear specific error when user starts typing
        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    };

    const handleAvatarChange = (event) => {
        const {name, value} = event.target;
        const file = event.target.files[0];

        if (file && file.type.startsWith('image/')){
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarImage(reader.result)
            };

            reader.readAsDataURL(file);
        } else{
            setAvatarImage(null);
            setErrorMessage("Invalid Image Input");
        }
    }

    const handleCitizenshipFrontChange = (event) => {
        const { name, value } = event.target;
        const file = event.target.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // When the file is loaded, set the result (Base64 data URL) to state
                setCitizenshipFront(reader.result);
            };

            reader.readAsDataURL(file); // Read the file as a data URL
        } else {
            setCitizenshipFront(null);
            setErrorMessage("Invalid Image Input")
        }
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
        // Clear specific error when user starts typing
        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    };

    const handleCitizenshipBackChange = (event) => {
        const { name, value } = event.target;
        const file = event.target.files[0]

        console.log(file.type);

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // When the file is loaded, set the result (Base64 data URL) to state
                setCitizenshipBack(reader.result);
            };

            reader.readAsDataURL(file); // Read the file as a data URL
        } else {
            setCitizenshipBack(null);
            setErrorMessage("Invalid Image Input");
        }
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
        // Clear specific error when user starts typing
        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";
        if (!formData.panNumber.trim()) tempErrors.panNumber = "PAN Number is required";
        if (!formData.gender) tempErrors.gender = "Gender is required";
        if (!formData.phone.trim()) tempErrors.phone = "Phone Number is required";
        else if (!/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Phone number must be 10 digits";
        if (!formData.dateOfBirth) tempErrors.dateOfBirth = "Date of Birth is required";
        if (!formData.citizenshipNumber.trim()) tempErrors.citizenshipNumber = "Citizenship Number is required";
        if (!formData.citizenshipIssuedDate) tempErrors.citizenshipIssuedDate = "Citizenship Issued Date is required";
        if (formData.experience === '' || formData.experience === null || formData.experience === undefined) tempErrors.experience = "Experience is required";
        else if (isNaN(Number(formData.experience)) || Number(formData.experience) < 0) tempErrors.experience = "Experience must be a non-negative number";
        if (!citizenshipFront) tempErrors.citizenshipFront = "Citizenship Front image is required";
        if (!citizenshipBack) tempErrors.citizenshipBack = "Citizenship Back image is required";

        // Email and password should ideally be passed and exist
        if (!formData.email) tempErrors.email = "Email is missing. Please go back to the previous step.";
        if (!formData.password) tempErrors.password = "Password is missing. Please go back to the previous step.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleNurseRegistration = async (event) => {
        event.preventDefault();
        setSubmitError('');
        if (!validate()) {
            return;
        }

        const submissionData = new FormData();
        submissionData.append('name', formData.fullName);
        submissionData.append('panNumber', formData.panNumber);
        submissionData.append('gender', formData.gender);
        submissionData.append('phone', formData.phone);
        submissionData.append('dateOfBirth', formData.dateOfBirth);
        submissionData.append('citizenshipNumber', formData.citizenshipNumber);
        submissionData.append('citizenshipIssuedDate', formData.citizenshipIssuedDate);
        submissionData.append('email', formData.email);
        submissionData.append('password', formData.password);
        submissionData.append('experience', String(Number(formData.experience)));


        if (citizenshipFront) {
            submissionData.append('citizenshipFront', citizenshipFront);
        }
        if (citizenshipBack) {
            submissionData.append('citizenshipBack', citizenshipBack);
        }

        try {
            const response = await fetch('/api/register/nurse', {
                method: 'POST',
                body: submissionData,
            });

            const responseData = await response.json();

            if (response.ok) {
                console.log("Registration successful:", responseData);
                if (responseData.token) localStorage.setItem('token', responseData.token);
                if (responseData.nurse) localStorage.setItem('user', JSON.stringify(responseData.nurse));
                navigate('/nurse-dashboard');
            } else {
                setSubmitError(responseData.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error("Network or other error:", error);
            setSubmitError('An error occurred. Please check your network and try again.');
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // Changed to flex-start for scrollability
            alignItems: 'center', // Center items horizontally
            minHeight: '100vh', // Ensure it takes at least full viewport height
            height: 'max-content', // Allow content to expand
            backgroundColor: (theme) => theme.palette.primary.dark,
            overflowY: 'auto', // Allow vertical scrolling for the whole page
            py: 2, // Add some vertical padding
        }}>
            <Stack sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                my: 2, // Reduced margin
                gap: 2,
                padding: 1, // Reduced padding
            }}>
                <CustomButton onClick={() => handleRedirect("/register/nurse")}>Nurse</CustomButton>
                <CustomButton onClick={() => handleRedirect("/register/careseeker")}>Patient</CustomButton>
            </Stack>
            <Paper elevation={3}
                component="form" // Make Paper a form
                onSubmit={handleNurseRegistration}
                sx={{
                    backgroundColor: (theme) => theme.palette.background.paper,
                    mx: 'auto', // Center paper
                    padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
                    width: {
                        xs: '95%', // More width on extra small screens
                        sm: '90%',
                        md: '80%', // Adjust for medium screens
                        lg: '70%', // Max width for large screens, e.g., 1200px
                        xl: 1000, // Max width for very large screens
                    },
                    maxWidth: 1000, // Absolute max width
                    // height: 'auto', // Auto height based on content
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2, // Add gap between direct children of Paper
                }}>
                <Typography sx={
                    {
                        my: {
                            xs: 4,
                            sm: 3,
                            md: 2,
                            lg: 2
                        },
                        fontWeight:700,
                        color: (theme) => theme.palette.primary.dark
                        
                    }
                } variant="h5" component="h1" textAlign="center" gutterBottom>
                    Enter Your Personal Details
                </Typography>

                {/* Personal Details Section */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, py:2, width: '100%' }}>
                    <Stack direction={{
                        xs: 'column',
                        sm: 'column',
                        md: 'row',

                    }} sx={{
                        flexWrap: {
                            xs: 'wrap',
                            sm: 'wrap',
                            md: 'nowrap',
                        },
                        gap: 10
                    }} spacing={2} alignItems="center">
                        <Stack sx={{
                            gap:4,
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <Avatar src={avatarImage} sx={{ width: 160, height: 160, mb: 1 }} /> 
                            <Input
                                id="avatarImage"
                                type="file"
                                name="avatarImage"
                                accept="image/*"
                                onChange={handleAvatarChange}
                                sx={{
                                    width:250
                                }}></Input>
                        </Stack>
                        <Stack sx={{
                            mx: 4
                        }} direction={{ xs: 'column', sm: 'column' }} spacing={2} justifyContent="center">
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width={{ xs: '100%', md: '80%' }} justifyContent="left" alignItems="center">
                                <FormGroup sx={{ flexGrow: 1, minWidth: '200px' }}>
                                    <InputLabel htmlFor="fullName">Full Name</InputLabel>
                                    <Input width={{
                                        xs: '50%',
                                        sm: '50%',
                                        md: '60%%',
                                        lg: '70%',
                                    }} id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} error={!!errors.fullName} fullWidth />
                                    {errors.fullName && <FormHelperText error>{errors.fullName}</FormHelperText>}
                                </FormGroup>
                                <FormGroup sx={{ flexGrow: 1, minWidth: '200px' }}>
                                    <InputLabel htmlFor="panNumber">PAN Number</InputLabel>
                                    <Input width={{
                                        xs: '50%',
                                        sm: '50%',
                                        md: '60%%',
                                        lg: '70%',
                                    }} id="panNumber" name="panNumber" value={formData.panNumber} onChange={handleChange} error={!!errors.panNumber} />
                                    {errors.panNumber && <FormHelperText error>{errors.panNumber}</FormHelperText>}
                                </FormGroup>
                            </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width={{ xs: '100%', md: '80%' }} justifyContent="left" alignItems="center">
                    <FormGroup sx={{ flexGrow: 1, minWidth: '200px' }}>
                        <InputLabel htmlFor="experience">Experience (years)</InputLabel>
                        <TextField
                            id="experience"
                            name="experience"
                            type="number"
                            inputProps={{ min: 0 }}
                            value={formData.experience}
                            onChange={handleChange}
                            error={!!errors.experience}
                            fullWidth
                            variant="outlined"
                        />
                        {errors.experience && <FormHelperText error>{errors.experience}</FormHelperText>}
                    </FormGroup>
                </Stack>
                            <Stack flexWrap={{
                                xs: 'wrap',
                                sm: 'wrap',
                                md: 'nowrap',
                            }} direction={{ xs: 'column', sm: 'row' }} spacing={2} width={{ xs: '100%', md: '80%' }} justifyContent="left" alignItems="center">
                                <FormGroup sx={{ flexGrow: 1, minWidth: '200px' }}>
                                    <InputLabel htmlFor="phone">Phone Number</InputLabel>
                                    <Input width={{
                                        xs: '50%',
                                        sm: '50%',
                                        md: '60%',
                                        lg: '70%',
                                    }} id="phone" name="phone" value={formData.phone} onChange={handleChange} error={!!errors.phone} />
                                    {errors.phone && <FormHelperText error>{errors.phone}</FormHelperText>}
                                </FormGroup>
                                <FormGroup sx={{ flexGrow: 1, minWidth: '200px' }}>
                                    <InputLabel id="gender-input-label">Gender</InputLabel>
                                    <Select
                                        size='small'
                                        labelId='gender-input-label'
                                        id='gender-select'
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        label='Gender' // Label for accessibility, though not visible without TextField variant
                                        error={!!errors.gender}
                                        fullWidth
                                    >
                                        <MenuItem value={"male"}>Male</MenuItem>
                                        <MenuItem value={"female"}>Female</MenuItem>
                                        <MenuItem value={"other"}>Other</MenuItem>
                                    </Select>
                                    {errors.gender && <FormHelperText error>{errors.gender}</FormHelperText>}
                                </FormGroup>
                            </Stack>
                            <Stack>
                                <FormGroup sx={{ flexGrow: 1, minWidth: '200px' }}>
                                    <InputLabel htmlFor="dateOfBirth" shrink>Date of Birth</InputLabel>
                                    {/* Using TextField for better date input experience and label handling */}
                                    <TextField
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        type="date"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        error={!!errors.dateOfBirth}
                                        fullWidth // Ensures label is always shrunk for date type
                                        variant="outlined" // To look similar to Input, or use "outlined" / "filled"
                                    />
                                    {errors.dateOfBirth && <FormHelperText error>{errors.dateOfBirth}</FormHelperText>}
                                </FormGroup>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>

                {/* Citizenship Details Section */}
                <Box sx={{
                    display: 'flex',
                    border: '1px solid',
                    borderColor: (theme) => theme.palette.divider,
                    borderRadius: 2,
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    width: '100%',
                    padding: { xs: 1, sm: 2 },
                    mt: 1,
                }}>
                    <Typography variant="h6" component="h2" textAlign="center">Citizenship Details</Typography>
                    <FormGroup sx={{ width: { xs: '90%', sm: '70%', md: '60%' } }}>
                        <InputLabel htmlFor="citizenshipNumber">Citizenship Number</InputLabel>
                        <Input id="citizenshipNumber" name="citizenshipNumber" value={formData.citizenshipNumber} onChange={handleChange} error={!!errors.citizenshipNumber} fullWidth />
                        {errors.citizenshipNumber && <FormHelperText error>{errors.citizenshipNumber}</FormHelperText>}
                    </FormGroup>
                    <FormGroup sx={{ width: { xs: '90%', sm: '70%', md: '60%' } }}>
                        <InputLabel htmlFor="citizenshipIssuedDate" shrink>Citizenship Issued Date</InputLabel>
                        <TextField
                            id="citizenshipIssuedDate"
                            name="citizenshipIssuedDate"
                            type="date"
                            value={formData.citizenshipIssuedDate}
                            onChange={handleChange}
                            error={!!errors.citizenshipIssuedDate}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            variant="standard"
                        />
                        {errors.citizenshipIssuedDate && <FormHelperText error>{errors.citizenshipIssuedDate}</FormHelperText>}
                    </FormGroup>
                    <FormGroup sx={{ width: { xs: '90%', sm: '70%', md: '60%' } }}>
                        <InputLabel htmlFor="citizenshipFront">Citizenship Front Photo</InputLabel>
                        {
                            citizenshipFront && (<PreviewImage src={citizenshipFront} alt="Citizenship Front" />)
                        }
                        <Input
                            id="citizenshipFront"
                            type="file"
                            name="citizenshipFront"
                            accept="image/*"
                            onChange={handleCitizenshipFrontChange}
                            error={!!errors.citizenshipFront}
                            fullWidth
                        />
                        {errors.citizenshipFront && <FormHelperText error>{errors.citizenshipFront}</FormHelperText>}
                    </FormGroup>
                    <FormGroup sx={{ width: { xs: '90%', sm: '70%', md: '60%' } }}>
                        <InputLabel htmlFor="citizenshipBack">Citizenship Back Photo</InputLabel>
                                                {
                            citizenshipBack && (<PreviewImage src={citizenshipBack} alt="Citizenship Back" />)
                        }
                        <Input
                            id="citizenshipBack"
                            type="file"
                            name="citizenshipBack"
                            accept="image/*"
                            onChange={handleCitizenshipBackChange}
                            error={!!errors.citizenshipBack}
                            fullWidth
                        />
                        {errors.citizenshipBack && <FormHelperText error>{errors.citizenshipBack}</FormHelperText>}
                    </FormGroup>
                </Box>

                {submitError && (
                    <Typography color="error" textAlign="center" sx={{ mt: 1, width: '100%' }}>
                        {submitError}
                    </Typography>
                )}
                {(errors.email || errors.password) &&
                    <Typography color="error" textAlign="center" sx={{ mt: 1, width: '100%' }}>
                        {errors.email || errors.password} {/* Display email/password error if present */}
                    </Typography>
                }
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2,
                    backgroundColor: (theme) => theme.palette.primary.dark, py: 1.5, width: { xs: '80%', sm: '60%', md: '50%' }, alignSelf: 'center' }}>
                    Submit Registration
                </Button>
            </Paper>
        </Box>
    );
}

export default RegisterNurse;