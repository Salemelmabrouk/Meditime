import React, { useState } from "react";
import myProfile from '@/../../assets/img/profile_pic.png';
import uploadArea from '@/../../assets/img/upload_area.png';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    email: "ahmedbensalah@gmail.com",
    phone: "+216 565 416 14",
    address: "Habib Bourguiba Avenue, Commercial Center, Tunis, 1001",
    gender: "Male",
    birthday: "20 July, 1996"
  });

  const handleEditClick = () => setIsEditing(!isEditing);
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex justify-start">
      <div className="w-full max-w-4xl bg-white rounded-lg mt-2 p-8 ml-10 font-outfit">
        <div className="flex flex-col ">
          <div className="flex flex-rows gap-3"> 
            <div className="rounded-[8px]">
              <img src={myProfile} alt="Doctor" className="rounded-[8px] h-[160px] w-[160px]" />
            </div>
            <div className="bg-gray-300 rounded-[8px]">
              <img src={uploadArea} alt="uploadArea" className="rounded-[8px] h-[160px] w-[160px]" />
            </div>
          </div>
          <h1 className="text-[30px] text-gray-800 mt-4 font-outfit">Ahmed Ben Salah</h1>
          <hr className="w-full max-w-xl border-t border-[#ADADAD]" />
        </div>

        <div className="mt-10">
          <h2 className="text-lg text-[#797979] mb-2 underline">CONTACT INFORMATION</h2>
          <p className="text-[#4B5563] mt-4">
            <span className="text-[#4B5563]">Email id:</span>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="ml-4 p-1 border border-gray-300 rounded"
              />
            ) : (
              <a href={`mailto:${formData.email}`} className="text-blue-500 ml-10">{formData.email}</a>
            )}
          </p>
          <p className="text-[#4B5563] mt-4">
            <span className="text-[#4B5563]">Phone:</span>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="ml-4 p-1 border border-gray-300 rounded"
              />
            ) : (
              <a href={`tel:${formData.phone}`} className="text-blue-500 ml-10">{formData.phone}</a>
            )}
          </p>
          <p className="text-[#4B5563] mt-4">
            <span className="text-[#4B5563]">Address:</span>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="ml-4 p-1 border border-gray-300 rounded w-full"
              />
            ) : (
              <span className="ml-9">{formData.address}</span>
            )}
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-lg text-[#797979] mb-2 underline">BASIC INFORMATION</h2>
          
          <p className="text-[#4B5563] mt-4">
          <span className="text-[#4B5563]">Gender:</span> 
          <span className="ml-9">Male </span>
          </p>
          
          <p className="text-[#4B5563] mt-4">
          <span className="text-[#4B5563]">Birthday:</span> 
          <span className="ml-9">20 July, 1996</span>
          </p>

        </div>

        <div className="flex mt-6 space-x-4 mb-16">
          <button className="px-8 py-2 text-gray-800 rounded-[47px] border border-[#5F6FFF] hover:bg-gray-300" onClick={handleEditClick}>Edit</button>
          <button className="px-8 py-2 text-gray-800 rounded-[47px] border border-[#5F6FFF] hover:bg-gray-300" onClick={handleInputChange}>Save information</button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
