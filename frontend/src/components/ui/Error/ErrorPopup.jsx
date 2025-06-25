import SnackbarContent from '@mui/material/SnackbarContent';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Grow } from '@mui/material';

const StyledSnackbarContent = styled(SnackbarContent)(({ theme }) => ({
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    fontFamily: 'Lexend Deca, sans-serif',
    fontWeight: '400',
    borderRadius: 8,
    padding: theme.spacing(2),
    fontSize: '1rem',
    width: '400px',
    margin: '20px auto',
    textAlign: 'center',
    boxShadow: theme.shadows[5],
    '& .MuiSnackbarContent-message': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '& .MuiSnackbarContent-action': {
        display: 'none',
    },
}));

function ErrorPopup({ errorMessage, onClose }) {
    const theme = useTheme();
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (errorMessage) {
            setOpen(true);
        }
    }, [errorMessage]);

    const handleClose = () => { 
        setOpen(false);
        onClose();
    };

    return (
        <StyledSnackbarContent
            open={open}
            message={errorMessage}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            autoHideDuration={6000}
            slots={{ transition: GrowTransition }}
            action={
                <Button color="inherit" onClick={handleClose}>
                    Close
                </Button>
            }
            onClose={handleClose}
        />
    );
}