import { Colors } from "@/components/colors";
import { Box, ButtonProps, Button as MuiButton, styled } from "@mui/material";
import React from "react";

const StyledButton = styled(MuiButton)(({ variant }) => ({
  borderRadius: "12px",
  // padding: "10px 40px",
  textTransform: "none",
  //   boxShadow: "4px 4px 6px 0px rgba(236, 126, 129, 0.50)",
  "&.MuiButton-containedPrimary": {
    background: Colors.BtnColor,
    color: Colors.OffWhite,
    border: `1px solid var(--shite-space, ${Colors.BtnColor})`,
  },
  "&.Mui-disabled": {
    color: Colors.Grundge,
    background: Colors.TextGray,
    border: "1px solid var(--shite-space, #FFF)",
  },
  ...(variant === "text" && {
    padding: "2px 16px",
    boxShadow: "unset",
    fontWeight: 600,
  }),
  ...(variant === "outlined" && {
    boxShadow: "unset",
    fontWeight: 600,
    background: Colors.White,
    color: Colors.BtnColor,
    border: `2px solid var(--shite-space, ${Colors.BtnColor})`,
  }),
}));

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, color, ...restProp }, ref) => {
    return (
      <Box>
        <StyledButton
          color={color}
          variant={variant ?? "contained"}
          ref={ref}
          {...restProp}
        />
      </Box>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
