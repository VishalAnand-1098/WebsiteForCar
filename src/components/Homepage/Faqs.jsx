import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqImage from '../../assets/FAQs.webp'; // your uploaded image

const faqData = [
  {
    question: "What is shubhtriptravel Cab Service?",
    answer: "shubhtriptravel Cab Service is a reliable and affordable taxi service that offers safe and comfortable rides for local, outstation, and airport travel."
  },
  {
    question: "How do I book a cab with shubhtriptravel?",
    answer: "You can book a cab using our website or mobile app by selecting your pickup location, destination, and preferred cab type."
  },
  {
    question: "Do I get to choose the type of car?",
    answer: "Yes, you can select from a variety of car types depending on your comfort and budget."
  },
  {
    question: "Are your drivers professional and experienced?",
    answer: "All our drivers are trained, licensed, and experienced to ensure safe and comfortable rides."
  },
  {
    question: "Is the fare fixed or metered?",
    answer: "We offer both fixed and metered fares depending on the ride type and location."
  }
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ padding: "50px" }}>
      {/* Headline */}
      <Typography 
        sx={{ 
          fontSize: "32px", 
          fontWeight: 700, 
          marginBottom: "40px", 
          textAlign: "center" 
        }}
      >
        <span style={{ color: "#2F5249" }}>Frequently </span>Asked Questions
      </Typography>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "50px",
          flexWrap: "wrap"
        }}
      >
        {/* Image Section */}
        <Box sx={{ flex: "1 1 400px" }}>
          <img 
            src={faqImage} 
            alt="FAQ Visual" 
            style={{ width: "100%", borderRadius: "15px" }} 
          />
        </Box>

        {/* FAQ Section */}
        <Box sx={{ flex: "1 1 400px" }}>
          {faqData.map((item, index) => (
            <Accordion 
              key={index} 
              expanded={expanded === index} 
              onChange={handleChange(index)}
              sx={{
                boxShadow: "none",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                marginBottom: "10px",
                "&:before": { display: "none" }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ 
                  backgroundColor: "#f9f9f9",
                  padding: "0 15px",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#2F5249" // dark background on hover
                  },
                  "&:hover .MuiTypography-root": {
                    color: "#fff" // white text on hover
                  }
                }}
              >
                <Typography 
                  sx={{ 
                    fontWeight: 600,
                    color: "#2F5249", // default black
                    transition: "color 0.3s ease"
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "10px 15px" }}>
                <Typography sx={{ color: "#555" }}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
