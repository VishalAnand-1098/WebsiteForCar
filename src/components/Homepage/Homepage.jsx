// src/components/Homepage/HomePage.jsx
import React, { useEffect } from 'react';
import Topbar from './Topbar';
import Firstslidder from './Firstslidder';
import FleetScroller from './Fleetofcabs';
import Luxury from './Luxury_Cars';
import Aboutsec from './About_sec';
import Car_Driver from './Car_Driver';
import OurServices from './Services';
import TypesOfCab from './Type_of_Cabs';
import Other_city from './Other_city';
import TestimonialSlider from './TestimonialSlider';
import FAQ from './Faqs';
import { Box } from '@mui/material';

const HomePage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Topbar />
      <Firstslidder /> 
      <Luxury />
      <FleetScroller />
      <Aboutsec />
      <Car_Driver />
      <TypesOfCab />
      <Other_city />
      <TestimonialSlider />
      <FAQ />
      {/* <OurServices /> */}
    </Box>
  );
};

export default HomePage;
