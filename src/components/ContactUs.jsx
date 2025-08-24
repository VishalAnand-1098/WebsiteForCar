
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
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import About from "../assets/About.webp"
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    captcha: ""
  });
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // Generate new numbers on every reload
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1; // 1–10
    const b = Math.floor(Math.random() * 10) + 1;
    setNum1(a);
    setNum2(b);
  };
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
    <>
      {/* <div className="flex items-center justify-center h-screen bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">Hello Tailwind!</h1>
    </div> */}
      <div
        style={{
          width: "100%",
          height: "350px",
          marginBottom: "40px",
          backgroundImage: `url(${About})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            fontWeight: "500",
            marginLeft: "40px",
            fontFamily: "Jost",
          }}
        >
          Contact Us
        </h1>
      </div>
      <div className="w-full bg-white py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Side - Contact Details */}
          <div>
            <div className="flex items-center">
              {/* Left vertical line */}
              <div className="w-1 bg-orange-500 h-10 mr-1"></div>

              {/* Header bar */}
              <div className="bg-orange-500 w-full text-white text-4xl px-6 rounded-r-full" style={{ fontFamily: "Jost", fontWeight: "500" }}>
                Contact Details
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-orange-500 text-3xl" />
                <div>
                  <p className="font-semibold text-xl text-gray-800" style={{ fontFamily: "Jost", fontWeight: "500" }}>Address :</p>
                  <p className="text-gray-600 text-lg" style={{ fontFamily: "Jost", fontWeight: "500" }}>
                    G-67, Ground Floor, Near MCD Toll Pul Pahladpur, <br />
                    New Delhi – 110044
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-orange-500 text-3xl" />
                <div>
                  <p className="font-semibold text-xl text-gray-800" style={{ fontFamily: "Jost", fontWeight: "500" }}>Mail Id :</p>
                  <p className="text-gray-600 text-lg" style={{ fontFamily: "Jost", fontWeight: "500" }}>Ghumighumicabservice@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <FaPhone className="text-orange-500 text-3xl" />
                <div>
                  <p className="font-semibold text-xl text-gray-800" style={{ fontFamily: "Jost", fontWeight: "500" }}>Phone No :</p>
                  <p className="text-gray-600 text-lg" style={{ fontFamily: "Jost", fontWeight: "500" }}>+91 9341483339</p>
                </div>
              </div>

              {/* WhatsApp Icons */}

            </div>
          </div>

          {/* Right Side - Enquiry Form */}
          <div>
            <div className="flex items-center">
              {/* Left vertical line */}
              <div className="w-1 bg-orange-500 h-10 mr-1"></div>

              {/* Header bar */}
              <div className="bg-orange-500 w-full text-white text-4xl px-6 rounded-r-full" style={{ fontFamily: "Jost", fontWeight: "500" }}>
                Enquiry Now
              </div>
            </div>

            <form className="mt-6 space-y-4">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-md bg-gray-200 border-b-2 border-orange-400 placeholder-black focus:outline-none focus:border-orange-500"
                  style={{ fontFamily: "Jost", fontWeight: "500" }}
                />
                <input
                  type="text"
                  placeholder="Phone No."
                  className="w-full px-4 py-2 rounded-md bg-gray-200 border-b-2 border-orange-400 placeholder-black focus:outline-none focus:border-orange-500" style={{ fontFamily: "Jost", fontWeight: "500" }}
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-md bg-gray-200 border-b-2 border-orange-400 placeholder-black focus:outline-none focus:border-orange-500" style={{ fontFamily: "Jost", fontWeight: "500" }}
              />

              {/* Message */}
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-gray-200 border-b-2 border-orange-400 placeholder-black focus:outline-none focus:border-orange-500" style={{ fontFamily: "Jost", fontWeight: "500" }}
              ></textarea>

              {/* Captcha + Button */}
              <div className="flex items-center justify-end">
              <div className="flex items-center gap-2 mr-3">
      <span
        className="text-xl"
        style={{ fontFamily: "Jost", fontWeight: "500" }}
      >
        {num1} + {num2} =
      </span>
      <input
        type="text"
        placeholder=""
        className="w-16 px-2 py-2 rounded-md bg-gray-200 border-b-2 border-orange-400 placeholder-black focus:outline-none focus:border-orange-500"
      />
    </div>
                <button
                  type="submit"
                  className="bg-black text-orange-500 font-semibold px-6 py-2 rounded-md border-2 text-xl border-orange-500 hover:bg-orange-500 hover:text-white transition"
                 style={{ fontFamily: "Jost", fontWeight: "500" }}>
                  Submit
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
      <div className="border-2 mx-auto mb-10 border-orange-500" style={{ position: "relative", width: "90%", height: "70vh" }}>
        {/* Transparent overlay that opens Simplifying Skills location on click */}
        <a
          href="https://maps.app.goo.gl/coCL1BUCjUv2Vzr38"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
            display: "block",
          }}
        ></a>

        {/* Embedded Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197690.96067322753!2d77.05746818461019!3d28.52594149329837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1755523899637!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* <Box sx={{ p: { xs: 2, md: 6 }, fontFamily: "Arial, sans-serif" }}>
        <Grid container spacing={4}>

        
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
                      required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone No."
                      name="phone"
                      fullWidth
                      variant="outlined"
                      value={formData.phone}
                      onChange={handleChange}
                      required />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Email Address"
                      name="email"
                      fullWidth
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      required />
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
                      onChange={handleChange} />
                  </Grid>

                  <Grid item xs={6} sm={4}>
                    <TextField
                      label="14 + 1 ="
                      name="captcha"
                      fullWidth
                      variant="outlined"
                      value={formData.captcha}
                      onChange={handleChange}
                      required />
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
      </Box> */}
    </>
  );
};

export default ContactUs;
