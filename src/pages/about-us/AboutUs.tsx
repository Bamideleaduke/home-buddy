import AboutHero from "@/components/About/AboutHero";
import Mission from "@/components/About/Mission";
import Team from "@/components/About/Team";
import WhatWeDo from "@/components/About/WhatWeDo";
import { Box } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <Box>
      <AboutHero />
      <WhatWeDo />
      <Mission />
      <Team />
    </Box>
  );
};

export default AboutUs;
