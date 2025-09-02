import React from "react";
import {
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter"; // use for X
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import logo from "../assets/Ghumi.png"; // <-- replace with your logo

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #002a45, #001a2b)",
        color: "white",
        pt: 4,
        pb: 0,
      }}
    >
      <Container>
        {/* Top Row */}
        <Grid container spacing={2} alignItems="center" sx={{ pb: 3 }}>
          <Grid item xs={12} md={3}>
            <Box
              component="img"
              src={logo}
              alt="Shubh Trip Travels Cab Service"
              sx={{ width: 200, height: "auto", borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="flex-start">
              <PlaceOutlinedIcon sx={{ minWidth: "28px" }} />
              <Typography variant="body1" sx={{ maxWidth: "300px" }}>
                <b>Address :</b> <br />
                G-67, Ground Floor, Near MCD Toll Pul Pahladpur, New Delhi –
                110044
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="flex-start">
              <MailOutlineIcon sx={{ minWidth: "28px" }} />
              <Typography variant="body1" sx={{ maxWidth: "300px" }}>
                <b>Mail Id :</b> <br />
                <Link
                  href="mailto:shubhtriptravel@gmail.com"
                  color="inherit"
                  underline="hover"
                >
                  shubhtriptravel@gmail.com
                </Link>
                <br /> Send your Query Anytime!
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="flex-start">
              <PhoneAndroidOutlinedIcon sx={{ minWidth: "28px" }} />
              <Typography variant="body1" sx={{ maxWidth: "300px" }}>
                <b>Phone No :</b> <br />
                <Link
                  href="tel:+917303538650"
                  color="inherit"
                  underline="hover"
                >
                  +91 73035 38650
                </Link>
                <br />
                Mon to Sat 9 AM to 6 PM
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Divider Line with Gap */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            my: 4,
          }}
        />

        {/* Bottom Row */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          // columnSpacing={8}
          // rowSpacing={6}
        >
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{ lineHeight: 1.8, maxWidth: "300px" }}
            >
              At Shubh Trip Travels, we offer affordable outstation and local taxi
              services in Delhi and nearby cities. Whether you’re planning a
              trip to Jaipur, Uttarakhand, Himachal Pradesh, or any other
              destination.
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
             <Box>
      <Link
        component={RouterLink}
        to="/"
        color="inherit"
        display="block"
        underline="hover"
      >
        ▶ Home
      </Link>
      <Link
        component={RouterLink}
        to="/aboutus"
        color="inherit"
        display="block"
        underline="hover"
      >
        ▶ About Us
      </Link>
      <Link
        component={RouterLink}
        to="/contact"
        color="inherit"
        display="block"
        underline="hover"
      >
        ▶ Contact Us
      </Link>
      {/* <Link
        component={RouterLink}
        to="/privacy-policy"
        color="inherit"
        display="block"
        underline="hover"
      >
        ▶ Privacy Policy
      </Link> */}
    </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Indian Tourist Places
            </Typography>
            <Box>
              <Link href="#" color="inherit" display="block" underline="hover">
                ▶ Delhi to Agra Taxi Service
              </Link>
              <Link href="#" color="inherit" display="block" underline="hover">
                ▶ Delhi to Mathura Taxi Service
              </Link>
              <Link href="#" color="inherit" display="block" underline="hover">
                ▶ Delhi to Vrindavan Taxi Service
              </Link>
              <Link href="#" color="inherit" display="block" underline="hover">
                ▶ Delhi to Bareilly Taxi Service
              </Link>
              <Link href="#" color="inherit" display="block" underline="hover">
                ▶ Delhi to Jaipur Taxi Service
              </Link>
              <Link href="#" color="inherit" display="block" underline="hover">
                ▶ Delhi to Dehradun Taxi Service
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Our Location
            </Typography>
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.90470579998!2d77.2852366!3d28.4825301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7433a5e4b69%3A0x9d42d9ff8e9f4a93!2sMCD%20Toll%20tax%20booth%2C%20Pahladpur%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1692789039409!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
            />
          </Grid>
        </Grid>
      </Container>

      {/* Divider before copyright */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          mt: 4,
          pt: 2,
          pb: 2,
        }}
      >
        <Container>
          <Grid container alignItems="center" justifyContent="space-between">
            {/* Left Side */}
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ color: "white" }}>
                Copyright © 2025{" "}
                <b>Softcareweb / Million$Growth</b> All Rights Reserved 
              </Typography>
            </Grid>

            {/* Right Side - Social Icons */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                gap: 1.5,
                mt: { xs: 2, md: 0 },
              }}
            >
              <IconButton
                href=" https://www.facebook.com/share/14DmCBSZ6UY/"
                sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href=" https://www.instagram.com/p/DMuUibqJYQT/?igsh=MWI1bnE5ODZpeW03Zg=="
                sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="#"
                sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="#"
                sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://www.youtube.com/@ShubhTriptravel"
                sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}
              >
                <YouTubeIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Floating WhatsApp & Call buttons */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: 20,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <IconButton
          sx={{
            backgroundColor: "#25D366",
            width: 55,
            height: 55,
            "&:hover": { backgroundColor: "#1DA851" },
          }}
          href="https://wa.me/917303538650"
          target="_blank"
        >
          <Box
            component="img"
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            sx={{ width: 30, height: 30 }}
          />
        </IconButton>

        <IconButton
          sx={{
            backgroundColor: "#25D366",
            width: 55,
            height: 55,
            "&:hover": { backgroundColor: "#1DA851" },
          }}
          href="tel:+917303538650"
        >
          <Box
            component="img"
            src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
            alt="Call"
            sx={{ width: 30, height: 30 }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
