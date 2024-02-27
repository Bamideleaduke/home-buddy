import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { HeroStyle } from "./HeroStyle";
import { Colors } from "../colors";
// import Image from "next/image";

// sx={{
//     backgroundImage: 'url("/path/to/your/image.jpg")',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     width: '100%',
//     height: '400px', // Set the height as per your requirement
//     // Add other styles as needed
//   }}

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        height: "80vh",
      }}
    >
      <Box sx={HeroStyle.Container}>
        <Box
          sx={{
            width: { xs: "90%", md: "85%" },
            // border: "2px solid red",
            margin: { xs: "0 auto", md: "2rem auto" },
            height: { xs: "90%", md: "100%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              // border: "2px solid yellow",
              //   margin: "5rem auto",
              //   padding: "6rem 0 0 0"
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            <Box>
              <Typography variant="h1">
                Discover Your Perfect{" "}
                <Typography
                  component="span"
                  variant="h1"
                  color={Colors.BackroundOrTitle}
                >
                  Apartment
                </Typography>{" "}
                With Ease
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  width: { md: "600px" },
                  margin: { xs: "1.5rem 0", md: "1.5rem 0" },
                }}
              >
                We provide a complete service of sale and rental services of
                diverse range of properties that match your lifestyle and
                aspirations.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  textAlign: "center"
                }}
              >
                <Box>
                  <Typography variant="h3">150</Typography>
                  <Typography color={Colors.TextGray}>Award Winning</Typography>
                </Box>
                <Box sx={{ margin: { md: "0 1rem" } }}>
                  <Typography variant="h3">
                    250{" "}
                    <Typography
                      component="span"
                      variant="h3"
                      color={Colors.BackroundOrTitle}
                    >
                      {" "}
                      +{" "}
                    </Typography>
                  </Typography>
                  <Typography color={Colors.TextGray}>
                    Happy Customers
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h3">
                    500{" "}
                    <Typography
                      component="span"
                      variant="h3"
                      color={Colors.BackroundOrTitle}
                    >
                      +{" "}
                    </Typography>{" "}
                  </Typography>
                  <Typography color={Colors.TextGray}>
                    Property Ready{" "}
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

export default Hero;
