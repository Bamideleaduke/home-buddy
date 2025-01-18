import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { Colors } from "../colors";
import Button from "../shared/Button";
import CustomSelect from "../shared/form/Select";

const locationOptions = [
  { label: "Lagos", value: "lagos" },
  { label: "Kogi", value: "kogi" },
];

const propertyTypeOptions = [
  { label: "Duplex", value: "duplex" },
  { label: "2 Storey", value: "2-storey" },
];
const rangeOptions = [
  { label: "2-4 Million", value: "2-4Million" },
  { label: "5-10 Million", value: "5-10Million" },
];
const PropertySearch = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [range, setRange] = useState("");
  return (
    <Box
      sx={{
        // width: "100%",
        // height: "auto",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { md: "space-between" },
        alignItems: "center",
        borderRadius: "8px",
        padding: "24px 12px",
        marginY: "36px",
        gap: { xs: "30px", md: "10px 30px" },
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography>Location</Typography>
        <CustomSelect
          // name="location"
          label=""
          onChange={(e) => setLocation(e.target.value)}
          options={locationOptions}
          value={location}
          sx={{ width: "100%" }}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography>Property Type</Typography>
        <CustomSelect
          // name="location"
          label=""
          onChange={(e) => setPropertyType(e.target.value)}
          options={propertyTypeOptions}
          value={propertyType}
          sx={{ width: "100%" }}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography>Price Range</Typography>
        <CustomSelect
          label=""
          onChange={(e) => setRange(e.target.value)}
          options={rangeOptions}
          value={range}
          sx={{ width: "100%" }}
        />
      </Box>
      <Box sx={{ marginTop: { md: "25px" } }}>
        <Button
          sx={{
            backgroundColor: Colors.BackroundOrTitle,
            width: { xs: "60px", md: "60px" },
            height: { xs: "40px", md: "40px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0",
            padding: 0,
            minWidth: "30px",
          }}
        >
          <Image src="/search.svg" alt="search icon" width="15" height="15" />
        </Button>
      </Box>
    </Box>
  );
};

export default PropertySearch;
