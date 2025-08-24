// src/components/Homepage/HomePage.jsx
import React from 'react';
import Navbar from '../Navbar';
import Topbar from './Topbar';
import Firstslidder from './Firstslidder';
import OurServices from './Services';
import { Box, Typography } from '@mui/material';

const HomePage = () => {
    return (
        <Box>
             <Topbar />
            <Firstslidder /> 
            {/* <OurServices /> */}
        </Box>
    );
};

export default HomePage;
