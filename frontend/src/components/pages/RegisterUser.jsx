import React from 'react';
import RegisterPaper from '../ui/RegisterUser/RegisterPaper';
import RegisterSideImage from '../ui/RegisterUser/RegisterSideImage';
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
        gap: 24,
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <RegisterPaper />
        <RegisterSideImage />
      </Stack>
    </Box>
  );
};

export default RegisterUser;

