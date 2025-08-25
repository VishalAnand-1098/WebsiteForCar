import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DriverImage from '../../assets/DP.webp';

const GhumiGhumi = () => {
    const navigate = useNavigate();

    const handleBookNowClick = () => {
        navigate('/contact-us');
    };

    return (
        <Box
            sx={{
                backgroundColor: '#f3f3f3',
                py: { xs: 4, md: 8 },
                position: 'relative',
                minHeight: '100vh',
            }}
        >
            {/* Headline */}
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, px: { xs: 1, md: 2 } }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '22px', sm: '26px', md: '32px' },
                        fontFamily: `'Segoe UI', sans-serif`,
                        lineHeight: 1.3,
                    }}
                >
                    <Box component="span" sx={{ color: '#FF7A00' }}>
                        Professional Car Driver{' '}
                    </Box>
                    <Box component="span" sx={{ color: '#000' }}>
                        Services at Your Doorstep
                    </Box>
                </Typography>
            </Box>

            {/* Main Content */}
            <Grid
                container
                spacing={4}
                alignItems="center"
                justifyContent="center"
                sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 2, md: 4 } }}
            >
                <Grid item xs={12} md={6}>
                    <Box sx={{ maxWidth: { xs: '100%', sm: '480px', md: '500px' }, width: '100%' }}>
                        <Typography sx={{ fontSize: 16, color: '#000', mb: 2, lineHeight: 1.8 }}>
                            At Shubh Trip Travels Cab Service, we believe that every journey deserves to be comfortable and enjoyable.
                            That’s why we proudly offer convenient doorstep taxi services across Delhi NCR, ensuring you never have
                            to wait or walk for a ride. Whether you’re heading to an important business meeting, catching a flight,
                            or embarking on a weekend escape, our dependable fleet—featuring a range of economy cars, SUVs, and
                            luxury vehicles—is always ready to serve you.
                        </Typography>
                        <Typography sx={{ fontSize: 16, color: '#000', mb: 2, lineHeight: 1.8 }}>
                            With us, you can expect more than just transportation. Enjoy transparent pricing, professionally trained
                            drivers, and a swift, hassle-free booking process, all tailored to enhance your travel experience.
                        </Typography>

                        <Typography sx={{ fontWeight: 600, mb: 1 }}>Why Choose Shubh Trip Travels?</Typography>

                        <Typography
                            component="ul"
                            sx={{
                                fontSize: 16,
                                color: '#000',
                                mb: 3,
                                pl: 3,
                                lineHeight: 1.8,
                                listStyleType: 'disc',
                            }}
                        >
                            <li>Guaranteed On-Time Pickup and Drop-off</li>
                            <li>Skilled Drivers and Immaculate Vehicles</li>
                            <li>Absolutely No Hidden Charges</li>
                            <li>Quick and Easy Booking, Anytime You Need</li>
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src={DriverImage}
                        alt="Professional driver"
                        sx={{
                            width: '100%',
                            maxWidth: 600,
                            maxHeight: { xs: 300, sm: 400, md: 500 },
                            height: 'auto',
                            objectFit: 'cover',
                            borderRadius: 2.5,
                            boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
                            mx: 'auto',
                            display: 'block',
                        }}
                    />
                </Grid>
            </Grid>

            {/* Call To Action Button */}
            <Box textAlign="center" mt={4} px={{ xs: 2, sm: 4, md: 0 }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#FF7A00',
                        padding: '8px 16px',
                        fontSize: '14px',
                        borderRadius: '28px',
                        textTransform: 'none',
                        width: { xs: '100%', sm: '400px', md: '600px' },
                        maxWidth: '100%',
                        boxShadow: '0px 3px 12px rgba(255, 122, 0, 0.4)',
                        '&:hover': {
                            backgroundColor: '#e66a00',
                            boxShadow: '0px 5px 15px rgba(230, 106, 0, 0.5)',
                        },
                    }}
                    onClick={handleBookNowClick}
                >
                    Book Your Ride Now
                </Button>
            </Box>
        </Box>
    );
};

export default GhumiGhumi;
