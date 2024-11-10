import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../Button/Button';
import appointment from '@/../../assets/img/appointment_img.png';
import TextBox from '../TextBox/TextBox';

export default function CallToActionBanner() {
    const handleClick = () => {
        alert('Button clicked!');
    };

    // Create a ref for the section to observe
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true }); // `once: true` triggers animation only the first time

    return (
        <div
            ref={sectionRef}
            className="flex bg-[#5F6FFF] text-white px-10 rounded-lg relative max-w-[90%] h-[385px] ml-16"
        >
            <div className="w-1/2 mt-20">
                <TextBox 
                    title={
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
                            transition={{ duration: 1 }}
                            className="font-semibold"
                        >
                            Book Appointment
                        </motion.div>
                    } 
                    subtitle={
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
                            transition={{ duration: 1, delay: 0.2 }}
                            className="font-semibold"
                        >
                            With 100+ Trusted Doctors
                        </motion.div>
                    }
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
