import './styles.css'

import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

import Header from './components/header/Header'
import Locations from './components/locations/Locations'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'
import CategoriesList from './components/categories/CategoriesList.jsx'
import Home from './components/home/Home'
import Login from './components/login/Login'
import CreateEvent from './components/events/CreateEvent'
import EventsList from './components/events/EventsList'
import EventDetails from './components/events/EventDetails'

function App() {

  
    return (
        <AuthContextProvider>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element ={<EventsList/>}/>
                    <Route path="/events/create" element={<CreateEvent />} />
                    <Route path="/events/:eventId/details" element ={<EventDetails/>}/>
                    <Route path="/categories" element={<CategoriesList />} />
                    <Route path="/categories/:categoryId/details" element={<CategoryDetails />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>

            </div>
        </AuthContextProvider>
    )
}

export default App
