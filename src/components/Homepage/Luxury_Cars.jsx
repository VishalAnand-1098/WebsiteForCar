import React from "react";
import { Box, Typography, Button, Card, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

import weddingCar1 from "../../assets/verna.webp";
import weddingCar2 from "../../assets/Audi.webp";
import weddingCar3 from "../../assets/BMW.webp";
import weddingCar4 from "../../assets/q5.webp";
import weddingCar5 from "../../assets/Audi.webp";
import weddingCar6 from "../../assets/BMW.webp";
import weddingCar7 from "../../assets/q5.webp";
import weddingCar8 from "../../assets/verna.webp";

const cars = [
  { img: weddingCar1 },
  { img: weddingCar2 },
  { img: weddingCar3 },
  { img: weddingCar4 },
  { img: weddingCar5 },
  { img: weddingCar6 },
  { img: weddingCar7 },
  { img: weddingCar8 },
];

const WeddingCars = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/contact"); // Navigate to ContactUs page
  };

  return (
    <Box sx={{ textAlign: "center", py: 5, backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Luxury Cars for <span style={{ color: "#2F5249" }}>Wedding Doli</span>
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
          gap: 3,
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {cars.map((car, index) => (
          <Card
            key={index}
            sx={{
              height: 320,
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: 3,
              position: "relative",
              cursor: "pointer",
              "&:hover .overlay": { opacity: 1 },
              "&:hover .book-btn": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
            }}
          >
            <CardMedia
              component="img"
              image={car.img}
              alt={`Wedding Car ${index + 1}`}
              sx={{ height: "100%", objectFit: "cover" }}
            />

            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.4)",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            />

            <Button
              className="book-btn"
              variant="outlined"
              onClick={handleBookNow} // Navigate on click
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(0.9)",
                opacity: 0,
                transition: "all 0.3s ease-in-out",
                borderRadius: "20px",
                px: 3,
                py: 0.7,
                fontWeight: "bold",
                borderWidth: 2,
                borderColor: "black",
                color: "black",
                backgroundColor: "#437057",
                "&:hover": { backgroundColor: "#2F5249", color: "white", borderColor: "black" },
              }}
            >
              Book Now
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default WeddingCars;
