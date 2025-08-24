import React from "react";
import weddingCar1 from "../../assets/verna.webp";
import weddingCar2 from "../../assets/Audi.webp";
import weddingCar3 from "../../assets/BMW.webp";
import weddingCar4 from "../../assets/q5.webp";
import weddingCar5 from "../../assets/Audi.webp";   // add more images
import weddingCar6 from "../../assets/BMW.webp";
import weddingCar7 from "../../assets/q5.webp";
import weddingCar8 from "../../assets/verna.webp";

import { Box, Typography, Button, Card, CardMedia } from "@mui/material";

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
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Heading */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Luxury Cars for{" "}
        <span style={{ color: "orange" }}>Wedding Doli</span>
      </Typography>

      {/* Cars Grid */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {cars.map((car, index) => (
          <Card
            key={index}
            sx={{
              width: 260,
              height: 320,
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: 3,
              position: "relative",
              cursor: "pointer",
              "&:hover .overlay": { opacity: 1 },
              "&:hover .book-btn": {
                opacity: 1,
                transform: "translate(-50%, -50%) scale(1)",
              },
            }}
          >
            {/* Car Image */}
            <CardMedia
              component="img"
              image={car.img}
              alt={`Wedding Car ${index + 1}`}
              sx={{ height: "100%", objectFit: "cover" }}
            />

            {/* Dark Overlay */}
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

            {/* Book Now Button */}
            <Button
              className="book-btn"
              variant="outlined"
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
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                  borderColor: "black",
                },
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
