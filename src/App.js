import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import DoctorsPage from './pages/Doctors';
 
 
import AppointmentItem from './pages/DoctorProfilePage ';
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';
import MyProfile from './pages/MyProfile';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <Routes>
        {/* Corrected "element" instead of "elements" */}
        <Route path="doctors" element={<DoctorsPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/appointment-with/:doctorName" element={<AppointmentItem />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="my-profile" element={<MyProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


