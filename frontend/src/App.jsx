import Home from './components/pages/Home.jsx'
import {ThemeProvider} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './components/utils/theme.jsx'
import UserDashboard from './components/pages/UserDashboard.jsx'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import IsLoggedIn from '../../backend/controller/IsLoggedIn.js'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={ IsLoggedIn() ?<Navigate to="/dashboard" /> : <Home /> } />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
