import React, { useState } from 'react';
import { Box, Typography, Grid, Pagination } from '@mui/material';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import PropertySearch from '@/components/PropertySearch/PropertySearch';
import { properties } from '@/components/mockData';
import PropertyDisplay from '@/components/shared/Card';
import { Colors } from '@/components/colors';
import Button from '@/components/shared/Button';

export default function PropertyListing() {
  const [currentPage, setCurrentPage] = useState(1);
  const nav = ["Rent", "Buy"];
  const [activeTab, setActiveTab] = useState("Rent");
  const [filters, setFilters] = useState({ location: "", propertyType: "", range: "" });
  const propertiesPerPage = 6;

  const filteredProperties = properties.filter((prop: any) => {
    if (filters.location && prop.location !== filters.location) return false;
    if (filters.propertyType && prop.propertyType !== filters.propertyType) return false;
    if (filters.range) {
      const price = prop.price;
      if (filters.range === "2-4Million" && (price < 2000000 || price > 4000000)) return false;
      if (filters.range === "5-10Million" && (price < 5000000 || price > 10000000)) return false;
    }
    return true;
  });

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

  const handlePageChange = (event: any, value: number) => {
    setCurrentPage(value);
  };

  const handleSearch = (newFilters: { location: string; propertyType: string; range: string }) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const isSearching = filters.location || filters.propertyType || filters.range;
  const searchResultText = `${filteredProperties.length} result${filteredProperties.length === 1 ? '' : 's'} ${filters.propertyType ? `for ${filters.propertyType} apartment ` : ''}${filters.location ? `in ${filters.location} ` : ''}found`;

  return (
    <DashboardLayout title="Property Listing">
    <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Box sx={{ display: "flex", columnGap: 4, mb: 2 }}>
        {nav.map((navItem) => (
          <Button
            variant="text"
            key={navItem}
            onClick={() => setActiveTab(navItem)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0",
              minWidth: "unset",
            }}
          >
            <Typography sx={{ color: activeTab === navItem ? Colors.BackroundOrTitle : Colors.TextGray, fontWeight: activeTab === navItem ? 600 : 400 }}>
              {navItem}
            </Typography>
            <Box
              component="span"
              sx={{
                width: "100%",
                height: "2px",
                backgroundColor: activeTab === navItem ? Colors.BackroundOrTitle : "transparent",
                transition: "background-color 0.3s ease",
                marginTop: "0.4rem",
              }}
            />
          </Button>
        ))}
      </Box>

      <PropertySearch onSearch={handleSearch} />

      <Box sx={{ mt: 4, mb: 3 }}>
        {isSearching ? (
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
            <span style={{ color: Colors.TextGray, fontWeight: 500, marginRight: '8px' }}>Search results:</span>
            {searchResultText}
          </Typography>
        ) : (
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
            Recommended Properties
          </Typography>
        )}
      </Box>

      <Grid container spacing={4}>
        {currentProperties.map((item: any) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Box sx={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <PropertyDisplay data={item} />
            </Box>
          </Grid>
        ))}
      </Grid>

      {filteredProperties.length > 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Pagination
            count={Math.ceil(filteredProperties.length / propertiesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="primary"
            sx={{
              "& .MuiPaginationItem-root": {
                backgroundColor: "#fff !important",
                color: "#000 !important",
                borderRadius: "50%",
                border: "1px solid #e0e0e0 !important",
              },
              "& .Mui-selected": {
                backgroundColor: `${Colors.BackroundOrTitle} !important`,
                color: "#fff !important",
                border: `1px solid ${Colors.BackroundOrTitle} !important`,
              },
            }}
          />
        </Box>
      )}
    </Box>
    </DashboardLayout>
  );
}
