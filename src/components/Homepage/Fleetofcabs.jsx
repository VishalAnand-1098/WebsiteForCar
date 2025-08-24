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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import LuggageIcon from "@mui/icons-material/Luggage";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

// Fleet Data
const fleets = [
  {
    name: "Maruti Swift Dzire",
    type: "SEDAN",
    seats: 5,
    luggage: "YES",
    desc: "Dezire Cab provides cost-effective taxi services that are both dependable and budget-friendly.",
    img: "https://imgd.aeplcdn.com/1056x594/cw/ec/40089/Maruti-Swift-Dzire-Exterior-169992.jpg",
  },
  {
    name: "Toyota Etios",
    type: "SEDAN",
    seats: 5,
    luggage: "YES",
    desc: "Planning a trip across India? The Toyota Etios makes a smart travel companion thanks to its dependable performance, spacious interior, and budget-friendly rates.",
    img: "https://imgd.aeplcdn.com/1056x594/cw/ec/25410/Toyota-Etios-Exterior-169996.jpg",
  },
  {
    name: "Maruti Ertiga",
    type: "MUV",
    seats: 7,
    luggage: "YES",
    desc: "Known for its popularity among taxi operators in India, the Maruti Suzuki Ertiga stands out as a reliable choice.",
    img: "https://imgd.aeplcdn.com/1056x594/cw/ec/40095/Maruti-Ertiga-Exterior-169991.jpg",
  },
  {
    name: "Toyota Innova Crysta",
    type: "SUV",
    seats: 7,
    luggage: "YES",
    desc: "Perfect for long-distance travel, the Toyota Innova Crysta offers spacious and relaxing seating for seven passengers.",
    img: "https://imgd.aeplcdn.com/1056x594/cw/ec/35295/Toyota-Innova-Crysta-Exterior-169997.jpg",
  },
  {
    name: "Hyundai Xcent",
    type: "SEDAN",
    seats: 5,
    luggage: "YES",
    desc: "A compact sedan ideal for city rides, offering comfort and efficiency at affordable rates.",
    img: "https://imgd.aeplcdn.com/1056x594/cw/ec/23516/Hyundai-Xcent-Exterior-169993.jpg",
  },
];

const FleetScroller = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900px

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isXs ? 1 : isSm ? 2 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: isXs, // only enable centerMode on mobile
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, centerMode: false },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2, centerMode: false },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "0px" },
      },
    ],
  };

  return (
    <Box sx={{ py: 6, bgcolor: "#f9f9f9", overflow: "hidden" }}>
      <Typography
        variant={isXs ? "h5" : "h4"}
        align="center"
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: "#222",
          px: 2,
        }}
      >
        Our Fleets of{" "}
        <Box component="span" sx={{ color: "orange" }}>
          Cabs
        </Box>
      </Typography>
      <Divider
        sx={{
          width: 200,
          mx: "auto",
          mb: 5,
          borderBottomWidth: 3,
          borderColor: "orange",
        }}
      />

      <Slider {...settings} style={{ overflow: "visible" }}>
        {fleets.map((car, index) => (
          <Box
            key={index}
            sx={{
              px: 0, // no horizontal padding on mobile to avoid side gaps
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: isXs ? "100%" : "auto",
              margin: isXs ? "0 auto" : undefined,
            }}
          >
            <Card
              sx={{
                width: isXs ? 280 : isSm ? 260 : 300,
                height: isXs ? "auto" : 480,
                borderRadius: 3,
                boxShadow: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8,
                },
                margin: "0 auto", // center card itself
              }}
            >
              <Box
                component="img"
                src={car.img}
                alt={car.name}
                sx={{
                  width: "100%",
                  height: isXs ? 140 : 180,
                  objectFit: "cover",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  px: 2,
                  pt: 2,
                  pb: 1,
                }}
              >
                <Typography
                  variant={isXs ? "subtitle1" : "h6"}
                  align="center"
                  sx={{ mb: 1, fontWeight: 600 }}
                >
                  {car.name}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    bgcolor: "#f5f5f5",
                    py: 1,
                    borderRadius: 2,
                    mb: 1,
                  }}
                >
                  <Box sx={{ textAlign: "center", minWidth: 60 }}>
                    <DirectionsCarIcon sx={{ color: "orange", mb: 0.5 }} />
                    <Typography variant="caption">{car.type}</Typography>
                  </Box>
                  <Box sx={{ textAlign: "center", minWidth: 60 }}>
                    <AirlineSeatReclineNormalIcon
                      sx={{ color: "orange", mb: 0.5 }}
                    />
                    <Typography variant="caption">{car.seats} Seats</Typography>
                  </Box>
                  <Box sx={{ textAlign: "center", minWidth: 60 }}>
                    <LuggageIcon sx={{ color: "orange", mb: 0.5 }} />
                    <Typography variant="caption">{car.luggage}</Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    flexGrow: 1,
                    textAlign: "center",
                    color: "text.secondary",
                    fontSize: isXs ? "0.85rem" : "0.9rem",
                  }}
                >
                  {car.desc}
                </Typography>
              </CardContent>

              <CardActions sx={{ gap: 1, p: 1.5 }}>
                <Button
                  fullWidth
                  size="small"
                  sx={{
                    bgcolor: "orange",
                    color: "white",
                    "&:hover": { bgcolor: "#e69500" },
                    fontSize: isXs ? "0.75rem" : "0.875rem",
                  }}
                  startIcon={<PhoneIcon />}
                >
                  Call
                </Button>
                <Button
                  fullWidth
                  size="small"
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    "&:hover": { bgcolor: "#333" },
                    fontSize: isXs ? "0.75rem" : "0.875rem",
                  }}
                  startIcon={<EmailIcon />}
                >
                  Email
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default FleetScroller;
