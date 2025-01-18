import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "@/components/colors";
import { currencyConverter } from "@/Utils/helper/helper-function";
import { useRouter } from "next/router";

const PropertyDisplay = ({ data }: any) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        // border: "2px solid red",
        width: "100%",
        backgroundColor: Colors.OffWhite,
        padding: "1rem",
        borderRadius: "10px",
      }}
      onClick={() => router.push(`/properties/${data.id}`)}
    >
      <Box>
        <Box
          component="img"
          src={data?.image}
          alt={data?.title}
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
          {currencyConverter(data?.price)}
        </Typography>
        <Typography variant="h3" sx={{ fontSize: "1.2rem" }}>
          {data?.title}
        </Typography>
        <Typography variant="body2">{data?.address}</Typography>
        <Box sx={{ display: "flex", marginTop: "1rem" }}>
          {data?.features.map((item: any) => (
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
