import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { sponsors } from "../mockData";
import Image from "next/image";

const Sponsors = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "85%" },
        margin: { xs: "3rem auto", md: "5rem auto" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "1rem", textAlign: "center" },
          marginBottom: { xs: "2rem" },
        }}
      >
        More than 50+ Brands Trusted World Wide
      </Typography>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        columnSpacing={5}
      >
        {sponsors.map((item) => {
          return (
            <Grid
              key={item.id}
              item
              xs={6}
              md={3}

            >
              <Image
                src={item.icon}
                alt={item.text}
                width="100"
                height="50"
              
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Sponsors;
