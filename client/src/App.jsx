import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/Common/LandingPage'
import SignUpPageOther from './pages/Common/SignUpPageOther'
import SignUpPage from './pages/Common/SignUpPage'
import LoginPage from './pages/Common/LoginPage'
import ScrollToTop from './components/Global/ScrollToTop'

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