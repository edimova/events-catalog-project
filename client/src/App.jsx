import './styles.css'

import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { AuthContext } from './contexts/AuthContext'

import Header from './components/header/Header'
import Locations from './components/locations/Locations'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'
import Categories from './components/categories/Categories'
import Home from './components/home/Home'
import Login from './components/login/Login'
import { AuthContext } from './contexts/AuthContext'

function App() {

    const [authState, setAuthState] = useState({});

    const changeAuthState = (state)=>{
        localStorage.setItem('accessToken', state.accessToken);
        setAuthState(state);
    }
    const contextData={
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState

    }
    return (
        <AuthContext.Provider value={contextData}>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/locations" element={<Locations />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>

            </div>
        </AuthContext.Provider>
    )
}

export default App
