import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Colors } from "../colors";
import Input from "../shared/form/Input";
import Button from "../shared/Button";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <Box
      sx={{
        backgroundColor: Colors.White,
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "65%" },
          marginInline: { xs: "auto", md: "auto" },
        }}
      >
        <Box
          sx={{
            padding: "4rem 0 4rem",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <Typography variant="h4" sx={{ fontSize: { md: "2.7rem" } }}>
              Subscribe to our newsletter
            </Typography>
            <Typography variant="body1" marginBottom={"1rem"}>
              to get updates for newest property
            </Typography>
          </Box>
          <Box
            sx={{
              width: { md: "95%" },
              marginInline: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "10px", md: "20px" },
            }}
          >
            <Input
              name="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              size="large"
              sx={{
                padding: { xs: "13px 14px", md: "13px 36px" },
                borderRadius: "8px",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscribe;
