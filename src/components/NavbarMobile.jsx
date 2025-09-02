import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import logo from "../assets/Ghumi.png";

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "One Way Cabs", link: "/onewaycabs" },
    { text: "Round Trip Cabs", link: "/roundtripcabs" },
    { text: "About Us", link: "/aboutus" },
    { text: "Contact", link: "/contact" },
    { text: "Blogs", link: "/blogs" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* ===== TOP STRIP ===== */}
      <Box sx={{ display: "flex", width: "100%", height: 42, minWidth: 0 }}>
        {/* Left Orange */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#f97316",
            display: "flex",
            alignItems: "center",
            px: 1.5,
            color: "#fff",
            gap: 1,
            minWidth: 0,
          }}
        >
          <PhoneIphoneIcon sx={{ fontSize: 15 }} />
          <Typography
            sx={{ fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}
          >
            +91 73035 38650
          </Typography>
        </Box>

        {/* Right Blue */}
        <Box
          sx={{
            backgroundColor: "#075985",
            display: "flex",
            alignItems: "center",
            px: 1.5,
            gap: 1,
            flexShrink: 0,
          }}
        >
          <a
            href="https://www.facebook.com/share/14DmCBSZ6UY/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon sx={{ fontSize: 17, color: "#fff" }} />
          </a>
          <a
            href="https://www.instagram.com/p/DMuUibqJYQT/?igsh=MWI1bnE5ODZpeW03Zg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon sx={{ fontSize: 17, color: "#fff" }} />
          </a>
          <a
            href="https://www.youtube.com/@ShubhTriptravel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon sx={{ fontSize: 17, color: "#fff" }} />
          </a>
        </Box>
      </Box>

      {/* ===== MAIN NAVBAR ===== */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: 65,
            px: 2,
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "50px",
                  width: "auto",
                  borderRadius: "10px",
                  display: "block",
                  cursor: "pointer",
                }}
              />
            </Link>
          </Box>

          {/* Right Side: Button + Hamburger */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* WhatsApp CTA Button */}
            <Button
              component="a"
              href={`https://wa.me/917303538650?text=${encodeURIComponent(
                "Hello, I would like to book a cab. Please share the details."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#f97316",
                color: "#fff",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "14px",
                borderRadius: "20px",
                px: 2,
                "&:hover": { backgroundColor: "#ea580c" },
              }}
            >
              Book Now
            </Button>

            {/* Hamburger Menu */}
            <IconButton
              edge="end"
              onClick={toggleDrawer(true)}
              size="small"
              sx={{
                p: 0.5,
                width: 36,
                height: 36,
              }}
            >
              <MenuIcon sx={{ color: "#075985", fontSize: 24 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ===== DRAWER MENU ===== */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: { xs: "80vw", sm: 250 },
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                to={item.link}
                sx={{
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIphoneIcon sx={{ fontSize: 16, mr: 1 }} />
              +91 73035 38650
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", fontSize: 14 }}
            >
              <EmailIcon sx={{ fontSize: 16, mr: 1 }} />
              shubhtriptravel@gmail.com
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default HeaderMobile;
