import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Colors } from "@/components/colors";

const PropertyDisplay = () => {
  return (
    <Box
      sx={{
        border: "2px solid red",
        width: "300px",
        backgroundColor: Colors.OffWhite,
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <Box>
        <Box
          component="img"
          src="/property.svg"
          alt=""
          sx={{ width: "100%" }}
        />
        {/* <Image src="/property.svg" alt="Logo" width="100" height="100" /> */}
      </Box>

      <Box>
        <Typography
          variant="h3"
          color={Colors.BackroundOrTitle}
          sx={{ margin: "1rem 0" }}
        >
          450,000
        </Typography>
        <Typography variant="h3" sx={{ fontSize: "1.2rem" }}>
          Greenville Apartment
        </Typography>
        <Typography variant="body2">
          12, Adeniran Street, Ikoyi, Lagos
        </Typography>
        <Box sx={{ display: "flex", marginTop: "1rem" }}>
          {["beds", "baths", "park"].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{
                border: ` 1px solid ${Colors.Grey}`,
                borderRadius: "5px",
                padding: "0.1rem 0.5rem",
                marginRight: "1rem",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDisplay;
