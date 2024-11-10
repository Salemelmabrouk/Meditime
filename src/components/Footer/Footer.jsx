import React from 'react';
import logo from "@../../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-white  mt-10 py-10 text-gray-700 text-sm">
      <div className="container mx-auto grid grid-cols-3 gap-6">
        <div className="ml-6">
          <img src={logo} alt="Logo" className="h-10 w-max" />
          <p className="font-outfit mt-8 whitespace-wrap">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
        <div className="font-outfit ml-56">
          <h3 className="text-lg font-semibold font-outfit mt-4">COMPANY</h3>
          <ul className="mt-6 space-y-4">  {/* Adds space between list items */}
            
            <li>      <NavLink  to="/"> Home</NavLink></li>
            <li>      <NavLink  to="/about"> About us</NavLink></li>
            <li> <NavLink  to="/contact"> Contact us</NavLink></li>
           
            <li>      <NavLink  to="/Privacy policy"> Privacy policy</NavLink></li>
           
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mt-4 ml-48   space-y-4">GET IN TOUCH</h3>
          <p className='mt-6 space-y-4 font-outfit ml-48  '>+216-55-555-555</p>
          <p className='mt-6 space-y-4 font-outfit ml-48 '>Pingucoder@gmail.com</p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-16">
        <div className="w-full max-w-[90%] border-t border-gray-300 h-6"></div>
      </div> 
      <p className="text-center mt-4">Copyright © 2024 Pingucoder - All Right Reserved.</p>


      
    </footer>
  );
}
