import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUpPageOther from './pages/SignUpPageOther'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/sign-up/other-users' element={<SignUpPageOther />}/>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App