import React from 'react';
import RegisterPaper from '../ui/RegisterUser/RegisterPaper';
import SideImage from '../ui/SideImage';
import { Box, Stack } from '@mui/material';
import theme from '../utils/theme';

const RegisterUser = () => {
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      padding: 10,
      bgcolor: theme.palette.primary.dark
    }}>
      <Stack sx={{
        width: '100%',
        height: '100%',
        gap: 20,
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <RegisterPaper />
        <SideImage />
      </Stack>
    </Box>
  );
};

export default RegisterUser;

