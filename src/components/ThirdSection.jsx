import React from "react";
import MeetTheTeam from "./thirdSectionComp/MeetTheTeam";
import ClientFeedback from "./thirdSectionComp/ClientFeedback";
import FormSection from "./thirdSectionComp/FormSection";

const ThirdSection = () => {
  return (
    <div className="thirdSection-bg relative overflow-hidden pb-32">
      <MeetTheTeam />
      <ClientFeedback />
      <FormSection />
    </div>
  );
};

export default ThirdSection;
