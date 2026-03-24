import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../colors";
import Image from "next/image";
import Button from "../shared/Button";

const AboutHero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "100%",
     
        paddingTop: "3rem",
        padding: { xs: "3rem 1rem" },
     
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "85%" },
          margin: { xs: "0 auto", md: "2rem auto" },
        }}
      >
        <Typography
          variant="h3"
          color={Colors.BackroundOrTitle}
          sx={{
            textAlign: "center",
          }}
        >
          About Us
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",

          }}
        >
          <Box sx={{ flexBasis: "50%" }}>
            <Typography
              variant="body1"
              sx={{
                textAlign: "left",
                fontSize: { md: "24px" },
                width: { md: "500px" },
              }}
            >
              At Homebuddy, we are passionate about helping you find your
              perfect property. We have established ourselves as a trusted and
              reliable agency serving clients in different locations.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "left",
                fontSize: { md: "1.5rem" },
                width: { md: "500px" },
                margin: { xs: "1.5rem 0", md: "0.7rem 0 1.5rem" },
              }}
            >
              Our team of dedicated professionals is committed to providing
              exceptional service and ensuring your real estate journey is
              smooth and successful.
            </Typography>
            <Button>Join us</Button>
          </Box>
          <Box
            sx={{
              flexBasis: "50%",
              display: { xs: "initial", md: "flex" },
              justifyContent: "right",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "350px" },
                height: "400px",
                margin: { xs: "2rem 0", md: "" },
              }}
            >
              <Image
                src="./aboutimg.svg"
                alt="about image"
                width={150}
                height={300}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutHero;
