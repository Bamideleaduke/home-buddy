import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { OfferStyle } from "./OfferStyle";
import { Colors } from "../colors";
import { offers } from "../mockData";
import OfferCard from "./OfferCard";

const Offers = () => {
  return (
    <Box sx={OfferStyle.Container}>
      <Box
        sx={{
          backgroundColor: Colors.BackroundOrTitle,
          opacity: "80%",
          backdropFilter: "blur(8px)",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "85%" },
            marginInline: { xs: "auto", md: "auto" },
          }}
        >
          <Box
            sx={{
              padding: "5rem 0",
              textAlign: "center",
            }}
          >
            <Box sx={{ color: Colors.White }}>
              <Typography variant="h6" marginBottom={"1rem"}>
                WHY CHOOSE US?
              </Typography>
              <Typography variant="h4">
                We provide the most ideal list of property.
              </Typography>
            </Box>
            <Grid
              container
              // gap={2}
              rowGap={6}
              justifyContent="space-between"
              margin={"4rem 0"}
              // width={"100%"}
              sx={
                {
                  // gap: "2",
                }
              }
            >
              {offers.map((offer) => (
                <Grid item key={offer.id} xs={12} md={3.5}>
                  <OfferCard item={offer} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Offers;
