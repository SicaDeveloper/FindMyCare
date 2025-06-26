import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import React from 'react';


const StyledSnackbarContent = styled(SnackbarContent)(({ theme }) => ({
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    fontFamily: 'Lexend Deca, sans-serif',
    fontWeight: '400',
    borderRadius: 8,
    padding: theme.spacing(2),
    fontSize: '1rem',
    width: '350px',
    py:2,
    margin: '20px auto',
    textAlign: 'center',
}));

function ErrorPopup({ errorMessage, onClose }) {
    const theme = useTheme();

    const[state, setState] = useState({
        open: false,
        Transition: Fade,
    });

    const handleClick = (Transition) => () => {
        setState({
            open: true,
            Transition,
        });
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    return (
        <Snackbar
            open={!!errorMessage}
            autoHideDuration={5000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <StyledSnackbarContent
                message={errorMessage}
                action={
                    <Button color="inherit" size="small" onClick={onClose}>
                        Close
                    </Button>
                }
            />
        </Snackbar>
    );
}

export default ErrorPopup;