import React from 'react';
import aboutImage from '@/../../assets/img/about_image.png';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 py-12 px-0 -ml-16 md:px-20 lg:px-32 w-full">
      {/* About Us Section */}
      <section className="mb-20 w-full">
        <h2 className="text-2xl mb-12 font-outfit text-[#565656] text-center">
          ABOUT <span className="text-[#171717] font-semibold font-outfit">US</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-10 w-full">
          <img src={aboutImage} alt="Doctors" className="w-full md:w-1/3 mb-6 md:mb-0 ml-0" />
          <div className="text-left space-y-4 md:w-2/3 font-outfit">
            <p>Welcome to MediTime, your trusted partner in managing your healthcare needs conveniently and efficiently. At MediTime, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
            <p>MediTime is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, MediTime is here to support you every step of the way.</p>
            <h3 className="text-2xl font-semibold font-outfit">Our Vision</h3>
            <p>Our vision at MediTime is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full -mx-4 mb-96">
  <h2 className="text-2xl font-outfit text-left mb-12 text-[#565656]">
    WHY <span className="text-[#171717] font-semibold font-outfit">CHOOSE US</span>
  </h2>
  <div className="mx-auto mb-16">
    <div className="grid md:grid-cols-3 gap-8 border font-outfit w-full mx-0">
      <div className="py-12 px-20 border shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-[#1F2937]">EFFICIENCY:</h3>
        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
      </div>
      <div className="py-12 px-20 border-l-1 shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-[#1F2937]">CONVENIENCE:</h3>
        <p>Access to a network of trusted healthcare professionals in your area.</p>
      </div>
      <div className="py-12 px-20 border shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-[#1F2937]">PERSONALIZATION:</h3>
        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
      </div>
    </div>
  </div>
</section>

 
    </div>
  );
};

export default AboutUs;

