import { Colors } from "@/components/colors";
import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";

const materialTheme = createTheme();

export const GlobalTheme = createTheme(
  deepmerge(materialTheme, {
    typography: {
      fontSize: 16,
      h1: {
        fontWeight: 700,
        fontSize: materialTheme.typography.pxToRem(38),
        lineHeight: materialTheme.typography.pxToRem(48),
      },
      h2: {
        fontWeight: 700,
        fontSize: materialTheme.typography.pxToRem(34),
        lineHeight: materialTheme.typography.pxToRem(43),
      },
      h3: {
        fontWeight: 700,
        fontSize: materialTheme.typography.pxToRem(28),
        lineHeight: materialTheme.typography.pxToRem(38),
      },
      h4: {
        fontWeight: 700,
        fontSize: materialTheme.typography.pxToRem(24),
        lineHeight: materialTheme.typography.pxToRem(28),
      },
      h5: {
        fontWeight: 600,
        fontSize: materialTheme.typography.pxToRem(20),
        lineHeight: materialTheme.typography.pxToRem(24),
      },
      h6: {
        fontWeight: 600,
        fontSize: materialTheme.typography.pxToRem(16),
        lineHeight: materialTheme.typography.pxToRem(24),
      },
      body1: {
        fontWeight: 500,
        fontSize: materialTheme.typography.pxToRem(16),
       
      },
      body2: {
        fontWeight: 400,
        fontSize: materialTheme.typography.pxToRem(14),
        color:Colors.TextGray,
      },
      caption: {
        fontWeight: 400,
        fontSize: materialTheme.typography.pxToRem(12),
      },
      span: {
        fontWeight: 400,
        fontSize: materialTheme.typography.pxToRem(12),
      },
      fontFamily: [
        "Poppins",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    palette: {
      primary: {
        main: "#3c0c4f",
      },
      secondary: {
        main: "#ff8400",
      },
      background: {
        default: "#f3e9f7",
      },
    },
    // palette: {
    //   primary: {
    //     main: Colors.Secondary,
    //   },
    //   secondary: {},
    //   text: { primary: Colors.Primary },
    //   success: {
    //     main: Colors.Success,
    //   },
    //   gray: {},
    //   info: {
    //     main: Colors.Info,
    //   },
    // },
  })
);
