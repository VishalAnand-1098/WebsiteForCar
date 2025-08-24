import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import LuggageIcon from "@mui/icons-material/Luggage";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

// Images
import swift from "./assets/swift.png";
import etios from "./assets/etios.png";
import ertiga from "./assets/ertiga.png";
import innova from "./assets/innova.png";

const fleets = [
  {
    name: "Maruti Swift Dzire",
    type: "SEDAN",
    seats: 5,
    luggage: "YES",
    img: swift,
    desc: "Dezire Cab provides cost-effective taxi services that are both dependable and budget-friendly. Their pricing is designed to suit a variety of passengers, ensuring easy access to quality transportation without compromising on reliability.",
  },
  {
    name: "Toyota Etios",
    type: "SEDAN",
    seats: 5,
    luggage: "YES",
    img: etios,
    desc: "Planning a trip across India? The Toyota Etios makes a smart travel companion thanks to its dependable performance, spacious interior, and budget-friendly rates. Reserve your cab today and enjoy a smooth and stress-free journey!",
  },
  {
    name: "Maruti Ertiga",
    type: "SEDAN",
    seats: 5,
    luggage: "YES",
    img: ertiga,
    desc: "Known for its popularity among taxi operators in India, the Maruti Suzuki Ertiga stands out as a reliable choice. Ideal for long journeys, it offers spacious and comfortable seating for up to seven passengers.",
  },
  {
    name: "Toyota Innova Crysta",
    type: "SEDAN",
    seats: 5,
    luggage: "YES",
    img: innova,
    desc: "Perfect for long-distance travel, the Toyota Innova Crysta offers spacious and relaxing seating for seven passengers. Book the Innova Crysta for your next trip—it’s ideal for extended journeys and ensures a smooth ride.",
  },
];

const FleetScroller = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ py: 5, bgcolor: "#f5f5f5" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 3, fontWeight: "bold" }}
      >
        Our Fleets of{" "}
        <Box component="span" sx={{ color: "orange" }}>
          Cabs
        </Box>
      </Typography>
      <Divider sx={{ width: "200px", mx: "auto", mb: 4 }} />

      <Slider {...settings}>
        {fleets.map((car, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 350,
              mx: 1,
              borderRadius: 2,
              boxShadow: 3,
              overflow: "hidden",
            }}
          >
            <Box component="img" src={car.img} alt={car.name} sx={{ width: "100%", height: 180, objectFit: "contain" }} />
            <CardContent>
              <Typography variant="h6" align="center" sx={{ mb: 2 }}>
                {car.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  bgcolor: "#f0f0f0",
                  py: 1,
                  borderRadius: 1,
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <DirectionsCarIcon sx={{ color: "orange" }} />
                  <Typography variant="body2">{car.type}</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <AirlineSeatReclineNormalIcon sx={{ color: "orange" }} />
                  <Typography variant="body2">{car.seats}</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <LuggageIcon sx={{ color: "orange" }} />
                  <Typography variant="body2">{car.luggage}</Typography>
                </Box>
              </Box>

              <Typography
                variant="body2"
                sx={{ mt: 2, textAlign: "center" }}
              >
                {car.desc}
              </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button
                size="small"
                sx={{ bgcolor: "orange", color: "white", flex: 1 }}
                startIcon={<PhoneIcon />}
              >
                Call
              </Button>
              <Button
                size="small"
                sx={{ bgcolor: "black", color: "white", flex: 1 }}
                startIcon={<EmailIcon />}
              >
                Email
              </Button>
            </CardActions>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default FleetScroller;
