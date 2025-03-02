import { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Box, 
  Container, 
  Typography, 
  Paper,
  Card,
  CardContent,
  Stack,
  Avatar,
  Chip,
  Divider,
  Grid2
} from '@mui/material';
import Sidebar from '../ui/SideBar';

const UserDashboard = () => {
  return (
    <>
    <Sidebar isUser="User" />
      <Box>
      </Box>
    </>
  );
};


export default UserDashboard;

