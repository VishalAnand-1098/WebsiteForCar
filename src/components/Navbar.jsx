import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Link,
  Container,
} from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../assets/Ghumi.webp";

const Header = () => {
  return (
    <Box sx={{ width: "100%", fontFamily: "Arial, sans-serif" }}>
      {/* ===== TOP STRIP ===== */}
      <Box sx={{ display: "flex", height: 40, width: "100%" }}>
        {/* Left orange section */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#f97316",
            display: "flex",
            alignItems: "center",
            gap: 3,
            px: 4,
            color: "#fff",
          }}
        >
          <PhoneIphoneIcon sx={{ fontSize: 18 }} />
          <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
            +91 73035 38650
          </Typography>
          <EmailIcon sx={{ fontSize: 18, ml: 4 }} />
          <Typography sx={{ fontSize: 15 }}>
            Ghumighumicabservice@gmail.com
          </Typography>
        </Box>

        {/* Right blue section */}
        <Box
          sx={{
            backgroundColor: "#075985",
            display: "flex",
            alignItems: "center",
            px: 3,
            gap: 2,
            color: "#fff",
          }}
        >
          <FacebookIcon sx={{ fontSize: 18, cursor: "pointer" }} />
          <InstagramIcon sx={{ fontSize: 18, cursor: "pointer" }} />
          <YouTubeIcon sx={{ fontSize: 18, cursor: "pointer" }} />
        </Box>
      </Box>

      {/* ===== MAIN NAVBAR ===== */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Container maxWidth="lg" sx={{ px: 2 }}>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: 80,
            }}
          >
            {/* LOGO */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "75px",
                  borderRadius: "12px",
                  display: "block",
                }}
              />
            </Box>

            {/* NAVIGATION */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                justifyContent: "center",
                flexGrow: 1,
                mx: 5,
              }}
            >
              <Link
              href="/"
                underline="none"
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#000",
                  whiteSpace: "nowrap",
                  "&:hover": { color: "#f97316" },
                }}
              >
                Home
              </Link>

              <Link
              href="/aboutUs"
                underline="none"
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#000",
                  whiteSpace: "nowrap",
                  "&:hover": { color: "#f97316" },
                }}
              >
                About Us
              </Link>

              {/* One Way Cabs */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": { color: "#f97316" },
                  whiteSpace: "nowrap",
                }}
              >
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  One Way Cabs
                </Typography>
                <ArrowDropDownIcon sx={{ fontSize: 20 }} />
              </Box>

              {/* Round Trip Cabs */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": { color: "#f97316" },
                  whiteSpace: "nowrap",
                }}
              >
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  Round Trip Cabs
                </Typography>
                <ArrowDropDownIcon sx={{ fontSize: 20 }} />
              </Box>

              <Link
                href="/blogs"
                underline="none"
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#000",
                  whiteSpace: "nowrap",
                  "&:hover": { color: "#f97316" },
                }}
              >
                Blogs
              </Link>

              <Link
              href="/contactUs"
                underline="none"
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#000",
                  whiteSpace: "nowrap",
                  "&:hover": { color: "#f97316" },
                }}
              >
                Contact Us
              </Link>
            </Box>

            {/* CALL ME NOW */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f97316",
                color: "#fff",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "14px",
                px: 3,
                height: "42px",
                borderRadius: 1,
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#ea580c",
                },
              }}
            >
              Call Me Now
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
