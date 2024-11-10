import Button from "../Button/Button";
import DoctorCard from "../DoctorCard/DoctorCard";
import { useState } from "react";

import doc1 from '@/../../assets/img/doc1.png';
import doc2 from '@/../../assets/img/doc2.png';
import doc3 from '@/../../assets/img/doc3.png';
import doc4 from '@/../../assets/img/doc4.png';
import doc5 from '@/../../assets/img/doc5.png';
 


const doctors = [
  { name: "Dr. Richard James", specialization: "General Physician", availability: "Available", image: doc1 },
  { name: "Dr. Sarah Thompson", specialization: "Neurologist", availability: "Available", image: doc2 },
  { name: "Dr. Emma Watson", specialization: "Pediatrician", availability: "Not Available", image: doc3 },
  { name: "Dr. Sarah Lee", specialization: "Gastroenterologist", availability: "Not Available", image: doc5 },
  { name: "Dr. Sarah Thompson", specialization: "Neurologist", availability: "Available", image: doc4 },
  // Add more doctors here as needed
];

export default function DoctorsSection() {
  const [visibleCount, setVisibleCount] = useState (10);

  const loadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 5, doctors.length));
  };

  return (
    <div className="text-center py-14 ">
      <h2 className="text-[40px] font-outfit font-normal text-[#1F2937]">Top Doctors to Book</h2>
      <p className="text-gray-500 font-outfit font-normal">Simply browse through our extensive list of trusted doctors.</p>

      <div className="text-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[12px] mx-20">
          {doctors.slice(0, visibleCount).map((doctor, index) => (
            <DoctorCard 
              key={index} 
              doctor={doctor} // Pass the doctor object as a prop
            />
          ))}
        </div>
      </div>

      {visibleCount < doctors.length && (
        <Button className="bg-[#EAEFFF] text-[#4B5563] font-outfit font-normal w-[147px]" children="more" onClick={loadMore} />
      )}
    </div>
  );
}
