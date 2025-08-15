import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Link,
} from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../assets/Ghumi.webp"; // correct path to logo

const Header = () => {
  return (
    <Box sx={{ width: "100%", fontFamily: "Arial, sans-serif" }}>
      {/* ===== TOP BAR ===== */}
      <Box sx={{ display: "flex", width: "100%", height: "40px" }}>
        {/* LEFT ORANGE SECTION */}
        <Box
          sx={{
            backgroundColor: "#f97316", // Orange
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 3,
            px: { xs: 2, md: 4 },
            flex: 1,
          }}
        >
          {/* sidd */}
          {/* Phone */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIphoneIcon sx={{ fontSize: "18px" }} />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "15px",
                lineHeight: 1,
                letterSpacing: "0.2px",
              }}
            >
              +91 73035 38650
            </Typography>
          </Box>
          {/* Email */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon sx={{ fontSize: "18px" }} />
            <Typography
              sx={{
                fontSize: "15px",
                lineHeight: 1,
                letterSpacing: "0.2px",
              }}
            >
              Ghumighumicabservice@gmail.com
            </Typography>
          </Box>
        </Box>

        {/* RIGHT BLUE SECTION */}
        <Box
          sx={{
            backgroundColor: "#075985", // Blue
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 2,
            px: { xs: 2, md: 3 },
          }}
        >
          <FacebookIcon sx={{ fontSize: "18px", cursor: "pointer" }} />
          <InstagramIcon sx={{ fontSize: "18px", cursor: "pointer" }} />
          <YouTubeIcon sx={{ fontSize: "18px", cursor: "pointer" }} />
        </Box>
      </Box>

      {/* ===== MAIN HEADER ===== */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 2, md: 6 },
            minHeight: "80px",
          }}
        >
          {/* LOGO */}
          <Box>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "75px",
                display: "block",
              }}
            />
          </Box>

          {/* NAVIGATION MENU */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3.5,
            }}
          >
            <Link
              href="/"
              underline="none"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#000",
                "&:hover": { color: "#f97316" },
              }}
            >
              Home
            </Link>
            <Link
              href="/aboutUs"
              underline="none"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#000",
                "&:hover": { color: "#f97316" },
              }}
            >
              About Us
            </Link>
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  "&:hover": { color: "#f97316" },
                }}
              >
                One Way Cabs
              </Typography>
              <ArrowDropDownIcon sx={{ fontSize: "22px" }} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  "&:hover": { color: "#f97316" },
                }}
              >
                Round Trip Cabs
              </Typography>
              <ArrowDropDownIcon sx={{ fontSize: "22px" }} />
            </Box>
            <Link
              href="#"
              underline="none"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#000",
                "&:hover": { color: "#f97316" },
              }}
            >
              Blogs
            </Link>
            <Link
              href="/contactUs"
              underline="none"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#000",
                "&:hover": { color: "#f97316" },
              }}
            >
              Contact Us
            </Link>
          </Box>

          {/* CALL ME NOW BUTTON */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f97316",
              "&:hover": { backgroundColor: "#ea580c" },
              fontWeight: "bold",
              textTransform: "none",
              px: 3,
              py: 1,
              fontSize: "16px",
              borderRadius: 0,
              boxShadow: "none",
            }}
          >
            Call Me Now
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
