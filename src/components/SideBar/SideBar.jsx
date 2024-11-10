import React from 'react';

const specialties = [
  'General Physician', 'Gynecologist', 'Dermatologist',
  'Pediatrician', 'Neurologist', 'Gastroenterologist'
];

const Sidebar = ({ onSpecialtySelect }) => {
  return (
    <div className="w-1/6 p-4 mt-20 ml-12">
      {specialties.map((specialty, index) => (
        <button
          key={index}
          className="w-full text-left px-4 py-2 mb-3 h-[49px] font-outfit hover:border-transparent bg-white rounded-[8px] hover:bg-[#E2E5FF] focus:bg-indigo-100 text-[#4B5563] border border-[#B4B4B4]"
          onClick={() => onSpecialtySelect(specialty)}
        >
          {specialty}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
