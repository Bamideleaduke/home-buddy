"use client";
import { Colors } from "@/components/colors";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { properties } from "@/components/mockData";
import BackgroundTemplate from "@/components/shared/Temp/BackgroundTemplate";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DescriptionAndReview from "@/components/DescriptionAndReview/DescriptionAndReview";

const PropertyDetail = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const handleBackClick = () => {
    router.back();
  };
  useEffect(() => {
    const data = properties?.filter((item) => String(item.id) === String(id));

    setSelectedProperty(data[0]);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: Colors.BackroundOrTitle,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!selectedProperty) {
    return (
      <Box
        sx={{
          textAlign: "center",
          padding: "2rem",
          backgroundColor: Colors.BackroundOrTitle,
          color: "#fff",
        }}
      >
        <Typography variant="h6">Property not found.</Typography>
        <IconButton
          onClick={handleBackClick}
          aria-label="go back"
          color="primary"
        >
          <ArrowBackIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
    );
  }

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
        {!selectedProperty?.propImg && (
          <Box>
            <Typography>
              Properties images are not available for this listing
            </Typography>
          </Box>
        )}

        <Grid
          container
          sx={{
            height: "100%",
            columnGap: "5px",
            justifyContent: "space-between",
            // alignItems: "stretch",
          }}
        >
          {selectedProperty?.propImg &&
            selectedProperty?.propImg.map((item: any) => {
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
      <BackgroundTemplate backgroundColor="">
        <Typography
          variant="h4"
          sx={{
            color: Colors.BackroundOrTitle,
            // fontSize:{md:""},
            fontWeight: "700",
            marginBottom: "2rem",
          }}
        >
          Property gallery
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            // maxHeight: { md: "276px" },
            padding: { xs: "1.5rem", md: "3rem" },
            borderRadius: "16px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              // height: "100%",
              maxHeight: { md: "276px" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "25px 0", md: "0 25px" },
            }}
          >
            <Box
              component="img"
              src={"/properties/property1inside.svg"}
              alt="prop1front"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              component="img"
              src={"/properties/property1inside.svg"}
              alt="prop1front"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </BackgroundTemplate>
      <DescriptionAndReview />
    </>
  );
};

export default PropertyDetail;
