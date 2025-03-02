import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';

const adminSidebarItems = [
    {
        id: 1,
        icon: <DashboardIcon />,
        text: "Admin Dashboard",
        path: "/admin/dashboard",
    },
    {
        id: 2,
        icon: <PersonIcon />,
        text: "Users",
        path: "/admin/users",
    },
    {
        id: 3,
        icon: <PersonIcon />,
        text: "Nurses",
        path: "/admin/nurses",
    },
    {
        id: 4,
        icon: <PersonIcon />,
        text: "Patients",
        path: "/admin/patients",
    },
    {
        id: 5,
        icon: <AssessmentIcon />,
        text: "Reports",
        path: "/admin/reports",
    },
]

const nurseSidebarItems = [
    {
        id: 1,
        icon: <DashboardIcon />,
        text: "Nurse Dashboard",
        path: "/nurse/dashboard",
    },
    {
        id: 2,
        icon: <PersonIcon />,
        text: "Patients",
        path: "/nurse/patients",
    },
    {
        id: 3,
        icon: <AssessmentIcon />,
        text: "Reports",
        path: "/nurse/reports",
    },
]

const patientSidebarItems = [
    {
        id: 1,
        icon: <DashboardIcon />,
        text: "User Dashboard",
        path: "/dashboard",
    },
    {
        id: 2,
        icon: <CalendarMonthIcon />,
        text: "Appointments", 
        path: "/appointments",
    },
    {
        id: 3,
        icon: <DescriptionIcon />,
        text: "Medical Records",
        path: "/medical-records",
    },
]

export { patientSidebarItems, adminSidebarItems, nurseSidebarItems };