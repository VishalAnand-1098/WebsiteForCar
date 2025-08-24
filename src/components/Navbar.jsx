import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  Container,
} from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../assets/Ghumi.webp";

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
      const progress = Math.min(scrollY / 300, 1); // clamp between 0–1
      const grayValue = 255 - progress * 120; // from 255 (white) down to 75 (dark gray)
      setBgColor(`rgb(${grayValue}, ${grayValue}, ${grayValue})`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarHeight = isSticky ? 70 : 90;

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
              Ghumighumicabservice@gmail.com
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
            <FacebookIcon sx={{ fontSize: 18, cursor: "pointer" }} />
            <InstagramIcon sx={{ fontSize: 18, cursor: "pointer" }} />
            <YouTubeIcon sx={{ fontSize: 18, cursor: "pointer" }} />
          </Box>
        </Box>
      </Box>

      {/* ===== MAIN NAVBAR ===== */}
      <AppBar
        enableColorOnDark
        position={isSticky ? "fixed" : "static"}
        sx={{
          backgroundColor: bgColor + " !important", // force apply
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
              {["Home", "About Us", "Contact","Blogs"].map((item, index) => (
                <Link
                  key={index}
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.replace(/\s+/g, "").toLowerCase()}`
                  }
                  underline="none"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#000",
                    transition: "color 0.3s ease-in-out",
                    "&:hover": { color: "#f97316" },
                  }}
                >
                  {item}
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
