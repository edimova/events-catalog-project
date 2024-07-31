import './styles.css'

import { Route, Routes } from 'react-router-dom'

import Header from './components/header/Header'
import Locations from './components/locations/Locations'
import Register from './components/register/Register'
import SignIn from './components/sign-in/SignIn'
import Logout from './components/logout/Logout'
import Categories from './components/categories/Categories'
import Home from './components/home/Home'

function App() {

	return (
		<div>
			<Header />
			<Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/register" element={<Register />} />
                <Route path="/sing-in" element={<SignIn />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>

		</div>
	)
}

export default App
