import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { useRouter } from 'next/router';
import { properties } from '@/components/mockData';
import { Colors } from '@/components/colors';
import Button from '@/components/shared/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { currencyConverter } from '@/Utils/helper/helper-function';
import PropertyDisplay from '@/components/shared/Card';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const FeatureTag = ({ text }: { text: string }) => (
  <Typography
    variant='body2'
    sx={{
      border: `1px solid ${Colors.Grey}`,
      borderRadius: '4px',
      padding: '2px 8px',
      color: Colors.TextGray,
      display: 'inline-block',
    }}
  >
    {text}
  </Typography>
);

export default function DashboardPropertyDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<any>(null);
  const [viewState, setViewState] = useState<'overview' | 'gallery'>(
    'overview',
  );
  const [activeTab, setActiveTab] = useState<
    'DESCRIPTION' | 'CUSTOMER REVIEWS'
  >('DESCRIPTION');

  useEffect(() => {
    if (id) {
      const found = properties.find((p) => String(p.id) === String(id));
      if (found) setProperty(found);
    }
  }, [id]);

  const handleBack = () => router.push('/user/property-listing');

  const recommendedListings = properties.slice(0, 3);

  const pageHeader = (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
      }}
    >
      <Typography
        variant='h6'
        sx={{
          color: Colors.TextGray,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleBack}
      >
        Property Listing{' '}
        <ArrowBackIosNewIcon sx={{ fontSize: '1rem', mx: 1 }} />
        <Typography
          component='span'
          variant='h6'
          sx={{ color: Colors.BackroundOrTitle, fontWeight: 700 }}
        >
          {property.title}
        </Typography>
      </Typography>
    </Box>
  );

  const topActions = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          color: Colors.TextGray,
        }}
      >
        <FavoriteBorderIcon sx={{ mr: 0.5, fontSize: '1.2rem' }} /> Favourite
      </Box>
      <Button
        sx={{
          borderRadius: '8px',
          px: 3,
          textTransform: 'none',
          backgroundColor: Colors.BackroundOrTitle,
        }}
      >
        {property.type === 'buy' ? 'Buy this property' : 'Rent this property'}
      </Button>
    </Box>
  );

  return (
    <DashboardLayout title=''>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        {viewState === 'overview' ? (
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
              }}
            >
              {pageHeader}
              <Box>{topActions}</Box>
            </Box>

            <Typography
              variant='h5'
              sx={{ fontWeight: 700, mb: 3, color: '#333' }}
            >
              Overview
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                mb: 4,
                height: { xs: 'auto', md: '450px' },
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component='img'
                  src={property.propImg?.[0]?.propFront || property.image}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  flex: 0.6,
                }}
              >
                <Box sx={{ flex: 1, borderRadius: '12px', overflow: 'hidden' }}>
                  <Box
                    component='img'
                    src={property.propImg?.[0]?.propSide || property.image}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                  onClick={() => setViewState('gallery')}
                >
                  <Box
                    component='img'
                    src={property.propImg?.[0]?.propInside || property.image}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(255,255,255,0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        color: '#000',
                      }}
                    >
                      See more pictures
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 4,
                    borderBottom: `1px solid #eee`,
                    mb: 3,
                  }}
                >
                  {['DESCRIPTION', 'CUSTOMER REVIEWS'].map((tab) => (
                    <Box
                      key={tab}
                      onClick={() => setActiveTab(tab as any)}
                      sx={{
                        pb: 1,
                        cursor: 'pointer',
                        borderBottom:
                          activeTab === tab
                            ? `3px solid ${Colors.BackroundOrTitle}`
                            : '3px solid transparent',
                        color: activeTab === tab ? '#000' : Colors.TextGray,
                        fontWeight: activeTab === tab ? 700 : 500,
                        fontSize: '0.9rem',
                      }}
                    >
                      {tab}
                    </Box>
                  ))}
                </Box>

                {activeTab === 'DESCRIPTION' && (
                  <Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 1,
                      }}
                    >
                      <Typography variant='h6' sx={{ fontWeight: 600 }}>
                        For default
                      </Typography>
                      <Typography
                        sx={{
                          border: `1px solid ${Colors.BackroundOrTitle}`,
                          color: Colors.BackroundOrTitle,
                          borderRadius: '4px',
                          px: 1,
                          fontSize: '0.8rem',
                        }}
                      >
                        Rent
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant='h4'
                        sx={{
                          color: Colors.BackroundOrTitle,
                          fontWeight: 700,
                          mr: 2,
                        }}
                      >
                        {currencyConverter(property.price)}
                      </Typography>
                      {property.features?.map((f: string) => (
                        <FeatureTag key={f} text={f} />
                      ))}
                    </Box>

                    <Typography sx={{ fontWeight: 500, mb: 4 }}>
                      {property.address}
                    </Typography>

                    <Typography variant='h6' sx={{ fontWeight: 700, mb: 1 }}>
                      About this home
                    </Typography>
                    <Typography
                      sx={{ color: Colors.TextGray, lineHeight: 1.6, mb: 5 }}
                    >
                      Laminate flooring is a more affordable option in place of
                      hardwood flooring that can cost almost twice the cost of
                      laminate flooring. Laminate flooring is light, durable and
                      can be made to resemble... Laminate flooring is light,
                      durable and can be made to resemble... Laminate flooring
                      is light, durable and can be made to resemble.
                    </Typography>

                    <Typography variant='h6' sx={{ fontWeight: 700, mb: 2 }}>
                      Property details
                    </Typography>

                    <Box
                      sx={{ backgroundColor: '#f2f0fc', px: 2, py: 1, mb: 2 }}
                    >
                      <Typography sx={{ fontWeight: 600 }}>Interior</Typography>
                    </Box>
                    <Grid container spacing={2} sx={{ mb: 4, pl: 2 }}>
                      <Grid item xs={6}>
                        <Typography
                          sx={{ color: Colors.TextGray, fontSize: '0.85rem' }}
                        >
                          Laundry information
                        </Typography>
                        <Typography sx={{ fontWeight: 500 }}>
                          Individual room laundry
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          sx={{ color: Colors.TextGray, fontSize: '0.85rem' }}
                        >
                          Cooling information
                        </Typography>
                        <Typography sx={{ fontWeight: 500 }}>
                          Air conditioner
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          sx={{ color: Colors.TextGray, fontSize: '0.85rem' }}
                        >
                          Kitchen information
                        </Typography>
                        <Typography sx={{ fontWeight: 500 }}>
                          Cabinet available
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          sx={{ color: Colors.TextGray, fontSize: '0.85rem' }}
                        >
                          Room information
                        </Typography>
                        <Typography sx={{ fontWeight: 500 }}>
                          3 bedroom available
                        </Typography>
                      </Grid>
                    </Grid>

                    <Box
                      sx={{ backgroundColor: '#f2f0fc', px: 2, py: 1, mb: 2 }}
                    >
                      <Typography sx={{ fontWeight: 600 }}>Exterior</Typography>
                    </Box>
                    <Grid container spacing={2} sx={{ mb: 4, pl: 2 }}>
                      <Grid item xs={6}>
                        <Typography
                          sx={{ color: Colors.TextGray, fontSize: '0.85rem' }}
                        >
                          Fencing
                        </Typography>
                        <Typography sx={{ fontWeight: 500 }}>
                          Brick wall fencing
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          sx={{ color: Colors.TextGray, fontSize: '0.85rem' }}
                        >
                          Parking
                        </Typography>
                        <Typography sx={{ fontWeight: 500 }}>
                          Uncovered space - 2
                        </Typography>
                      </Grid>
                    </Grid>

                    <Box
                      sx={{
                        mt: 5,
                        width: '100%',
                        height: '300px',
                        backgroundColor: '#e0e0e0',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography sx={{ color: '#888' }}>
                        Mockup Map Placeholder
                      </Typography>
                    </Box>
                  </Box>
                )}

                {activeTab === 'CUSTOMER REVIEWS' && (
                  <Box sx={{ py: 4, textAlign: 'center' }}>
                    <Typography color='textSecondary'>
                      No reviews available yet.
                    </Typography>
                  </Box>
                )}
              </Grid>

              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    mb: 4,
                    backgroundColor: '#fff',
                  }}
                >
                  <Typography sx={{ fontWeight: 700, mb: 2 }}>
                    Agent details
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      component='img'
                      src='/team/member1.svg'
                      sx={{ width: 60, height: 60, borderRadius: '50%' }}
                    />
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
                        Ayanlowo Gabriel
                      </Typography>
                      <Typography
                        sx={{
                          color: Colors.BackroundOrTitle,
                          fontSize: '0.8rem',
                          mb: 0.5,
                        }}
                      >
                        House Agent
                      </Typography>
                      <Typography
                        sx={{ color: Colors.TextGray, fontSize: '0.8rem' }}
                      >
                        +233 65 5457 98
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    backgroundColor: '#fff',
                  }}
                >
                  <Typography sx={{ fontWeight: 700, mb: 2 }}>
                    Request home tour
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                    <Button
                      variant='outlined'
                      sx={{
                        flex: 1,
                        py: 1,
                        textTransform: 'none',
                        borderColor: Colors.BackroundOrTitle,
                        color: Colors.BackroundOrTitle,
                      }}
                    >
                      In person
                    </Button>
                    <Button
                      variant='contained'
                      sx={{
                        flex: 1,
                        py: 1,
                        textTransform: 'none',
                        backgroundColor: '#f5f5f5',
                        color: '#666',
                        boxShadow: 'none',
                        '&:hover': {
                          backgroundColor: '#eee',
                          boxShadow: 'none',
                        },
                      }}
                    >
                      Virtual
                    </Button>
                  </Box>
                  <Button
                    variant='contained'
                    sx={{
                      width: '100%',
                      backgroundColor: Colors.BackroundOrTitle,
                      color: '#fff',
                      py: 1.5,
                      textTransform: 'none',
                    }}
                  >
                    Request tour
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ mt: 8 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <Typography variant='h5' sx={{ fontWeight: 700 }}>
                  Recommended Listing
                </Typography>
                <Typography sx={{ color: Colors.TextGray, cursor: 'pointer' }}>
                  See more
                </Typography>
              </Box>
              <Grid container spacing={3}>
                {recommendedListings.map((item: any) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <PropertyDisplay data={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
              }}
            >
              {pageHeader}
              <Box>{topActions}</Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
              }}
            >
              <Typography variant='h4' sx={{ fontWeight: 700, color: '#333' }}>
                Photo gallery
              </Typography>
            </Box>
            <Typography
              sx={{
                color: Colors.BackroundOrTitle,
                display: 'flex',
                alignItems: 'center',
                mb: 4,
                cursor: 'pointer',
                fontWeight: 600,
              }}
              onClick={() => setViewState('overview')}
            >
              <ArrowBackIcon sx={{ mr: 1, fontSize: '1.2rem' }} /> Back
            </Typography>

            <Box sx={{ backgroundColor: '#f2f0fc', px: 2, py: 1.5, mb: 3 }}>
              <Typography sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                Interior
              </Typography>
            </Box>
            <Grid container spacing={2} sx={{ mb: 6 }}>
              <Grid item xs={12} md={6}>
                <Box
                  component='img'
                  src={property.propImg?.[0]?.propInside || property.image}
                  sx={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component='img'
                  src={property.propImg?.[0]?.propFront || property.image}
                  sx={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component='img'
                  src={property.propImg?.[0]?.propSide || property.image}
                  sx={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component='img'
                  src={property.propImg?.[0]?.propInside || property.image}
                  sx={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </Grid>
            </Grid>

            <Box sx={{ backgroundColor: '#f2f0fc', px: 2, py: 1.5, mb: 3 }}>
              <Typography sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                Exterior
              </Typography>
            </Box>
            <Grid container spacing={2} sx={{ mb: 6 }}>
              <Grid item xs={12} md={6}>
                <Box
                  component='img'
                  src={property.propImg?.[0]?.propFront || property.image}
                  sx={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component='img'
                  src={property.propImg?.[0]?.propSide || property.image}
                  sx={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </DashboardLayout>
  );
}
