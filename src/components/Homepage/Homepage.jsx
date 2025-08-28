// src/components/Homepage/HomePage.jsx
import React from 'react';
import Topbar from './Topbar';
import Firstslidder from './Firstslidder';
import FleetScroller from './Fleetofcabs';
import Luxury from './Luxury_Cars';
import Aboutsec from './About_sec';
import Car_Driver from './Car_Driver';
import OurServices from './Services';
import TypesOfCab from './Type_of_Cabs';
import Other_city from './Other_city';
import { Box, Typography } from '@mui/material';

const HomePage = () => {
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
            
            {/* <OurServices /> */}
        </Box>
    );
};

export default HomePage;
