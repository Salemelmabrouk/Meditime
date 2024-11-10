import React from 'react';
import contactUsImage from '@/../../assets/img/contact_image.png';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center lg:p-12">
      <header className="text-center mb-8">
        <h1 className="text-3xl text-[#4B5563]">
          CONTACT <span className="text-[#171717] font-semibold">US</span>
        </h1>
      </header>
      <div className="max-w-5xl flex flex-col md:flex-row items-start bg-white p-8 rounded-lg ">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:ml-0 md:mr-8">
          <img
            src={contactUsImage}
            alt="Doctor with child patient"
            className="rounded-[56px]"
          />
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/2 text-center md:text-left font-outfit">
          <div className="mb-6 ml-4">
            <h2 className="text-lg font-bold mb-1 mt-10  text-[#4B5563]">OUR OFFICE</h2>
            <p className="text-gray-600 w-60 mt-6">
              54709 Habib Bourguiba Street, Suite 3, Tunis, Tunisia
            </p>
            <p className="text-[#4B5563] mt-6">Tel: (216) 55 555 555</p>
            <p className="text-[#4B5563]">Email: Pingocoder@gmail.com</p>
          </div>
          <div className='ml-4'>
            <h2 className="text-lg font-bold mb-1 text-[#4B5563] mt-6">CAREERS AT MEDITIME</h2>
            <p className="text-gray-600 mb-6 mt-6">
              Learn more about our teams and job openings.
            </p>
            <button className="px-4 py-2 mt-8 border  border-[#4B5563] text-[#4B5563] hover:bg-[#4B5563] hover:text-white transition">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
