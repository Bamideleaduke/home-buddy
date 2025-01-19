import React, { useState } from "react";
import BackgroundTemplate from "../shared/Temp/BackgroundTemplate";
import ContentNavigationButton from "../shared/Temp/ContentNavigationButton";
import PropertyDescription from "./PropertyDescription";
import PropertyReview from "./PropertyReview";

const DescriptionAndReview = () => {
  const nav = ["Description", "Review"];
  const [activeTab, setActiveTab] = useState("Description");
  return (
    <BackgroundTemplate backgroundColor="#fff">
      <ContentNavigationButton
        navData={nav}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "Description" && <PropertyDescription />}
      {activeTab === "Review" && <PropertyReview />}
    </BackgroundTemplate>
  );
};

export default DescriptionAndReview;
