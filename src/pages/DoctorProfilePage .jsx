import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import trusted from '@/../../assets/img/trusted.png';
import about from '@/../../assets/img/about.png';
import DoctorCard from '../components/DoctorCard/DoctorCard';

// Sample data for demonstration (replace with your actual API call)
const doctorsData = [
  {
    name: "Dr. Richard James",
    specialization: "General Physician",
    qualifications: "MBBS",
    yearsexp: 2,
    about: "Dr. James has a strong commitment to comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    appointmentFee: "$50",
    image: require('@/../../assets/img/doc1.png'),
  },
  {
    name: "Dr. Sarah Lee",
    specialization: "Cardiologist",
    qualifications: "MD",
    yearsexp: 5,
    about: "Dr. Lee specializes in heart-related issues with extensive experience in cardiac surgery.",
    appointmentFee: "$100",
    image: require('@/../../assets/img/doc2.png'),
  },
  // Add more doctors as needed
];

const bookingHoursSlots = ["10:30am", "11:30am", "12:30pm", "1:30pm", "2:30pm", "3:30pm"];

// Function to generate the next 7 days dynamically starting from today
const generateDays = () => {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const today = new Date();
  const days = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push({
      day: daysOfWeek[date.getDay()],
      date: date.getDate(),
    });
  }

  return days;
};

// Main AppointmentItem Component
const AppointmentItem = () => {
  const { doctorName } = useParams(); // Get doctor name from URL params
  const [doctor, setDoctor] = useState(null);
  const [daySlots] = useState(generateDays());

  useEffect(() => {
    // Fetch doctor details based on the doctor name
    const fetchDoctorDetails = () => {
      const doctorData = doctorsData.find((doc) => doc.name === doctorName);
      setDoctor(doctorData);
    };
    fetchDoctorDetails();
  }, [doctorName]);

  if (!doctor) return <p>Loading doctor details...</p>;

  return (
    <div className="container mx-auto p-8">
      {/* Doctor Profile */}
      <DoctorProfile doctor={doctor} />

      {/* Booking Slots */}
      <BookingSlots dslots={daySlots} hslots={bookingHoursSlots} />

      {/* Related Doctors */}
      <RelatedDoctors doctors={doctorsData} specialization={doctor.specialization} />
    </div>
  );
};

// DoctorProfile Component
const DoctorProfile = ({ doctor }) => (
  <div className="flex">
    <img className="h-[320px] w-[260px] bg-[#5F6FFF] rounded-[12px]" src={doctor.image} alt="doctor" />
    <div className="flex bg-white p-6 rounded-lg border border-gray-400 ml-4 h-[320px] w-full font-outfit">
      <div className="ml-6">
        <h2 className="text-[36px] text-[#1F2937] flex leading-[45.36px]">
          {doctor.name} <span className="text-blue-500"><img className="mt-4 ml-2" src={trusted} alt="trusted" /></span>
        </h2>
        <p className="text-gray-500 mt-1 flex">
          {doctor.qualifications} - {doctor.specialization}
          <p className="rounded-[47px] border border-slate-600 p-0.5 ml-2 w-[75px] flex items-center justify-center">
            {doctor.yearsexp} years
          </p>
        </p>
        <p className="text-[#1F2937] mt-2 flex text-[18px]">
          About <img className="ml-2 w-4 h-4 mt-1.5" src={about} alt="about" />
        </p>
        <p className="text-gray-700 mt-2">{doctor.about}</p>
        <p className="text-gray-500 mt-8">
          Appointment fee: <span className="font-semibold text-[#262626]">{doctor.appointmentFee}</span>
        </p>
      </div>
    </div>
  </div>
);

// BookingSlots Component
const BookingSlots = ({ dslots, hslots }) => {
  const [selectedDay, setSelectedDay] = useState(dslots[0]);
  const [selectedHour, setSelectedHour] = useState(hslots[0]);

  return (
    <div className="mt-10 ml-[275px]">
      <h3 className="text-xl font-semibold text-[#565656] mb-6">Booking Slots</h3>

      {/* Day Slots */}
      <div className="flex space-x-4 my-4 overflow-x-auto">
        {dslots.map((dslot, index) => (
          <button
            key={index}
            onClick={() => setSelectedDay(dslot)}
            className={`px-4 py-8 rounded-[47px] border ${selectedDay.date === dslot.date ? 'bg-[#5F6FFF] text-white' : 'border-[#DDDDDD]'} w-[75px] flex flex-col font-outfit items-center justify-center`}
          >
            <span className="text-xs">{dslot.day}</span>
            <span>{dslot.date}</span>
          </button>
        ))}
      </div>

      {/* Hour Slots */}
      <div className="flex space-x-4 my-4 overflow-x-auto">
        {hslots.map((hslot, index) => (
          <button
            key={index}
            onClick={() => setSelectedHour(hslot)}
            className={`py-2 rounded-[47px] border ${selectedHour === hslot ? 'bg-[#5F6FFF] text-white' : 'border-[#DDDDDD]'} w-[75px] flex items-center justify-center font-outfit px-12`}
          >
            {hslot}
          </button>
        ))}
      </div>

      <button
        className="mt-6 bg-[#5F6FFF] text-white px-16 py-5 rounded-[47px] text-[20px] font-outfit"
        onClick={() => alert(`Booked on ${selectedDay.day}, ${selectedDay.date} at ${selectedHour}`)}
      >
        Book an appointment
      </button>
    </div>
  );
};

// RelatedDoctors Component
const RelatedDoctors = ({ doctors, specialization }) => (
  <div className="mt-8">
    <h3 className="text-2xl text-[#1F2937] text-center font-outfit mt-8 pt-10">Related Doctors</h3>
    <p className="text-center text-[#4B5563] font-outfit mb-4">Select your ideal doctor from our selection of trusted doctors.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
      {doctors
        .filter((doc) => doc.specialization === specialization)
        .map((doc, index) => (
          <DoctorCard key={index} doctor={doc} />
        ))}
    </div>
  </div>
);

export default AppointmentItem;
