import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../colors";

const Subscribe = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.White,
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "85%" },
          marginInline: { xs: "auto", md: "auto" },
        }}
      >
        <Box sx={{ padding: "4rem 0 4rem" }}>
          <Box
            sx={{
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <Typography variant="h4">Subscribe to our newsletter</Typography>
            <Typography variant="body1" marginBottom={"1rem"}>
              to get updates for newest property
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscribe;
