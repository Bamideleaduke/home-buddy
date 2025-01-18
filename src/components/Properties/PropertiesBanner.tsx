import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../colors";
import BannerImg from "../../../public/properties/propertyBannerImg.svg";
import Button from "../shared/Button";

const PropertiesBanner = () => {
  const PropsStyle = {
    Container: {
      backgroundImage: `url("/properties/propertyBannerImg.svg")`,
      width: "100%",
      height: "40vh",
      objectFit: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius: "20px",
    },
  };
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        // border: "4px solid red",
        paddingTop: "3rem",
        padding: { xs: "3rem 1rem" },
      }}
    >
      <Box>
        <Box
          sx={{
            width: { xs: "90%", md: "85%" },
            // border: "2px solid yellow",
            margin: { xs: "0 auto", md: "2rem auto" },
            position: "relative",
          }}
        >
          <Box sx={PropsStyle.Container}>
            <Box
              sx={{
                width: "100%",
                position: "absolute",
                bottom: "-15%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: Colors.White,
                  boxShadow: "6",
                  width: { xs: "90%", xl: "80%" },
                  marginInline: "auto",
                  // opacity: "80%",
                  // backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  padding: { xs: "12px 22px", md: "24px 44px" },
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "1.1rem",
                        sm: "2rem",
                        md: "2.5rem",
                        xl: "3rem",
                      },
                      color: "#243B67",
                    }}
                  >
                    The Apartment Of Your Choice
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", md: "1.2rem" },
                      textAlign: "center",
                    }}
                  >
                    We give thousand recommendation of properties that match
                    your lifestyle and aspirations.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            items: "center",
            justifyContent: "center",
            margin: "6rem 0 2rem 0",
          }}
        >
          <Button size="large" sx={{ borderRadius: "8px" }}>
            Get stated
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertiesBanner;
