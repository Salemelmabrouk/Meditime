import CallToActionBanner from "../components/CallToActionBanner/CallToActionBanner";
import DoctorsSection from "../components/DoctorsSection/DoctorsSection";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import SpecialitySection from "../components/SpecialitySection/SpecialitySection";

export default function Home( ) {
    return (
       
            <>
             <HeaderSection />   
        <SpecialitySection /> 
        <DoctorsSection /> 
        <CallToActionBanner /> 
            </>
    );
}
