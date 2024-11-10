import React, { useState } from 'react';
import DoctorCard from '../components/DoctorCard/DoctorCard';
import Sidebar from '../components/SideBar/SideBar';

const doctors = [
  { name: "Dr. Richard James", specialization: "Gastroenterologist", availability: "Available", image: require('@/../../assets/img/doc1.png') },
  { name: "Dr. Hichem Jalloul", specialization: "Gastroenterologist", availability: "Available", image: require('@/../../assets/img/doc1.png') },
  { name: "Dr. Richard James", specialization: "General Physician", availability: "Available", image: require('@/../../assets/img/doc1.png') },
  { name: "Dr. Hichem Jalloul", specialization: "Pediatrician", availability: "Available", image: require('@/../../assets/img/doc1.png') },
  { name: "Dr. Richard James", specialization: "General Physician", availability: "Available", image: require('@/../../assets/img/doc1.png') },
  { name: "Dr. Hichem Jalloul", specialization: "Gastroenterologist", availability: "Available", image: require('@/../../assets/img/doc1.png') },
  { name: "Dr. Richard James", specialization: "General Physician", availability: "Available", image: require('@/../../assets/img/doc1.png') },
  { name: "Dr. Hichem Jalloul", specialization: "Pediatrician", availability: "Available", image: require('@/../../assets/img/doc1.png') },
  { name: "Dr. Richard James", specialization: "Gastroenterologist", availability: "Available", image: require('@/../../assets/img/doc1.png') },
  { name: "Dr. Hichem Jalloul", specialization: "General Physician", availability: "Available", image: require('@/../../assets/img/doc1.png') },
  { name: "Dr. Richard James", specialization: "Pediatrician", availability: "Available", image: require('@/../../assets/img/doc1.png') },
  { name: "Dr. Hichem Jalloul", specialization: "General Physician", availability: "Available", image: require('@/../../assets/img/doc1.png') },
  { name: "Dr. Richard James", specialization: "General Physician", availability: "Available", image: require('@/../../assets/img/doc1.png') },
  { name: "Dr. Hichem Jalloul", specialization: "Neurologist", availability: "Available", image: require('@/../../assets/img/doc1.png') },
];

const DoctorsPage = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);

  // Filter doctors based on the selected specialization
  const filteredDoctors = selectedSpecialization
    ? doctors.filter(doctor => doctor.specialization === selectedSpecialization)
    : doctors;

  return (
    <div className="flex">
      {/* Pass the setSelectedSpecialization function to Sidebar */}
      <Sidebar onSpecialtySelect={setSelectedSpecialization} />

      <div className="flex-1 p-8">
        <h2 className="text-[#4B5563] font-outfit mb-6 text-[27px] -ml-60">
          Browse through the doctors specialist.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
