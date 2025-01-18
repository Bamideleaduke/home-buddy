"use client";
import { Colors } from "@/components/colors";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { properties } from "@/components/mockData";
import BackgroundTemplate from "@/components/shared/Temp/BackgroundTemplate";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PropertyDetail = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const router = useRouter();
  const { id } = router.query;

  const handleBackClick = () => {
    router.back();
  };
  useEffect(() => {
    const data = properties.filter((item) => String(item.id) === String(id));
    setSelectedProperty(data[0]);
  }, []);

  return (
    <>
      <BackgroundTemplate
        backgroundColor={Colors.BackroundOrTitle}
        sx={{ padding: "3rem 1rem 0.1rem 0" }}
      >
        <Box
          sx={{
            padding: "1rem 1rem",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={handleBackClick}
              aria-label="go back"
              color="primary"
              sx={{ padding: 0 }}
            >
              <ArrowBackIcon sx={{ color: "#fff" }} />
            </IconButton>
            back
          </Typography>

          <Box
            sx={{
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography>{selectedProperty?.title}</Typography>
              <Typography>{selectedProperty?.address}</Typography>
            </Box>
            <Typography>
              ₦ {selectedProperty?.price.toLocaleString()}
            </Typography>
          </Box>
        </Box>
      </BackgroundTemplate>
      <BackgroundTemplate sx={{ paddingTop: 0 }} margintb="0 auto">
        <Grid
          container
          sx={{
            height: "100%",
            columnGap: "5px",
            justifyContent: "space-between",
          }}
        >
          {selectedProperty?.propImg.map((item: any) => {
            return (
              <React.Fragment key={item.id}>
                <Grid item xs={5.8}>
                  {/* <Image
                    src={item.propFront}
                    alt="propFront"
                    layout="responsive"
                    width={100}
                    height={100}
                  /> */}
                  <Box
                    component="img"
                    src={item?.propFront}
                    alt="prop1front"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={5.8}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                    rowGap: { xs: "10px", md: "25px" },
                  }}
                >
                  <Box
                    component="img"
                    src={item?.propSide}
                    alt="prop1side"
                    sx={{
                      width: "100%",
                      height: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    component="img"
                    src={item?.propInside}
                    alt="prop1inside"
                    sx={{
                      width: "100%",
                      height: "50%",
                      objectFit: "cover",
                    }}
                  />
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      </BackgroundTemplate>
    </>
  );
};

export default PropertyDetail;
