import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { Colors } from "../colors";
import { Styles } from "../GlobalStyles";
import Button from "../shared/Button";

const PropertyDescription = () => {
  const [tourDate, setTourDate] = useState<Dayjs | null>(null);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ flexBasis: "65%" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: "600",
            margin: { xs: "1rem 0", md: "1.5rem 0" },
          }}
        >
          Details
        </Typography>
        <Box
          sx={{
            ...Styles.flexBetween,
            border: `1px solid ${Colors.lilacBorder}`,
            padding: "1rem",
            flexWrap: { xs: "wrap", md: "no-wrap" },
            borderRadius: "16px",
            gap: { xs: "2rem 1rem", md: "initial" },
            justifyContent: { xs: "center", sm: "space-between" },
          }}
        >
          <DetailsComponent title="Bedroom" icon="/icons/bed.svg" value="2" />
          <DetailsComponent
            title="Bathroom"
            icon="/icons/bathroom.svg"
            value="2"
          />
          <DetailsComponent
            title="Square area"
            icon="/icons/squareArea.svg"
            value="120sqft"
          />
          <DetailsComponent
            title="Parking"
            icon="/icons/parking.svg"
            value="1"
          />
          <DetailsComponent
            title="Built"
            icon="/icons/calenda.svg"
            value="2016"
          />
        </Box>
        <Box sx={{ margin: "2rem 0" }}>
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "600",
              margin: { xs: "0.4rem 0", md: "1.5rem 0" },
            }}
          >
            About this home
          </Typography>
          <Typography sx={{ color: Colors.TextGray }}>
            Laminate flooring is a more affordable option in place of hardwood
            flooring that can cost almost ten times the cost of laminate
            flooring. Laminate flooring is light, durable and can be made to
            resemble. Laminate flooring is light, durable and can be made to
            resemble.
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "600",
              margin: { xs: "1rem 0", md: "1.5rem 0" },
            }}
          >
            Features
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Features title="Availability" value="Yes" />
            <Features title="Type" value="Home" />
            <Features title="Cooling" value="Air Conditioner" />
            <Features title="Year built" value="2017" />
            <Features title="Location" value="Lagos" />
            <Features title="Packing space" value="Yes" />
            <Features title="Size" value="2,500sqft" />
            <Features title="Kitchen cabinet" value="Yes" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ flexBasis: "30%", paddingTop: { md: "2rem" } }}>
        <Box
          sx={{
            border: `2px solid ${Colors.lilacBorder}`,
            padding: { xs: "1rem", sm: "2rem", md: "1.5rem" },
            borderRadius: "8px",
            margin: { xs: "4rem 0 2rem" },
          }}
        >
          <Typography sx={{ color: Colors.TextGray }}>Sale price</Typography>
          <Typography
            sx={{
              color: Colors.BackroundOrTitle,
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            ₦ 12,000,000
          </Typography>
          <Button
            sx={{
              width: "100%",
              borderRadius: "8px",
              marginTop: { xs: "1rem" },
            }}
          >
            Sign in to buy
          </Button>
        </Box>

        <Box
          sx={{
            padding: { xs: "1rem", sm: "2rem", md: "1.5rem" },
            borderRadius: "8px",
            boxShadow: "2",
          }}
        >
          <Typography
            sx={{ fontWeight: "700", fontSize: "1.3rem", marginBottom: "1rem" }}
          >
            About Agent
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "space-between",
                sm: "space-around",
                md: "space-between",
              },
              gap: 2,
            }}
          >
            <Box
              component="img"
              src="/team/member1.svg"
              alt="member"
              sx={{
                width: { xs: "120px", sm: "200px", md: "120px" },
                height: { xs: "120px", sm: "200px", md: "120px" },
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: { sm: "1.5rem", md: "0.9rem" },
                }}
              >
                Ayanlowo Gabriel
              </Typography>
              <Typography
                sx={{
                  color: Colors.BackroundOrTitle,
                  fontWeight: "200",
                  fontSize: { xs: "0.7rem", sm: "1rem", md: "0.7rem" },
                }}
              >
                House Agent
              </Typography>
              <Typography
                sx={{
                  color: Colors.TextGray,
                  fontSize: { xs: "0.7rem", sm: "1rem", md: "0.7rem" },
                }}
              >
                {" "}
                +233 65 5457 98
              </Typography>
            </Box>
          </Box>

          <Box sx={{ margin: "1.5rem 0" }}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "1.3rem",
                marginBottom: "0.5rem",
              }}
            >
              Request home tour
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  flexBasis: "50%",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                >
                  In person
                </Button>
              </Box>

              <Box
                sx={{
                  flexBasis: "50%",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: `!important ${Colors.GreyBorder}`,
                    width: "100%",
                    borderRadius: "8px",
                  }}
                >
                  Virtual
                </Button>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 3, mb: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select a tour date"
                value={tourDate}
                onChange={(newValue) => setTourDate(newValue)}
                sx={{ width: "100%" }}
              />
            </LocalizationProvider>
          </Box>
          <Button
            variant="outlined"
            sx={{ width: "100%", borderRadius: "8px", marginTop: "1rem" }}
            onClick={() => {
              if (tourDate) {
                alert(`Tour successfully requested for: ${tourDate.format('MMM D, YYYY')}`);
              } else {
                alert('Please select a tour date first');
              }
            }}
          >
            Request tour
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

interface DetailProp {
  title: string;
  icon: string;
  value: string;
}

const Features = ({ title, value }: any) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          columnGap: "15px",
        }}
      >
        <Typography
          sx={{
            color: Colors.TextGray,
            flexBasis: { xs: "70%", md: "50%" },
            display: "flex",
            alignItems: "flex-end",
            columnGap: "6px",
            whiteSpace: "nowrap",
          }}
        >
          <Typography sx={{ width: "max-content" }}>{title}</Typography>

          <Box
            sx={{
              flexGrow: 1,
              height: "1px",
              borderBottom: `3px dotted ${Colors.TextGray}`,
              marginBottom: "0.3rem",
            }}
          />
        </Typography>
        <Typography
          sx={{ flexBasis: { xs: "30%", md: "50%" }, fontWeight: "700" }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

const DetailsComponent: React.FC<DetailProp> = ({ title, icon, value }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: Colors.TextGray, marginBottom: "0.3rem" }}>
          {title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Box
            component="img"
            src={icon}
            alt="prop1front"
            sx={{
              width: { xs: "20px", md: "30px" },
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
            {value}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDescription;
