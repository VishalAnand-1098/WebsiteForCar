import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  Container,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // <-- Import for navigation
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../assets/Ghumi.png";

const Header = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [bgColor, setBgColor] = useState("#fff");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 60) {
        setShowTopBar(false);
        setIsSticky(true);
      } else {
        setShowTopBar(true);
        setIsSticky(false);
      }

      // gradually shift white -> dark gray
      const progress = Math.min(scrollY / 300, 1);
      const grayValue = 255 - progress * 120;
      setBgColor(`rgb(${grayValue}, ${grayValue}, ${grayValue})`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarHeight = isSticky ? 70 : 90;

  const navLinks = {
    Home: "/",
    "One Way Cabs": "/onewaycabs",
    "Round Trip Cabs": "/onewaycabs",
    "About Us": "/aboutus",
    Contact: "/contact",
    Blogs: "/blogs",
  };

  return (
    <Box sx={{ width: "100%", fontFamily: "Arial, sans-serif" }}>
      {/* ===== TOP STRIP ===== */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          transition: "all 0.4s ease-in-out",
          maxHeight: showTopBar ? 40 : 0,
          opacity: showTopBar ? 1 : 0,
        }}
      >
        <Box sx={{ display: "flex", height: 40, width: "100%" }}>
          {/* Left orange */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#f97316",
              display: "flex",
              alignItems: "center",
              gap: 3,
              px: 4,
              color: "#fff",
              transition: "all 0.4s ease-in-out",
            }}
          >
            <PhoneIphoneIcon sx={{ fontSize: 18 }} />
            <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
              +91 73035 38650
            </Typography>
            <EmailIcon sx={{ fontSize: 18, ml: 4 }} />
            <Typography sx={{ fontSize: 15 }}>
              shubhtriptravel@gmail.com
            </Typography>
          </Box>

          {/* Right blue */}
          <Box
            sx={{
              backgroundColor: "#075985",
              display: "flex",
              alignItems: "center",
              px: 3,
              gap: 2,
              color: "#fff",
              transition: "all 0.4s ease-in-out",
            }}
          >
            <a
              href="https://www.facebook.com/share/14DmCBSZ6UY/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                sx={{ fontSize: 18, cursor: "pointer", color: "#1877F2" }}
              />
            </a>
            <a
              href="https://www.instagram.com/p/DMuUibqJYQT/?igsh=MWI1bnE5ODZpeW03Zg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                sx={{ fontSize: 18, cursor: "pointer", color: "#E4405F" }}
              />
            </a>
            <a
              href="https://www.youtube.com/@ShubhTriptravel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon
                sx={{ fontSize: 18, cursor: "pointer", color: "#FF0000" }}
              />
            </a>
          </Box>
        </Box>
      </Box>

      {/* ===== MAIN NAVBAR ===== */}
      <AppBar
        enableColorOnDark
        position={isSticky ? "fixed" : "static"}
        sx={{
          backgroundColor: bgColor + " !important",
          color: "#000",
          boxShadow: isSticky ? "0 2px 10px rgba(0,0,0,0.15)" : "none",
          borderBottom: isSticky ? "1px solid #e5e5e5" : "none",
          transition:
            "background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
          zIndex: 1200,
        }}
      >
        <Container maxWidth="lg" sx={{ px: 2 }}>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: navbarHeight,
              transition: "all 0.4s ease-in-out",
            }}
          >
            {/* LOGO */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <RouterLink to="/">
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    height: isSticky ? "55px" : "70px",
                    borderRadius: "12px",
                    display: "block",
                    transition: "all 0.4s ease-in-out",
                  }}
                />
              </RouterLink>
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
              {Object.entries(navLinks).map(([label, path], index) => (
                <Link
                  key={index}
                  href={path}
                  underline="none"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#000",
                    transition: "color 0.3s ease-in-out",
                    "&:hover": { color: "#f97316" },
                  }}
                >
                  {label}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Placeholder div to prevent jump on scroll */}
      {isSticky && <Box sx={{ height: `${navbarHeight}px` }} />}
    </Box>
  );
};

export default Header;
