import React from "react";
import MeetTheTeam from "./thirdSectionComp/MeetTheTeam";
import ClientFeedback from "./thirdSectionComp/ClientFeedback";
import FormSection from "./thirdSectionComp/FormSection";
import Footer from "./Footer";

const ThirdSection = () => {
  return (
    <div className="thirdSection-bg relative overflow-hidden">
      <MeetTheTeam />
      <ClientFeedback />
      <FormSection />
      <Footer />
    </div>
  );
};

export default ThirdSection;
