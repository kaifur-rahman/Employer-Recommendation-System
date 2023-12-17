/* eslint-disable react/prop-types */
import React from "react";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

function CompaniesSection(props) {
  return (
    <>
      <Box
        sx={{
          marginTop: "2rem",
          p: "1rem",
          marginBottom: "3.5rem",
        }}
        id="companies"
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bolder",
            color: "#002648",
            fontSize: { xs: "2rem" },
          }}
        >
          Companies
        </Typography>
        <Divider
          sx={{
            backgroundColor: "#000000",
            mt: "0.3rem",
          }}
        ></Divider>
        {props.Component}
      </Box>
    </>
  );
}

export default CompaniesSection;
