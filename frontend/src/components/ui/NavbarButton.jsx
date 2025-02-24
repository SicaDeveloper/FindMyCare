import { IconButton} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "@mui/material/Link";
import React from "react";

function NavbarButton(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
return (
    <>
    <IconButton 
    id="navbar-button"
    onClick={handleClick}>
    <MenuIcon sx={
      {
        fontSize: "40px",
        color: "white"}
      }/>
    </IconButton>
    <Menu id="navbar-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}>
    <MenuItem onClick={handleClose}>
      <Link className='nav-items' to='/' color='rgb(0,0,0)'>Home</Link>
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <Link className='nav-items' to='/' color='rgb(0,0,0)'>About</Link>
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <Link className='nav-items' to='/' color='rgb(0,0,0)'>Contact</Link>
    </MenuItem>
    </Menu>
    </>
  )
}

export default NavbarButton;