import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="relative p-4 bg-white w-[220px] h-[340px] rounded-[19px] gap-[12px] border border-[#EAEFFF]">
      <div
        className="absolute w-[220px] h-[220px] rounded-t-[12px] opacity-100"
        style={{ top: '0px', left: '0px', opacity: '1' }}
      >
        <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover rounded-t-[12px] bg-[#EAEFFF]" />
      </div>
      <div className="mt-[200px] p-2">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
          <p className={`mt-2 ${doctor.availability === "Available" ? "text-green-500" : "text-red-500"}`}>
            {doctor.availability}
          </p>
        </div>
        <Link to={`/appointment-with/${encodeURIComponent(doctor.name)}`} className="text-lg font-outfit font-normal text-[#1F2937]">
          {doctor.name}
        </Link>
        <p className="text-[#4B5563] text-[15px] font-outfit">{doctor.specialization}</p>
      </div>
    </div>
  );
};

export default DoctorCard;

