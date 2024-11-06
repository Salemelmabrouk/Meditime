import React from 'react';  
import Button from '../Button/Button';
import doctorImg from '@/../../assets/img/header_img.png';
import TextBox from '../TextBox/TextBox';
import groupProfiles from '@/../../assets/img/group_profiles.png';

export default function HeaderSection() {
  return (
    <div className="flex bg-[#5F6FFF] text-white py-20 px-10 rounded-lg relative max-w-[90%] ml-16">
      <div className="w-1/2">
        <TextBox title="Book Appointment" subtitle="With Trusted Doctors" className="font-semibold"  />
    
        <div className="flex items-center mt-4">
          <img src={groupProfiles} alt="Logo" className="h-10 mr-4" />
          <p className="text-lg  font-outfit  ">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        </div>

        <Button className="  text-[#595959] bg-white  w-[195px] h-[50px]  mt-6   ">
        <div className="flex items-center ml-4  ">
          <span className='font-outfit font-normal'>Book appointment</span>
          <span className="ml-2 ">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6H15M15 6L10.8378 1M15 6L10.8378 11" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span> </div>
        </Button>
      </div>
      <img src={doctorImg} alt="Doctors" className="absolute right-10 top-0 h-full" />
    </div>
  );
}

