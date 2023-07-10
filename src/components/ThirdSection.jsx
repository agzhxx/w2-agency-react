import React from "react";
import MeetTheTeam from "./thirdSectionComp/MeetTheTeam";
import ClientFeedback from "./thirdSectionComp/ClientFeedback";

const ThirdSection = () => {
  return (
    <div className="thirdSection-bg relative overflow-hidden pb-32">
      <MeetTheTeam />
      <ClientFeedback />
    </div>
  );
};

export default ThirdSection;
