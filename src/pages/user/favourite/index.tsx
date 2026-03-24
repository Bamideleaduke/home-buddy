import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { properties } from '@/components/mockData';
import PropertyDisplay from '@/components/shared/Card';
import { Colors } from '@/components/colors';
import Button from '@/components/shared/Button';
import { useRouter } from 'next/router';

export default function Favourite() {
  const router = useRouter();

  const [hasFavourites, setHasFavourites] = useState(false);
  
  const savedProperties = properties.slice(0, 3);

  return (
    <DashboardLayout title="Saved Property">
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', minHeight: '60vh', display: 'flex', flexDirection: 'column' }}>
        
        {!hasFavourites ? (
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <Box sx={{ width: 220, height: 220, mb: 3, position: 'relative', borderRadius: '50%', backgroundColor: '#f2f0fc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Box sx={{ width: 120, height: 90, backgroundColor: '#fff', border: `3px solid ${Colors.BackroundOrTitle}`, borderRadius: '8px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <Box sx={{ width: 30, height: 10, borderBottom: '3px solid #333', borderLeft: '3px solid transparent', borderRight: '3px solid transparent', position: 'absolute', top: -13, left: 10 }} />
                 <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '4px' }}>._.</Typography>
               </Box>
            </Box>
            
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#000' }}>
              No favourite yet
            </Typography>
            <Typography variant="body1" sx={{ color: Colors.TextGray, mb: 4, fontSize: '1.1rem' }}>
              You can start saving below
            </Typography>
            
            <Button
              sx={{ px: 4, py: 1.5, borderRadius: '8px', fontSize: '1rem', textTransform: 'none' }}
              onClick={() => router.push('/user/property-listing')}
            >
              Go to property listing
            </Button>
            
            <Box sx={{ mt: 10 }}>
              <Button variant="text" onClick={() => setHasFavourites(true)} sx={{ fontSize: '0.8rem', color: Colors.TextGray }}>
                [Dev: Toggle filled state]
              </Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
              <Button variant="text" onClick={() => setHasFavourites(false)} sx={{ fontSize: '0.8rem', color: Colors.TextGray }}>
                [Dev: Toggle empty state]
              </Button>
            </Box>
            <Grid container spacing={4}>
              {savedProperties.map((item: any) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Box sx={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                    <PropertyDisplay data={item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        
      </Box>
    </DashboardLayout>
  );
}
