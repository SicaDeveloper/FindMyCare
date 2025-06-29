import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';



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
    const { email, password } = location.state || {};

    const [image, setImage] = useState(null);
    const [gender, setGender] = useState('');

     const handleGenderChange = (event) => {
    setGender(event.target.value);
  };


    const handleNurseRegistration = () => {
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: 'max-content',
            backgroundColor: (theme) => theme.palette.primary.dark,
            overflow: 'hidden',
        }}>
            <Stack sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                my: 4,
                gap: 2,
                padding: 2,
            }
            }>
                <CustomButton>Nurse</CustomButton>
                <CustomButton>Patient</CustomButton>
            </Stack>
            <Paper elevation={3}
                sx={{
                    backgroundColor: (theme) => theme.palette.background.paper,
                    mt: 10,
                    mx: 'auto',
                    my: 2,
                    padding: 4,
                    width: {
                        xs: '90%',
                        sm: '90%',
                        md: '90%',
                        lg: 1600,
                    },
                    height: 1200,
                    borderRadius: 2
                }}>
                    <Typography>
                        Register As a Nurse
                    </Typography>
                <Box
                sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        width: '100%',
                        padding: 2,
                    }
                }>
                    <Stack sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        }}>
                        <Avatar></Avatar>
                        <Stack sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                            }}>
                            <FormGroup>
                                <InputLabel>Full Name</InputLabel>
                                <Input></Input>
                            </FormGroup>
                            <FormGroup>
                                <InputLabel>PAN Number</InputLabel>
                                <Input></Input>
                            </FormGroup>
                        </Stack>
                    </Stack>
                    <Stack sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        }}>
                        <FormGroup>
                            <InputLabel id="gender-input-label">Gender</InputLabel>
                            <Select
                                labelId='gender-input-label'
                                id='gender-select'
                                onChange={handleGenderChange}
                                value={gender}
                                label='Gender'
                            >
                                <MenuItem value={"male"}>Male</MenuItem>
                                <MenuItem value={"female"}>Female</MenuItem>
                                <MenuItem value={"other"}>Other</MenuItem>
                            </Select>
                        </FormGroup>
                        <FormGroup>
                            <InputLabel>Phone Number</InputLabel>
                            <Input></Input>
                        </FormGroup>
                        <FormGroup>
                            <InputLabel>Date of Birth</InputLabel>
                            <input type="date" name="" id="" />
                        </FormGroup>
                    </Stack>
                </Box>
                <Box sx={{
                    display: 'flex',
                    border: '1px solid',
                    borderColor: "black",
                    borderRadius: 2,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    width: '100%',
                    padding: 2,
                    }}
                    >
                    <Typography>Enter your Citizenship Details</Typography>
                    <FormGroup>
                        <InputLabel>Citizenship Number</InputLabel>
                        <Input></Input>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Citizenship Issued Date</InputLabel>
                        <input type="date" name="" id="" />
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Citizenship Front</InputLabel>
                        <input type="file" name="" id="" />
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Citizenship Back</InputLabel>
                        <input type="file" name="" id="" />
                    </FormGroup>
                </Box>
                <Button>Submit</Button>
            </Paper>
        </Box>
    );
}

export default RegisterNurse;