import React from "react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

type SocialProvider = "google" | "facebook";

interface SocialAuthButtonProps {
  provider: SocialProvider;
  onClick?: () => void;
  mode?: "signup" | "login";
}

const providerConfig: Record<
  SocialProvider,
  { label: string; icon: string }
> = {
  google: {
    label: "Google",
    icon: "/google.svg",
  },
  facebook: {
    label: "Facebook",
    icon: "/facebook.svg",
  },
};

const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({
  provider,
  onClick,
  mode = "signup",
}) => {
  const config = providerConfig[provider];
  const actionText = mode === "signup" ? "Sign Up" : "Sign In";

  return (
    <Button
      variant="outlined"
      fullWidth
      onClick={onClick}
      sx={{
        borderColor: "#dfdcee",
        borderRadius: "12px",
        padding: "10px 16px",
        textTransform: "none",
        color: "#272727",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        "&:hover": {
          borderColor: "#6E5DCF",
          backgroundColor: "#F8F7FC",
        },
      }}
    >
      <Image
        src={config.icon}
        alt={`${config.label} icon`}
        width={20}
        height={20}
      />
      <Typography
        variant="body2"
        sx={{ color: "#272727", fontWeight: 500 }}
      >
        {actionText} with {config.label}
      </Typography>
    </Button>
  );
};

export default SocialAuthButton;
