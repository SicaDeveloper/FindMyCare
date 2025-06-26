import Home from './components/pages/Home.jsx'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './components/utils/theme.jsx'
import ErrorPopup from './components/ui/Error/ErrorPopup.jsx'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'


function App() {
  
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {errorMessage && <ErrorPopup errorMessage={errorMessage} onClose={() => setErrorMessage("")} />}
      <Outlet context={setErrorMessage} />
    </ThemeProvider>
  )
}

export default App
