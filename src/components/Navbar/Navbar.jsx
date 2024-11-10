import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "@../../../assets/img/logo.svg";
import myProfile from '@/../../assets/img/profile_pic.png';
import dropDown from '@/../../assets/img/dropdow_icon.svg';
import Button from "../Button/Button";

export default function Navbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State for login status
  const profileImageUrl = myProfile; // Replace with actual user profile image URL
  const dropdownRef = useRef(null); // Reference to the dropdown

  const handleClick = (e) => {
    e.preventDefault(); // Prevents form submission
    navigate("/signup");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Update login status
    setIsDropdownOpen(false); // Close dropdown after logout
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 w-full">
      <div className="max-w-[90%] mx-auto flex items-center py-[12px]">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </NavLink>

        {/* Centered navigation links */}
        <div className="flex-grow">
          <div className="flex space-x-10 items-center justify-center flex-grow font-poppins">
            <NavLink to="/" className="text-gray-900 relative border-transparent after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-blue-500 after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:scale-0 hover:after:scale-100 transition-transform duration-300">
              HOME
            </NavLink>
            <NavLink to="/doctors" className="text-gray-900 relative after:content-[''] after:absolute after:w-[50px] after:h-[2px] after:bg-blue-500 after:rounded-tl-lg after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100 transition-all duration-300">
              ALL DOCTORS
            </NavLink>
            <NavLink to="/about" className="text-gray-900 relative border-transparent after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-blue-500 after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:scale-0 hover:after:scale-100 transition-transform duration-300">
              ABOUT
            </NavLink>
            <NavLink to="/contact" className="text-gray-900 relative after:content-[''] after:absolute after:w-[50px] after:h-[2px] after:bg-blue-500 after:rounded-tl-lg after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100 transition-all duration-300">
              CONTACT
            </NavLink>
          </div>
        </div>

        {/* Conditional Button/Profile Picture with Dropdown */}
        {isLoggedIn ? (
          <div className="relative" ref={dropdownRef}>
            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
              <img
                src={profileImageUrl}
                alt="Profile"
                className="w-[45px] h-[45px] rounded-full object-cover mr-2"
              />
              <img
                src={dropDown}
                alt="Dropdown Icon"
                className="w-[13px] h-[10px] object-cover mt-4"
              />
            </div>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-4 w-40 bg-white rounded-md shadow-lg z-10 font-outfit">
                <NavLink to="/my-profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 ">
                  My Profile
                </NavLink>
                <NavLink to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Settings
                </NavLink>
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Button onClick={handleClick} className="w-[195px] h-[50px] bg-[#5F6FFF] text-white rounded-[47px] font-outfit font-normal">
            Create account
          </Button>
        )}
      </div>

      {/* Horizontal line */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[90%] border-t border-gray-300 h-6"></div>
      </div>
    </nav>
  );
}
