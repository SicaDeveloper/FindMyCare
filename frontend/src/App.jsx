import Home from './components/pages/Home.jsx'
import {ThemeProvider} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './components/utils/theme.jsx'
import UserDashboard from './components/pages/UserDashboard.jsx'
import UserLogin from './components/pages/UserLogin.jsx'
import RegisterUser from './components/pages/RegisterUser.jsx'
import RegisterNurse from './components/pages/RegisterNurse.jsx'
import RegisterCareSeeker from './components/pages/RegisterCareSeeker.jsx'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import IsLoggedIn from '../../backend/util/IsLoggedIn.js'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={ IsLoggedIn() ?<Navigate to="/dashboard" /> : <Home /> } />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path='/register/nurse' element={<RegisterNurse />}/>
          <Route path='/register/user' element={<RegisterCareSeeker />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
