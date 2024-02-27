import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { OfferType } from "../mockData";
import { Colors } from "../colors";

interface OfferCardProps {
  item: OfferType;
}
const OfferCard = ({ item }: OfferCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.OffWhite,
        padding: { xs: "2rem 1rem", md: "1rem" },
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: Colors.White,
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          borderRadius: "100%",
          padding: "0.2rem 0.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <Image src={item.icon} alt={item.title} width="40" height="30" />
      </Box>
      <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
        {item.title}
      </Typography>
      <Typography>{item.text}</Typography>
    </Box>
  );
};

export default OfferCard;
