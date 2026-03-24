import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Avatar, IconButton, Badge } from '@mui/material';
import { Colors } from '../colors';
import Image from 'next/image';
import { useRouter } from 'next/router';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const DRAWER_WIDTH = 260;

const menuItems = [
  { text: 'Home', icon: <HomeOutlinedIcon />, path: '/user/home' },
  { text: 'Property Listing', icon: <DashboardCustomizeOutlinedIcon />, path: '/user/property-listing' },
  { text: 'Favourite', icon: <FavoriteBorderOutlinedIcon />, path: '/user/favourite' },
  { text: 'Transaction', icon: <ReceiptLongOutlinedIcon />, path: '/user/transaction' },
  { text: 'Settings', icon: <SettingsOutlinedIcon />, path: '/user/settings' },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title = "Dashboard" }) => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const currentPath = router.pathname;

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: Colors.BackroundOrTitle, color: '#fff' }}>
      <Box sx={{ p: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Image src="/brandLogo.svg" alt="logo" width={140} height={40} style={{ filter: "brightness(0) invert(1)" }} />
      </Box>
      <List sx={{ flexGrow: 1, px: 2, pt: 2 }}>
        {menuItems.map((item) => {
          const isActive = currentPath.includes(item.path);
          return (
            <ListItem
              button
              key={item.text}
              onClick={() => router.push(item.path)}
              sx={{
                mb: 1,
                borderRadius: '8px',
                backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }
              }}
            >
              <ListItemIcon sx={{ color: '#fff', minWidth: '40px' }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: '0.95rem', fontWeight: isActive ? 600 : 400 }}>{item.text}</Typography>}
              />
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ p: 2, mb: 4 }}>
        <ListItem
          button
          onClick={() => router.push('/')}
          sx={{ borderRadius: '8px', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
        >
          <ListItemIcon sx={{ color: '#fff', minWidth: '40px' }}><LogoutOutlinedIcon /></ListItemIcon>
          <ListItemText primary={<Typography sx={{ fontSize: '0.95rem' }}>Log out</Typography>} />
        </ListItem>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafc' }}>

      <Box component="nav" sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH, border: 'none' },
          }}
        >
          {drawerContent}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH, border: 'none' },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${DRAWER_WIDTH}px)` } }}>
        <Box sx={{
          height: '80px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #eaeaea',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, md: 4 }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" sx={{ color: Colors.BackroundOrTitle, fontWeight: 700, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
              {title}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Badge color="error" variant="dot" invisible={false}>
              <NotificationsNoneOutlinedIcon sx={{ color: '#555' }} />
            </Badge>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 1, borderRadius: '40px', backgroundColor: '#f5f5f5', cursor: 'pointer' }}>
              <Avatar src="/team/member1.svg" sx={{ width: 32, height: 32 }} />
              <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>James Ade</Typography>
              <ExpandMoreOutlinedIcon sx={{ fontSize: '1.2rem', color: '#666' }} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ p: { xs: 2.5, md: 5 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
