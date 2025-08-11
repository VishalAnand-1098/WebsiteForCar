import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const ItemLink = ({ children, href = "#", ...props }) => (
  <Link
    href={href}
    underline="hover"
    color="text.secondary"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: 1,
      "&:hover": { color: "text.primary" },
    }}
    {...props}
  >
    <FiberManualRecordIcon sx={{ fontSize: 8, color: "text.secondary" }} />
    {children}
  </Link>
);

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.default", pt: 3 }}>
      {/* Top row: Logo + Contact blocks */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          alignItems="center"
          sx={{ pb: 3 }}
        >
          <Grid item xs={12} md={4} lg={3}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box
                component="img"
                src="/logo.png"
                alt="Ghumti Ghumti Cab Service"
                sx={{
                  width: 160,
                  height: 90,
                  objectFit: "contain",
                  borderRadius: 1,
                  bgcolor: "rgba(255,255,255,0.04)",
                  p: 1,
                }}
              />
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Typography variant="h6" fontWeight={700}>
                  GHUMTI GHUMTI
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Cab Service
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={8} lg={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <PlaceOutlinedIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2">Address :</Typography>
                    <Typography variant="body2" color="text.secondary">
                      G-67, Ground Floor, Near MCD Toll Pul Pahladpur, New Delhi – 110044
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <MailOutlineIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2">Mail Id :</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ghumtighumticabservice@gmail.com
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Send your Query Anytime!
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <LocalPhoneOutlinedIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2">Phone No :</Typography>
                    <Typography variant="body2" color="text.secondary">
                      +91 73035 38650
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Mon to Sat 9 AM to 6 PM
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ opacity: 0.15 }} />

      {/* Middle: 4 columns */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* About Us */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              At Ghumti Ghumti, we offer affordable outstation and local taxi services in Delhi and nearby cities. Whether you're planning a trip to Jaipur, Uttarakhand, Himachal Pradesh, or any other destination.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2.5 }>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <ItemLink href="#">Home</ItemLink>
              <ItemLink href="#">About Us</ItemLink>
              <ItemLink href="#">Contact Us</ItemLink>
              <ItemLink href="#">Privacy Policy</ItemLink>
            </Stack>
          </Grid>

          {/* Indian Tourist Places */}
          <Grid item xs={12} sm={6} md={3.5}>
            <Typography variant="h6" gutterBottom>
              Indian Tourist Places
            </Typography>
            <List dense disablePadding>
              {[
                "Delhi to Agra Taxi Service",
                "Delhi to Mathura Taxi Service",
                "Delhi to Vrindavan Taxi Service",
                "Delhi to Bareilly Taxi Service",
                "Delhi to Jaipur Taxi Service",
                "Delhi to Dehradun Taxi Service",
              ].map((t) => (
                <ListItem key={t} disableGutters sx={{ py: 0.2 }}>
                  <ListItemIcon sx={{ minWidth: 20 }}>
                    <FiberManualRecordIcon sx={{ fontSize: 8, color: "text.secondary" }} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "body2",
                      color: "text.secondary",
                    }}
                    primary={t}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Our Location */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Our Location
            </Typography>
            <Box
              component="iframe"
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.4108!2d77.285!3d28.498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7e6f6c9d9f7%3A0x0!2sPul%20Pahladpur%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v0000000000"
              width="100%"
              height="150"
              style={{ border: 0, borderRadius: 8, filter: "grayscale(30%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ opacity: 0.15 }} />

      {/* Bottom bar */}
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="caption" color="text.secondary">
              © 2025 Ghomti Ghomti Cab Service. All Rights Reserved | Designed By
              <Box component="span" sx={{ ml: 0.5 }}>🧩</Box>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
              gap: 1,
            }}
          >
            <IconButton color="inherit" size="small" aria-label="Facebook">
              <FacebookOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" size="small" aria-label="X">
              <XIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" size="small" aria-label="Instagram">
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" size="small" aria-label="YouTube">
              <YouTubeIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" size="small" aria-label="LinkedIn">
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Container>

      {/* Floating WhatsApp button */}
      <Box
        sx={{
          position: "fixed",
          right: 16,
          bottom: 16,
          zIndex: 1200,
        }}
      >
        <IconButton
          size="large"
          sx={{
            bgcolor: "#25D366",
            color: "#fff",
            boxShadow: 4,
            "&:hover": { bgcolor: "#1ebe57" },
          }}
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
