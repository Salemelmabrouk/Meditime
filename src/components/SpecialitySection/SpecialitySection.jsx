import React from 'react';
import GeneralPhysicianIcon from '@/../../assets/img/General_physician.png';
import NeurologistIcon from '@/../../assets/img/Neurologist.png';
import PediatricianIcon from '@/../../assets/img/Pediatricians.png';
import GastroenterologistIcon from '@/../../assets/img/Gastroenterologist.svg';
import GynecologistIcon from '@/../../assets/img/Gynecologist.png';
import DermatologistIcon from '@/../../assets/img/Dermatologist.png';

const specialties = [
  { name: "General Physician", icon: GeneralPhysicianIcon },
  { name: "Neurologist", icon: NeurologistIcon },
  { name: "Pediatrician", icon: PediatricianIcon },
  { name: "Gastroenterologist", icon: GastroenterologistIcon },
  { name: "Gynecologist", icon: GynecologistIcon },
  { name: "Dermatologist", icon: DermatologistIcon },
];
 
export default function SpecialitySection() {
  
  return (
    <div className="text-center py-14 mt-10">
      <h2 className="text-[40px] mb-2 font-outfit font-normal text-[#1F2937]">Find by Speciality</h2>
      <p className="text-gray-500 mb-6 font-outfit font-normal">
        Simply browse through our extensive list of trusted doctors, schedule <br /> your appointment hassle-free.
      </p>

      <div className="flex justify-center gap-10 flex-wrap mt-16">
        {/* Map over specialties to display each one */}
        {specialties.map((specialty, index) => (
          <div key={index} className="text-center">
            <img src={specialty.icon} alt={specialty.name} className="mx-auto" />
            <p className="mt-2 font-outfit font-normal text-[#4B5563]">{specialty.name}</p>
          </div>
        ))}
      </div>

     
    </div>
  );
}
