import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import {
  Box,
  IconButton,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { Colors } from "../colors";
import CustomButton from "../shared/Button/CustomButton";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ position: "relative" }}>
        <Image src="/brandLogo.svg" alt="Logo" width="150" height="100" />
      </Box>
      {/* <Image  /> */}

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ background: Colors.White, boxShadow: "0" }}>
          <Toolbar
            sx={{
              width: { md: "90%" },
              marginInline: { md: "auto" },
            }}
          >
            <IconButton
              //   color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                position: "relative",
              }}
            >
              <Image
                src="/brandLogo.svg"
                alt="Logo"
                width="150"
                height="100"
                // layout="fill" // or layout="responsive"
                // objectFit="contain"
              />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: Colors.Black,
              }}
            >
              {navItems.map((item) => (
                <Button key={item} sx={{ color: Colors.Primary }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <CustomButton sx={{ marginRight: "1rem" }}>
                Get Started
              </CustomButton>
              <CustomButton variant="outlined">Login</CustomButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </React.Fragment>
  );
}
