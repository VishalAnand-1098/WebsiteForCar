import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    captcha: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple captcha check
    if (formData.captcha !== "15") {
      alert("Captcha is incorrect!");
      return;
    }

    emailjs
      .send(
        "service_50drrxq", // Replace with EmailJS Service ID
        "template_13w6rgx", // Replace with EmailJS Template ID
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        "l1NW0A0xfnyguiyau" // Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
            captcha: ""
          });
        },
        (error) => {
          console.error("Email sending error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, fontFamily: "Arial, sans-serif" }}>
      <Grid container spacing={4}>
        
        {/* Left Side - Contact Details */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 3, borderTop: "4px solid #f97316" }}>
            <Typography variant="h5" sx={{ mb: 3, color: "#f97316" }}>
              Contact Details
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationOnIcon sx={{ color: "#f97316", mr: 2 }} />
              <Typography>
                G-67, Ground Floor, Near MCD Toll Pul Pahladpur, New Delhi – 110044
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <EmailIcon sx={{ color: "#f97316", mr: 2 }} />
              <Typography>Ghumighumicabservice@gmail.com</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PhoneIphoneIcon sx={{ color: "#f97316", mr: 2 }} />
              <Typography>+91 9341483339</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Right Side - Enquiry Form */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 3, borderTop: "4px solid #f97316" }}>
            <Typography variant="h5" sx={{ mb: 3, color: "#f97316" }}>
              Enquiry Now
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone No."
                    name="phone"
                    fullWidth
                    variant="outlined"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Email Address"
                    name="email"
                    fullWidth
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    name="message"
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={6} sm={4}>
                  <TextField
                    label="14 + 1 ="
                    name="captcha"
                    fullWidth
                    variant="outlined"
                    value={formData.captcha}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={6} sm={8} sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#f97316",
                      "&:hover": { backgroundColor: "#ea580c" },
                      textTransform: "none",
                      px: 3
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
