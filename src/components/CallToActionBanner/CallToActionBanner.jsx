import React from 'react';  
import Button from '../Button/Button';
import appointment from '@/../../assets/img/appointment_img.png';
import TextBox from '../TextBox/TextBox';

export default function CallToActionBanner() {
    const handleClick = () => {
        alert('Button clicked!');
    };
  
    return (
        <div className="flex bg-[#5F6FFF] text-white px-10 rounded-lg relative   max-w-[90%] h-[385px] ml-16">
            <div className="w-1/2">
                {/* Apply font-semibold directly to title and subtitle here */}
                <TextBox 
                    title="Book Appointment" 
                    subtitle="With 100+ Trusted Doctors" 
                    className="font-semibold mt-20"
                />
                <Button 
                    onClick={handleClick} 
                    className="w-[195px] h-[50px] bg-white text-[#4B5563] rounded-[47px] font-outfit font-normal mt-4"
                >
                    Create account
                </Button>
            </div>
            <img src={appointment} alt="appointment" className="absolute right-32 bottom-0 h-[429px]" />
        </div>
    );
}
