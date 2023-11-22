import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Grid from "@mui/material/Grid";
function ContactDetails() {
  return (
    <Box
      sx={{
        mt: "1.5rem",
        display: "flex",
        direction: "col",
        flexDirection: { xs: "row", md: "column" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item sm={12} md={12}>
          <Box sx={{ display: "flex", direction: "row" }}>
            <LocationOnRoundedIcon
              sx={{ color: "#ffffff" }}
            ></LocationOnRoundedIcon>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              Spoken Tutorial Project, TCS Lab,Behind CAD Centre, IIT Bombay,
              Powai, Mumbai - 400076
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={6} md={6}>
          <Box sx={{ display: "flex", direction: "row", mt: "0.3rem" }}>
            <CallRoundedIcon sx={{ color: "#ffffff" }}></CallRoundedIcon>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              + 91 22 25764229
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={6} md={6}>
          <Box sx={{ display: "flex", direction: "row", mt: "0.3rem" }}>
            <EmailRoundedIcon sx={{ color: "#ffffff" }}></EmailRoundedIcon>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ color: "#ffffff", ml: "0.15rem" }}
            >
              hr@spoken-tutorial.org
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactDetails;
