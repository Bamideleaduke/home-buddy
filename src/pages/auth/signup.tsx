import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import AuthLayout from "@/components/Layout/AuthLayout";
import Input from "@/components/shared/form/Input";
import CustomButton from "@/components/shared/Button/CustomButton";
import SocialAuthButton from "@/components/shared/Button/SocialAuthButton";
import { Colors } from "@/components/colors";

interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
}

const SignupPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push({
      pathname: "/auth/verify-otp",
      query: { email: formData.email },
    });
  };

  return (
    <AuthLayout title="Sign Up">
      <Box component="form" onSubmit={handleSubmit}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, marginBottom: "4px" }}
        >
          Get Started
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: Colors.TextGray, marginBottom: "24px" }}
        >
          Let&apos;s get you started by creating an account
        </Typography>

        <Box sx={{ marginBottom: "16px" }}>
          <Input
            name="fullName"
            label="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </Box>

        <Box sx={{ marginBottom: "16px" }}>
          <Input
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </Box>

        <Box sx={{ marginBottom: "24px" }}>
          <Input
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </Box>

        <CustomButton
          type="submit"
          fullWidth
          sx={{
            padding: "12px",
            fontSize: "1rem",
            marginBottom: "16px",
          }}
        >
          Get started
        </CustomButton>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
          <SocialAuthButton provider="google" mode="signup" />
          <SocialAuthButton provider="facebook" mode="signup" />
        </Box>

        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: Colors.TextGray }}
        >
          Already have an account?{" "}
          <Typography
            component="span"
            variant="body2"
            sx={{
              color: Colors.BackroundOrTitle,
              fontWeight: 600,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => router.push("/auth/login")}
          >
            Sign In
          </Typography>
        </Typography>
      </Box>
    </AuthLayout>
  );
};

export default SignupPage;
