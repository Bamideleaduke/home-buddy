import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "../Button";
import { Colors } from "@/components/colors";

interface NavProp {
  navData: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
const ContentNavigationButton = ({
  navData,
  activeTab,
  setActiveTab,
}: NavProp) => {
  return (
    <Box sx={{ display: "flex", columnGap: 4 }}>
      {navData.map((navItem) => {
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
  );
};

export default ContentNavigationButton;
