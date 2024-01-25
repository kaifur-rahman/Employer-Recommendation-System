/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

function CompanyLayout({ data }) {
  const baseUrl = "https://jrs.spoken-tutorial.org";
  return (
    <Box
      sx={{
        width: { xs: "17rem", sm: "18rem", md: "20rem", lg: "19rem" },
        height: "10rem",
        display: "flex",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: "0.02rem",
        borderRadius: "0.3rem",
        borderColor: "#ffffff",
        backgroundColor: "#F9F9F9",
        boxShadow: "4px 5px 8px rgba(0, 0, 0, 0.3)",
        "&:hover": {
          borderColor: "#FFA500CC",
          borderWidth: "0.1rem",
          transform: "scale(1.03)",
        },
      }}
    >
      <Grid container>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Company Logo"
            src={baseUrl + data.logo}
            sx={{ width: "4rem", height: "3rem" }}
          />
        </Grid>
        <Grid item xs={8}>
          <Grid container sx={{ width: "90%" }}>
            <Grid item xs={12}>
              <Typography
                variant="body"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#002648" }}
              >
                {data.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                sx={{ color: "#002648" }}
              >
                {data.domain}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default CompanyLayout;
