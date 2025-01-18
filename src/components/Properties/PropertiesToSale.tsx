import React, { useState } from "react";
import { Box, Typography, Grid, Pagination } from "@mui/material";
import { Colors } from "../colors";
import { properties } from "../mockData";
import PropertyDisplay from "../shared/Card";
import Button from "../shared/Button";
import PropertySearch from "../PropertySearch/PropertySearch";

const PropertiesForSale = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const nav = ["Rent", "Buy"];
  const [activeTab, setActiveTab] = useState("Rent");
  const propertiesPerPage = 6;

  // Calculate the current properties to display
  const indexOfLastProperty = currentPage * propertiesPerPage; // End index
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage; // Start index
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  // Handle page change
  const handlePageChange = (event: any, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Box
      sx={{
        margin: { xs: "2rem auto", md: "6rem auto" },
      }}
    >
      {" "}
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
        <Typography variant="h4" marginBottom={"0.4rem"}>
          We have properties for sale
        </Typography>
        <Typography variant="h5">in different location</Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "90%", md: "85%" },
          marginInline: { xs: "auto", md: "auto" },
        }}
      >
        <Box>
          <Box sx={{ display: "flex", columnGap: 4 }}>
            {nav.map((navItem) => {
              return (
                <Button
                  variant="text"
                  key={navItem}
                  onClick={(e) => setActiveTab(navItem)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0",
                    minWidth: "unset",
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        activeTab === navItem
                          ? Colors.BackroundOrTitle
                          : Colors.TextGray,
                    }}
                  >
                    {navItem}
                  </Typography>
                  <Box
                    component="span"
                    sx={{
                      width: "100%",
                      height: "2px",
                      backgroundColor:
                        activeTab === navItem
                          ? Colors.BackroundOrTitle
                          : "transparent",
                      transition: "background-color 0.3s ease",
                      marginTop: "0.2rem",
                    }}
                  ></Box>
                </Button>
              );
            })}
          </Box>
          <PropertySearch />
        </Box>
        <Grid
          container
          rowGap={6}
          justifyContent="space-between"
          sx={{ margin: "2rem 0", columnGap: { sm: 1 } }}
        >
          {currentProperties.map((item: any) => {
            return (
              <Grid
                item
                key={item.id}
                // sm={4} md={3.4}
                xs={12}
                sm={5}
                md={3.5}
              >
                <PropertyDisplay data={item} />
              </Grid>
            );
          })}
        </Grid>
        {/* Pagination Component */}
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
        >
          <Pagination
            count={Math.ceil(properties.length / propertiesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="primary"
            sx={{
              "& .MuiPaginationItem-root": {
                backgroundColor: "#fff !important",
                color: "#000 !important",
                borderRadius: "50%",
                border: "1px solid #fff !important",
              },
              "& .Mui-selected": {
                backgroundColor: `${Colors.BackroundOrTitle} !important`,
                color: "#fff !important",
                border: `1px solid ${Colors.BackroundOrTitle} !important`,
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: `${Colors.BackroundOrTitle} !important`,
                color: "#fff !important",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PropertiesForSale;
