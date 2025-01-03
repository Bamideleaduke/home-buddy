import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../colors";
import Carousel from "./Carousel";

const Testimonial = () => {
  return (
    <Box
      sx={{
        padding: "5rem 0",
        textAlign: "center",
        backgroundColor: Colors.White,
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "85%" },
          marginInline: { xs: "auto", md: "auto" },
        }}
      >
        <Typography
          variant="h6"
          marginBottom={"1rem"}
          color={Colors.BackroundOrTitle}
        >
          WHY CHOOSE US?
        </Typography>
        <Typography variant="h4">
          We provide the most ideal list of property.
        </Typography>
        <Box sx={{ padding: "3rem 0 17rem 0" }}>
          <Box
            sx={{
              backgroundColor: Colors.BackroundOrTitle,
              position: "relative",
              width: "100%",
              height: "200px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "30%",
                width: "100%",
                height: "auto",
              }}
            >
              <Carousel />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
