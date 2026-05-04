import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title = 'HomeBuddy',
}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title} | HomeBuddy</title>
        <meta name='description' content={`${title} - HomeBuddy`} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/brandLogo.svg' />
      </Head>
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          position: 'relative',
          backgroundImage: 'url(/auth-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '24px 16px', md: '40px 80px' },
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(110, 93, 207, 0.75) 0%, rgba(110, 93, 207, 0.55) 100%)',
            zIndex: 0,
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 24,
            left: 32,
            zIndex: 2,
            cursor: 'pointer',
          }}
          onClick={() => router.push('/')}
        >
          <Image
            src='/brandLogo.svg'
            alt='HomeBuddy Logo'
            width={140}
            height={50}
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </Box>

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: 480,
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: { xs: '32px 24px', md: '40px 36px' },
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default AuthLayout;
