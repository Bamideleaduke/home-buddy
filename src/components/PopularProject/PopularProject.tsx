import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { Colors } from "../colors";
import PropertyDisplay from "../shared/Card";
import Button from "../shared/Button";

const PopularProject = () => {
  return (
    <Box
      sx={{
   
        backgroundColor: Colors.White,
        backgroundImage:
          "radial-gradient(circle, rgba(128,114,207,1) 0%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "85%" },
                  marginInline: { xs: "auto", md: "auto" },
          
          //   backgroundImage:
          //     "radial-gradient(circle, rgba(110,93,207,1) 0%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%)",
          //   border: "2px solid red"
        }}
      >
              <Box sx={{ padding: "3rem 0 4rem",}}>
                  
        <Box
          sx={{
            color: Colors.BackroundOrTitle,
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <Typography variant="h6" marginBottom={"1rem"}>
            POPULAR PROPERTY
          </Typography>
          <Typography variant="h4">
            We have our most searched property
          </Typography>
        </Box>
          <Grid container 
          // gap={7}
          justifyContent="space-between"
            rowGap={6}
            sx={{ columnGap: { sm: 0.5 } }}
          >
          {[1, 2, 3].map((item) => {
            return (
              <Grid item key={item} xs={12} sm={3.7} md={3.4}>
                <PropertyDisplay />
              </Grid>
            );
          })}
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "3rem 0",
          }}
        >
          <Button >Get Started</Button>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PopularProject;
