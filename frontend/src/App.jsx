import Home from './components/pages/Home.jsx'
import {ThemeProvider} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './components/utils/theme.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
