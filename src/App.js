import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
 
import Navbar from './components/Navbar/Navbar';
import HeaderSection from './components/HeaderSection/HeaderSection';
import SpecialitySection from './components/SpecialitySection/SpecialitySection';
import DoctorsSection from './components/DoctorsSection/DoctorsSection';
import  CallToActionBanner  from './components/CallToActionBanner/CallToActionBanner';
import  Footer  from './components/Footer/Footer';
function App() {
  return (
    <div className="max-w-[1920px] mx-auto" >
      <Router>
        <Navbar />
        <HeaderSection />   
        <SpecialitySection /> 
        <DoctorsSection /> 
        <CallToActionBanner /> 
        <Footer /> 
      </Router>
      </div>
  );
}

export default App;