import { NavLink } from "react-router-dom";
import logo from "@../../../assets/img/logo.svg";
import Button from "../Button/Button";

export default function Navbar() {
  const handleClick = () => {
    alert('Button clicked!');
  };

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
          <NavLink 
  to="/contact"
  className="text-gray-900 relative border-transparent after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-blue-500 after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:scale-0 hover:after:scale-100 transition-transform duration-300"
>
  HOME
</NavLink>
<NavLink 
  to="/contact"
  className="text-gray-900 relative after:content-[''] after:absolute after:w-[50px] after:h-[2px] after:bg-blue-500 after:rounded-tl-lg after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100 transition-all duration-300"
>
  ALL DOCTORS
</NavLink>
            <NavLink 
  to="/contact"
  className="text-gray-900 relative border-transparent after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-blue-500 after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:scale-0 hover:after:scale-100 transition-transform duration-300"
>
  ABOUT
</NavLink>
<NavLink 
  to="/contact"
  className="text-gray-900 relative after:content-[''] after:absolute after:w-[50px] after:h-[2px] after:bg-blue-500 after:rounded-tl-lg after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100 transition-all duration-300"
>
  CONTACT
</NavLink>
          </div>
        </div>

        {/* Button */}
        <Button onClick={handleClick} className="w-[195px] h-[50px] bg-[#5F6FFF] text-white rounded-[47px] font-outfit font-normal">
          Create account
        </Button>
      </div>

      {/* Horizontal line */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[90%] border-t border-gray-300 h-6"></div>
      </div>
    </nav>
  );
}
