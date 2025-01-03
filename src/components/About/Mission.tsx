import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../colors";

const MissionStyle = {
  Container: {
    // backgroundImage: `url(${heroImg})`,
    backgroundImage: { xs: `url(/mission-bg.svg)` },

    width: "100%",
    height: "100%" /* Set the height as per your requirement */,
    // objectFit: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left bottom",
    backgroundSize: "contain",
    backgroundColor: Colors.Black,

    // background-repeat: no-repeat;
    /* Add other styles as needed */
  },
};

const Mission = () => {
  return (
    <Box
      sx={{
        margin: { xs: "2rem auto", md: "6rem auto" },
        padding: { xs: "2rem 0", md: "6rem 0" },
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "85%" },
          marginInline: { xs: "auto", md: "auto" },
        }}
      >
        <Box sx={MissionStyle.Container}>
          <Box
            sx={{
              backgroundColor: Colors.BackroundOrTitle,
              opacity: "80%",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box
              sx={{
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "3rem 0",
                }}
              >
                <Box
                  sx={{
                    color: Colors.White,
                    flexBasis: "40%",
                    borderRight: "2px solid white",
                    padding: "3rem",
                    marginRight: "2rem",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      textAlign: "center",
                      fontSize: "2.5rem",
                    }}
                  >
                    Our mission
                  </Typography>
                </Box>
                <Box sx={{ flexBasis: "60%" }}>
                  <Typography
                    sx={{
                      width: "550px",
                      fontSize: "1.3rem",
                      color: Colors.White,
                    }}
                  >
                    Our mission is to be the trusted partner that empowers
                    individuals and families to find their ideal homes and make
                    informed real estate decisions. We are committed to
                    delivering exceptional service, personalized guidance, and
                    unparalleled expertise to ensure our clients achieve their
                    real estate goals
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mission;
