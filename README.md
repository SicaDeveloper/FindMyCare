# FindMyCare

FindMyCare is a web application designed to connect care seekers with qualified nurses, manage appointments, and facilitate user registration and reviews. The project is organized into a backend (Node.js/Express) and a frontend (React + Vite).

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Backend Overview](#backend-overview)
- [Frontend Overview](#frontend-overview)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- User registration for both nurses and care seekers
- Secure authentication and password encryption
- Nurse and user dashboards
- Appointment management
- Review and rating system
- Blog and information sections
- Responsive, modern UI

---

## Project Structure

```
FindMyCare/
  backend/      # Node.js/Express backend
  frontend/     # React frontend (Vite)
```

---

## Backend Overview

Located in the `backend/` directory.

- **server.js**: Entry point for the backend server.
- **controller/routes.js**: Defines API endpoints for user, nurse, and review operations.
- **controller/register.js**: Handles registration logic.
- **modules/**: Contains modules for user, nurse, review DB operations, password encryption, and token creation.
- **schema/**: JSON schema files for users, nurses, appointments, reviews, tokens, and blogs.
- **util/IsLoggedIn.js**: Utility for session/auth checks.

---

## Frontend Overview

Located in the `frontend/` directory.

- **src/AppRoutes.jsx**: Main routing configuration using React Router.
- **src/components/pages/**: Main user-facing pages (Home, Register, Login, Dashboards, Reviews, etc.).
- **src/components/ui/**: Reusable UI components (Sidebar, Navbar, Error popups, etc.).
  - **RegisterUser/**: Registration forms and related UI.
  - **UserDashboard/**: Dashboard widgets for users.
  - **HomePage/**: Homepage sections (Hero, Features, Blog, etc.).
- **src/components/utils/**: Utility components (theme, dark mode toggle, etc.).
- **public/**: Static assets and images.
- **css/**: SCSS/CSS files for styling.

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Backend

1. Navigate to the backend directory:
   ```
   cd FindMyCare/backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   node server.js
   ```

### Frontend

1. Navigate to the frontend directory:
   ```
   cd FindMyCare/frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser at `http://localhost:5173` (or as indicated in the terminal).

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE) (or specify your license here)
