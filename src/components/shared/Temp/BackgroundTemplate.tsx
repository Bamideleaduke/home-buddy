import { Box } from "@mui/material";
import React from "react";

const BackgroundTemplate = ({
  children,
  sx,
  margintb,
  backgroundColor = "#fff",
}: any) => {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor ?? "",
        width: "100%",
        paddingTop: "3rem",
        padding: { xs: "3rem 1rem" },
        ...sx,
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "85%" },
          margin: margintb ?? { xs: "0 auto", md: "2rem auto" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BackgroundTemplate;
