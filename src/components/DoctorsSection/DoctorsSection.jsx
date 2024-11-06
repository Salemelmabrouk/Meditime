import React, { useState } from 'react';

import doc1 from '@/../../assets/img/doc1.png';
import doc2 from '@/../../assets/img/doc2.png';
import doc3 from '@/../../assets/img/doc3.png';
import doc4 from '@/../../assets/img/doc4.png';
import doc5 from '@/../../assets/img/doc5.png';
import Button from '../Button/Button';

const doctors = [
  { name: "Dr. Richard James", specialization: "General Physician", availability: "Available", image: doc1 },
  { name: "Dr. Sarah Thompson", specialization: "Neurologist", availability: "Available", image: doc2 },
  { name: "Dr. Emma Watson", specialization: "Pediatrician", availability: "Not Available", image: doc3 },
  { name: "Dr. Jane Doe", specialization: "Gastroenterologist", availability: "Not Available", image: doc5 },
  { name: "Dr. Sarah Thompson", specialization: "Neurologist", availability: "Available", image: doc4 },
  { name: "Dr. Richard James", specialization: "General Physician", availability: "Available", image: doc1 },
  { name: "Dr. Sarah Thompson", specialization: "Neurologist", availability: "Available", image: doc2 },
  { name: "Dr. Emma Watson", specialization: "Pediatrician", availability: "Not Available", image: doc3 },
  { name: "Dr. Jane Doe", specialization: "Gastroenterologist", availability: "Not Available", image: doc5 },
  { name: "Dr. Sarah Thompson", specialization: "Neurologist", availability: "Available", image: doc4 },
  { name: "Dr. Richard James", specialization: "General Physician", availability: "Available", image: doc1 },
  { name: "Dr. Sarah Thompson", specialization: "Neurologist", availability: "Available", image: doc2 },
  { name: "Dr. Emma Watson", specialization: "Pediatrician", availability: "Not Available", image: doc3 },
  { name: "Dr. Jane Doe", specialization: "Gastroenterologist", availability: "Not Available", image: doc5 },
  { name: "Dr. Sarah Thompson", specialization: "Neurologist", availability: "Available", image: doc4 },
  { name: "Dr. Richard James", specialization: "General Physician", availability: "Available", image: doc1 },
  { name: "Dr. Sarah Thompson", specialization: "Neurologist", availability: "Available", image: doc2 },
  { name: "Dr. Emma Watson", specialization: "Pediatrician", availability: "Not Available", image: doc3 },
  { name: "Dr. Jane Doe", specialization: "Gastroenterologist", availability: "Not Available", image: doc5 },
  { name: "Dr. Sarah Thompson", specialization: "Neurologist", availability: "Available", image: doc4 },
];

export default function DoctorsSection() {
    const [visibleCount, setVisibleCount] = useState(10);
  
    // Function to handle loading more items
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
              <div key={index} className="relative p-4 bg-white w-[220px] h-[340px] rounded-[19px] gap-[12px] border border-[#EAEFFF]">
                <div
                  className="absolute w-[220px] h-[220px] rounded-t-[12px] opacity-100"
                  style={{ top: '0px', left: '0px', opacity: '1' }}
                >
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover rounded-t-[12px] bg-[#EAEFFF]" />
                </div>
                <div className="mt-[200px] p-2">
                  <div className="flex items-center">
                    {/* Circle before availability */}
                    <span className="w-2  h-2  bg-green-500 rounded-full mr-2 mt-2" ></span>
                    <p className={`mt-2 ${doctor.availability === "Available" ? "text-green-500" : "text-red-500"}`}>
                      {doctor.availability}
                    </p>
                  </div>
                  <h3 className="text-lg font-outfit font-normal text-[#1F2937]">{doctor.name}</h3>
                  <p className="text-[#4B5563] text-[15px] font-outfit ">{doctor.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {visibleCount < doctors.length && (
          <Button className="bg-[#EAEFFF] text-[#4B5563] font-outfit font-normal w-[147px]" children="more" onClick={loadMore} />
        )}
      </div>
    );
  }
  