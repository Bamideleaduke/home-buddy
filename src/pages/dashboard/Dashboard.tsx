import React from "react";
import FeaturedProperty from "@/components/FeaturedProperty";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import PopularProject from "@/components/PopularProject";
import Sponsors from "@/components/Sponsors";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <Offers />
      <FeaturedProperty />
      <Testimonial />
      <PopularProject />
    </>
  );
};

export default Dashboard;
