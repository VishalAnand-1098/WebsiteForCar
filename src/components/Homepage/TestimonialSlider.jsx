import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";

const reviews = [
  {
    text: "“Booked a cab for my parents, and I was impressed with the professionalism and care the driver showed. Thank you, shubhtriptravel!”",
    author: "Priya Sharma –(New Delhi)",
  },
  {
    text: "“Reliable, clean cars, and courteous drivers – shubhtriptravel has become my go-to cab service for both local and outstation rides.”",
    author: "Sameer Khan – Noida.",
  },
    {
    text: "“I’ve used many cab services, but shubhtriptravel stands out with their excellent customer service and reasonable pricing. Will surely book again!”",
    author: "Ramesh Verma – Gurugram",
  },
    {
    text: "“Loved how easy it was to book and track my cab. The journey was smooth, and I reached on time. Great job, shubhtriptravel Cab Service!”",
    author: "Meena Das – Ghaziabad",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return; // do nothing if paused
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <Box
      sx={{
        backgroundColor: "#f8f8f8",
        py: { xs: 8, sm: 12 },
        textAlign: "center",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container maxWidth="md">
        <Typography
          variant="subtitle2"
          sx={{ color: "#888", letterSpacing: 1.5, fontSize: { xs: "0.7rem", sm: "0.875rem" } }}
        >
          TESTIMONIAL
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mt: 1,
            fontFamily: "Montserrat, sans-serif",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
          }}
        >
          <Box component="span" sx={{ color: "#2F5249" }}>
            Customers
          </Box>{" "}
          Feedback
        </Typography>

        <Box sx={{ mt: { xs: 4, sm: 6 }, minHeight: 140, position: "relative" }}>
          {reviews.map((review, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                opacity: index === current ? 1 : 0,
                transform: index === current ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease-in-out",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontStyle: "italic",
                  color: "#333",
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", sm: "1.125rem" },
                }}
              >
                “{review.text}”
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  mt: 3,
                  color: "#2F5249",
                  fontWeight: "bold",
                  fontSize: { xs: "0.85rem", sm: "1rem" },
                }}
              >
                {review.author}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Slider dots */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 4, sm: 6 }, gap: 1 }}>
          {reviews.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: { xs: 8, sm: 10 },
                height: { xs: 8, sm: 10 },
                borderRadius: "50%",
                backgroundColor: idx === current ? "#2F5249" : "#ddd",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSlider;
