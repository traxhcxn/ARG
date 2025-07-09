import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUpPageOther from './pages/SignUpPageOther'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ScrollToTop from './components/ScrollToTop'
import StaffPage from './pages/StaffPage'
import StaffHomeContainer from './containers/Staff/StaffHomeContainer'
import StaffSubmitDataContainer from './containers/Staff/StaffSubmitDataContainer'
import StaffViewAnalyticsContainer from './containers/Staff/StaffViewAnalyticsContainer'
import StaffViewReportsContainer from './containers/Staff/StaffViewReportsContainer'
import StaffSettingsContainer from './containers/Staff/StaffSettingsContainer'
import StaffInboxContainer from './containers/Staff/StaffInboxContainer'
import InstitutionAdminPage from './pages/InstitutionAdminPage'
import InstitutionHomeContainer from './containers/Institution/InstitutionHomeContainer'
import InstitutionAnalyticsContainer from './containers/Institution/InstitutionAnalyticsContainer'
import InstitutionManageReportsContainer from './containers/Institution/InstitutionManageReportsContainer'
import InstitutionManageUsersContainer from './containers/Institution/InstitutionManageUsersContainer'
import InstitutionLogsContainer from './containers/Institution/InstitutionLogsContainer'
import InstitutionSettingsContainer from './containers/Institution/InstitutionSettingsContainer'
import GuestPage from './pages/GuestPage'
import FeaturesPage from './pages/FeaturesPage'
import TestimonialsPage from './pages/TestimonialsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/features' element={<FeaturesPage />} />
				<Route path='/testimonials' element={<TestimonialsPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/sign-up' element={<SignUpPage />} />
				<Route path='/sign-up/other-users' element={<SignUpPageOther />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/staff' element={<StaffPage />}>
					<Route index element={<StaffHomeContainer />} />
					<Route path='home' element={<StaffHomeContainer />} />
					<Route path='submit-data' element={<StaffSubmitDataContainer />} />
					<Route path='view-analytics' element={<StaffViewAnalyticsContainer />} />
					<Route path='view-reports' element={<StaffViewReportsContainer />} />
					<Route path='inbox' element={<StaffInboxContainer />} />
					<Route path='settings' element={<StaffSettingsContainer />} />
				</Route>
				<Route path='/institution-admin' element={<InstitutionAdminPage />}>
					<Route index element={<InstitutionHomeContainer/>} />
					<Route path='home' element={<InstitutionHomeContainer />} />
					<Route path='analytics' element={<InstitutionAnalyticsContainer />} />
					<Route path='manage-reports' element={<InstitutionManageReportsContainer />} />
					<Route path='manage-users' element={<InstitutionManageUsersContainer />} />
					<Route path='activity-logs' element={<InstitutionLogsContainer />} />
					<Route path='settings' element={<InstitutionSettingsContainer />} />
				</Route>
				<Route path='/guest' element={<GuestPage />}/>
			</Routes>
		</Router>
	)
}

export default App