import React from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { Colors } from '../colors';
import { whatWeDo } from '../mockData';
import Image from 'next/image';
import EastIcon from '@mui/icons-material/East';

const WhatWeDo = () => {
  return (
    <Box
      sx={{
        margin: { xs: '2rem auto', md: '6rem auto' },
      }}
    >
      <Typography
        variant='h3'
        color={Colors.BackroundOrTitle}
        sx={{
          textAlign: 'center',
        }}
      >
        What we do
      </Typography>

      <Box
        sx={{
          width: { xs: '90%', md: '85%' },
          margin: { xs: '0 auto', md: '4rem auto' },
        }}
      >
        <Grid
          container
          rowGap={6}
          justifyContent='space-between'
          margin={'2rem 0 4rem'}
        >
          {whatWeDo.map((item) => (
            <Grid item key={item.id} xs={12} md={3.5}>
              <Box
                sx={{
                  backgroundColor: Colors.White,
                  padding: { xs: '2rem 1rem', md: '1rem' },
                  borderRadius: '10px',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: Colors.OffWhite,
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '100%',
                    marginBottom: '1.5rem',
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width='40'
                    height='30'
                  />
                </Box>
                <Box sx={{ margin: '2rem 0 1rem' }}>
                  <Typography
                    variant='h6'
                    sx={{ marginBottom: '1rem', fontSize: '1.5rem' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ color: Colors.TextGray, fontSize: '1.2rem' }}
                  >
                    {item.text}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: Colors.BackroundOrTitle,
                    fontSize: '1rem',
                    fontWeight: '600',
                  }}
                >
                  Find A Home
                  <IconButton>
                    <EastIcon
                      sx={{
                        fontSize: '1.3rem',
                        color: Colors.BackroundOrTitle,
                      }}
                    />
                  </IconButton>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
