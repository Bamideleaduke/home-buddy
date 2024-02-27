import { Grid, Box, Link, styled, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../colors";
import { footer, socials } from "../mockData";
import Image from "next/image";

const FooterLink = styled(Link)`
  color: ${Colors.Primary};
`;
const Footer = () => {
  return (
    <Box sx={{ background: Colors.BackroundOrTitle }}>
      <Grid
        container
        justify-content="center"
        align-items="center"
        sx={{
          width: { md: "90%" },
          marginInline: "auto",
          padding: { md: "3rem 0 2rem" },
        }}
      >
        <Grid item md={6}>
          <Box>
            <Image src="/footerLogo.svg" alt="Logo" width="200" height="100" />
            <Typography
              variant="body1"
              sx={{
                color: Colors.OffWhite,
                width: "210px",
                marginBottom: "2rem",
              }}
            >
              158 Newtown Street, 100149 Ibadan, Oyo state. Nigeria
            </Typography>
            <Box>
              {socials.map((item) => {
                return (
                  <Image
                    key={item.id}
                    src={item.icon}
                    alt={item.text}
                    width="15"
                    height="15"
                    style={{ marginRight: "0.7rem" }}
                  />
                );
              })}
            </Box>
          </Box>
        </Grid>
        <Grid item md={5}>
          <Grid
            container
            rowSpacing={3}
            justify-content="space-between"
          >
            {footer.map((item) => {
              return (
                <Grid item key={item.id} md={4}>
                  <FooterLink
                    href={item.route}
                    sx={{ textDecoration: "none", color: Colors.OffWhite }}
                  >
                    {item.text}
                  </FooterLink>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Typography
        sx={{ textAlign: "center", color: Colors.Grey, lineHeight: "6" }}
      >
        Copyrignt @HomeBuddy 2023. All right reserved
      </Typography>
    </Box>
  );
};

export default Footer;
