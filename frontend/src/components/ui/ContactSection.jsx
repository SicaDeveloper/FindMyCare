import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ContactSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <Box component="section" py={8} bgcolor="background.default">
      <Container maxWidth="md">
        <Paper elevation={0} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Stay Updated
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Subscribe to our newsletter for the latest updates
          </Typography>
          
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              gap: 2,
              maxWidth: 'sm',
              mx: 'auto'
            }}
          >
            <TextField
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              variant="outlined"
              size="medium"
              required
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ px: 4 }}
            >
              Subscribe
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactSection;