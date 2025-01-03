import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PropertyDisplay from "../shared/Card/PropertyDisplay";
import { Colors } from "../colors";
import Button from "../shared/Button";

const FeaturedProperty = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "85%" },
        marginInline: { xs: "auto", md: "auto" },
      }}
    >
      <Box
        sx={{
          margin: "5rem 0 0",
          //   border: "2px solid red"
        }}
      >
        <Box
          sx={{
            color: Colors.BackroundOrTitle,
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <Typography variant="h6" marginBottom={"1rem"}>
            FEATURED PROPERTIES DEALS
          </Typography>
          <Typography variant="h4">
            We have properties for sale in different locations
          </Typography>
        </Box>
        <Grid container 
          // gap={7} 
          rowGap={6}
        justifyContent="space-between"
        sx={{ margin: "2rem 0", columnGap: { sm: 1 } }}

        
        >
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <Grid item key={item} 
              // sm={4} md={3.4}
              xs={12}
              sm={5}
             md={3.5}
              >
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
          <Button>View more</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default FeaturedProperty;
