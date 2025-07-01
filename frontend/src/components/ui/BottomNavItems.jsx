import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionIcon from "@mui/icons-material/Description";
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';

const BottomNavItems = ({ userType, value, onChange }) => {
  const navigate = useNavigate();

  const adminSidebarItems = [
    {
      id: 1,
      icon: <DashboardIcon />, label: "Dashboard", path: "/admin/dashboard"
    },
    {
      id: 2,
      icon: <PersonIcon />, label: "Users", path: "/admin/users"
    },
    {
      id: 3,
      icon: <PersonIcon />, label: "Nurses", path: "/admin/nurses"
    },
    {
      id: 4,
      icon: <PersonIcon />, label: "Patients", path: "/admin/patients"
    },
    {
      id: 5,
      icon: <AssessmentIcon />, label: "Reports", path: "/admin/reports"
    },
  ];

  const nurseSidebarItems = [
    {
      id: 1,
      icon: <DashboardIcon />, label: "Dashboard", path: "/nurse/dashboard"
    },
    {
      id: 2,
      icon: <CalendarMonthIcon />, label: "Bookings", path: "/nurse/booking"
    },
    {
      id: 3,
      icon: <PersonIcon />, label: "Patients", path: "/nurse/patients"
    },
    {
      id: 4,
      icon: <AssessmentIcon />, label: "Reports", path: "/nurse/reports"
    },
  ];

  const patientSidebarItems = [
    {
      id: 1,
      icon: <DashboardIcon />, label: "Dashboard", path: "/dashboard"
    },
    {
      id: 2,
      icon: <PersonIcon />, label: "Profile", path: "/profile"
    },
    {
      id: 3,
      icon: <MessageIcon />, label: "Messages", path: "/messages"
    },
    {
      id: 4,
      icon: <CalendarMonthIcon />, label: "Appointments", path: "/appointments"
    },
    {
      id: 5,
      icon: <DescriptionIcon />, label: "Records", path: "/medical-records"
    },
  ];

  const getSidebarItems = (userType) => {
    switch (userType) {
      case "Admin":
        return adminSidebarItems;
      case "Nurse":
        return nurseSidebarItems;
      case "Patient":
      case "User":
        return patientSidebarItems;
      default:
        return patientSidebarItems;
    }
  };

  const items = getSidebarItems(userType);

  // Add logout as the last item
  const navItems = [
    ...items,
    {
      id: "logout",
      icon: <LogoutIcon />, label: "Logout", path: "/logout", isLogout: true
    }
  ];

  const handleNavChange = (event, newValue) => {
    const selected = navItems[newValue];
    if (selected.isLogout) {
      navigate("/logout");
    } else {
      navigate(selected.path);
    }
    if (onChange) onChange(newValue);
  };

  return (
    <>
      {navItems.map((item, idx) => (
        <BottomNavigationAction
          key={item.id}
          label={value === idx ? item.label : ''}
          icon={React.cloneElement(item.icon, {
            sx: {
              color: (theme) => theme.palette.primary.dark,
              fontSize: 28,
              transform: value === idx ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.2s',
            }
          })}
          value={idx}
          sx={{
            minWidth: 0,
            maxWidth: 1,
            px: 0.1,
            mx: 0.1,
            py: 0.1,
            my: 0,
          }}
          onClick={(event) => handleNavChange(event, idx)}
        />
      ))}
    </>
  );
};

BottomNavItems.propTypes = {
  userType: PropTypes.oneOf(["Admin", "Nurse", "Patient", "User"]).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default BottomNavItems; 