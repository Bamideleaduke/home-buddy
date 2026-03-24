import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import AuthLayout from "@/components/Layout/AuthLayout";
import Input from "@/components/shared/form/Input";
import CustomButton from "@/components/shared/Button/CustomButton";
import { Colors } from "@/components/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push({
      pathname: "/auth/verify-otp",
      query: { email },
    });
  };

  return (
    <AuthLayout title="Forgot Password">
      <Box component="form" onSubmit={handleSubmit}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, marginBottom: "20px" }}
        >
          Forgot Your Password
        </Typography>

        <Box sx={{ marginBottom: "24px" }}>
          <Input
            name="email"
            label="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="Enter your email"
          />
        </Box>

        <CustomButton
          type="submit"
          fullWidth
          sx={{
            padding: "12px",
            fontSize: "1rem",
            marginBottom: "20px",
          }}
        >
          Reset Password
        </CustomButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            cursor: "pointer",
            "&:hover": { opacity: 0.8 },
          }}
          onClick={() => router.push("/auth/login")}
        >
          <Typography
            variant="body2"
            sx={{
              color: Colors.Primary,
              fontWeight: 500,
            }}
          >
            Back to login
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: 16, color: Colors.Primary }} />
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
