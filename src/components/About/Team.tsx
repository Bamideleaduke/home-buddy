import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { Colors } from "../colors";
import { team } from "../mockData";
import Button from "../shared/Button";

const Team = () => {
  return (
    <Box sx={{ margin: { xs: "2rem auto", md: "6rem auto" } }}>
      <Box sx={{ marginBottom: "4rem" }}>
        <Typography
          variant="h3"
          color={Colors.BackroundOrTitle}
          sx={{
            textAlign: "center",
            fontSize: "1rem",
            mb: "1rem",
          }}
        >
          EXPERT IS HERE
        </Typography>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontSize: "3rem",
          }}
        >
          Meet our property team
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "90%", md: "85%" },
          margin: { xs: "0 auto", md: "4rem auto" },
        }}
      >
        <Grid
          container
          // gap={7}
          justifyContent="space-between"
          rowGap={6}
          sx={{ columnGap: { sm: 0.5 } }}
        >
          {team.map((item) => {
            return (
              <Grid item key={item.id} xs={12} sm={3.7} md={3.4}>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: Colors.OffWhite,
                  }}
                >
                  <Box>
                    <Box
                      component="img"
                      src={item.icon}
                      alt={item.name}
                      sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "fill",
                      }}
                    />
                  </Box>

                  <Box sx={{ padding: "1rem 1rem" }}>
                    <Typography variant="h3" sx={{ fontSize: "1.2rem" }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2">{item.role}</Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Box
          sx={{
            display: "flex",
            items: "center",
            justifyContent: "center",
            margin: "4rem 0 2rem 0",
          }}
        >
          <Button size="large" sx={{ borderRadius: "0" }}>
            Get stated
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
