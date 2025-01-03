import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Rating,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { Colors } from "../colors";

const ReviewCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.OffWhite2,
        marginInline: { xs: "0.7rem", md: "1rem" },
        borderRadius: "16px",
        padding: { xs: "1rem 1rem 3rem" },
      }}
    >
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Box sx={{ width: "100%" }}>
                <Image
                  src="/footerLogo.svg"
                  alt="Logo"
                  width="50"
                  height="100"
                />
              </Box>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Adamu Grace" secondary="Houston,Texas" />
        </ListItem>
      </List>

      <Typography sx={{ textAlign: "left" }}>
        This company is awesome. I purchase my dream home, and I couldn&apos;t
        be happier with the experience.
      </Typography>
      <Box
        sx={{
          // border: "2px solid yellow",
          display: "flex",
          alignItems: "left",
          marginTop: "1rem",
        }}
      >
        <Rating
          name="half-rating-read"
          defaultValue={5.5}
          precision={0.5}
          readOnly
          // sx={{ border: "2px solid red" }}
          size="small"
        />
      </Box>
    </Box>
  );
};

export default ReviewCard;
